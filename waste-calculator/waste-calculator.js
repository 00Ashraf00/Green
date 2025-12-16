(() => {
  const WEIGHTS = {
    gloves: 0.0035, masks: 0.002, cups: 0.004, syringes: 0.006, impressionMaterial: 0.1,
    chemicalBottle: 0.05, sharps: 0.003, gowns: 0.015, headCaps: 0.002, shoeCovers: 0.006,
    surfaceBarriers: 0.003, cottonRolls: 0.001, gauzePads: 0.0015, salivaEjectors: 0.004,
    syringeTips: 0.003, sterilizationPouches: 0.008
  };

  const KEYS = Object.keys(WEIGHTS);
  const PERIOD_DIVISORS = { daily: 1, weekly: 7, monthly: 30 };
  const $ = id => document.getElementById(id);

  // Material display names
  const MATERIAL_NAMES = {
    gloves: "Nitrile Gloves", masks: "Surgical Masks", cups: "Plastic Cups",
    syringes: "Syringes", impressionMaterial: "Impression Material",
    chemicalBottle: "Chemical Bottles", sharps: "Sharps", gowns: "Disposable Gowns",
    headCaps: "Head Caps", shoeCovers: "Shoe Covers", surfaceBarriers: "Surface Barriers",
    cottonRolls: "Cotton Rolls", gauzePads: "Gauze Pads", salivaEjectors: "Saliva Ejectors",
    syringeTips: "Air-Water Syringe Tips", sterilizationPouches: "Sterilization Pouches"
  };

  // Colors for pie chart
  const MATERIAL_COLORS = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
    '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B88B', '#A9DFBF',
    '#D7BDE2', '#F1948A', '#85C1E2', '#F8B88B', '#ABEBC6', '#F9E79F'
  ];

  let chartInstance = null;
  let stickyChartInstance = null;

  function periodToLabel(period) {
    switch ((period || "").toLowerCase()) {
      case 'daily': return '/day';
      case 'weekly': return '/week';
      default: return '/month';
    }
  }

  function compute() {
    try {
      const period = $('period') ? $('period').value : 'daily';
      const displayDivisor = PERIOD_DIVISORS[period] || 1;
      const patients = Math.max(0, Number($('patients') ? $('patients').value : 0));

      let totalWasteKg = 0;
      let recyclableKg = 0;
      let medicalKg = 0;
      const materialWastes = {};

      // compute totals: respect scope per material (per_patient vs per_period)
      KEYS.forEach(key => {
        const inputEl = $(key);
        const scopeEl = $(key + 'Scope');
        if (!inputEl || !scopeEl) return;

        const qtyInput = Number(inputEl.value) || 0;
        const scope = scopeEl.value || 'per_patient';

        // units used in the selected period:
        const unitsUsed = (scope === 'per_period') ? qtyInput : (qtyInput * patients);
        const kg = unitsUsed * (WEIGHTS[key] || 0);

        totalWasteKg += kg;
        materialWastes[key] = kg;

        // classify recyclable / medical
        if (['gloves', 'masks', 'cups'].includes(key)) recyclableKg += kg;
        if (['sharps', 'syringes', 'impressionMaterial', 'sterilizationPouches', 'chemicalBottle'].includes(key)) medicalKg += kg;
      });

      // display values: convert from selected period to daily-equivalent
      const displayTotal = totalWasteKg / displayDivisor;
      const displayRecyclable = recyclableKg / displayDivisor;
      const displayMedical = medicalKg / displayDivisor;
      const displayWastePerPatient = patients > 0 ? (displayTotal / patients) : 0;

      // update UI
      if ($('totalWaste')) $('totalWaste').textContent = displayTotal.toFixed(3);
      if ($('recyclableWaste')) $('recyclableWaste').textContent = displayRecyclable.toFixed(3);
      if ($('medicalWaste')) $('medicalWaste').textContent = displayMedical.toFixed(3);
      if ($('wastePerPatient')) $('wastePerPatient').textContent = displayWastePerPatient.toFixed(3);

      // update period labels
      const label = periodToLabel(period);
      ['resultPeriodLabel', 'resultPeriodLabel2', 'resultPeriodLabel3', 'resultPeriodLabel4'].forEach(id => { const s = $(id); if (s) s.textContent = label; });

      // sticky mobile
      if ($('stickyTotal')) $('stickyTotal').textContent = displayTotal.toFixed(3) + ' kg ' + label;
      if ($('stickyPer')) $('stickyPer').textContent = displayWastePerPatient.toFixed(3) + ' kg ' + label;
      if ($('stickyRecyclable')) $('stickyRecyclable').textContent = displayRecyclable.toFixed(3);
      if ($('stickyMedical')) $('stickyMedical').textContent = displayMedical.toFixed(3);

      // benchmark
      let benchmarkText = '-', benchmarkClass = 'neutral';
      if (displayWastePerPatient < 0.15) { benchmarkText = 'Excellent sustainability'; benchmarkClass = 'green'; }
      else if (displayWastePerPatient <= 0.25) { benchmarkText = 'Average'; benchmarkClass = 'yellow'; }
      else { benchmarkText = 'High waste — improvement needed'; benchmarkClass = 'red'; }

      const benchmarkLabel = $('benchmarkLabel'), benchmarkTextEl = $('benchmarkText');
      if (benchmarkLabel && benchmarkTextEl) {
        benchmarkLabel.textContent = benchmarkText;
        benchmarkLabel.className = 'badge ' + benchmarkClass;
        benchmarkTextEl.textContent = benchmarkClass === 'green' ? 'Per-patient waste is low.' : benchmarkClass === 'yellow' ? 'Per-patient waste is moderate.' : 'Consider reviewing consumable usage.';
      }

      if ($('stickyBenchmark')) $('stickyBenchmark').innerHTML = `<span class="badge ${benchmarkClass}">${benchmarkText}</span>`;

      // Material-Level Insights: Pie chart and top material
      const chartData = KEYS
        .map(key => ({ key, waste: materialWastes[key] || 0, name: MATERIAL_NAMES[key] }))
        .filter(item => item.waste > 0)
        .sort((a, b) => b.waste - a.waste);

      const insightsWrap = $('insightsWrap');
      const insightsText = $('insightsText');

      if (chartData.length === 0) {
        if (insightsWrap) insightsWrap.style.display = 'none';
      } else {
        if (insightsWrap) insightsWrap.style.display = 'block';

        // Top material info only
        const topMaterial = chartData[0];
        const topPercentage = ((topMaterial.waste / totalWasteKg) * 100).toFixed(0);

        // Create alert HTML for top material only
        let rankedHTML = '<div style="text-align: left; padding: 8px 0;">';
        rankedHTML += `<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px; padding: 8px; background: #fff3cd; border-radius: 6px; border-left: 4px solid #f59e0b;">
          <span style="font-size: 1.2rem;">⚠️</span>
          <div>
            <strong style="color: #d97706;">Top Consumption Alert</strong>
            <br><span style="font-size: 0.85rem; color: #92400e;">${topMaterial.name}: ${topPercentage}% of total waste</span>
          </div>
        </div>`;

        rankedHTML += '<div style="margin-top: 10px; padding: 8px; background: #ecfdf5; border-radius: 6px; border-left: 4px solid #10b981;"><span style="font-size: 0.9rem; color: #047857;"><strong>💡 Focus on reducing this material for maximum impact.</strong></span></div>';
        rankedHTML += '</div>';

        if (insightsText) insightsText.innerHTML = rankedHTML;

        // Update pie chart
        updatePieChart(chartData);

        // Sticky mobile insights
        const stickyInsights = $('stickyInsights');
        if (stickyInsights) {
          stickyInsights.innerHTML = `<div style="text-align: left;">
            <div style="margin-bottom: 6px;"><strong>⚠️ Top: ${topMaterial.name}</strong> (${topPercentage}%)</div>
            <div style="margin-top: 6px; font-size: 0.85rem; color: #047857;">💡 Reduce this material first</div>
          </div>`;
        }
      }

    } catch (err) {
      console.error('compute error', err);
    }
  }

  function updatePieChart(chartData) {
    const ctx = $('materialChart');
    if (!ctx) return;

    const labels = chartData.map(d => d.name);
    const data = chartData.map(d => parseFloat(d.waste.toFixed(3)));
    const colors = chartData.map((_, i) => MATERIAL_COLORS[i % MATERIAL_COLORS.length]);

    if (chartInstance) {
      chartInstance.data.labels = labels;
      chartInstance.data.datasets[0].data = data;
      chartInstance.data.datasets[0].backgroundColor = colors;
      chartInstance.update();
    } else {
      chartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [{
            data: data,
            backgroundColor: colors,
            borderColor: '#ffffff',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                font: { size: 12 },
                padding: 10,
                usePointStyle: true
              }
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  const label = context.label || '';
                  const value = context.parsed || 0;
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = ((value / total) * 100).toFixed(1);
                  return `${label}: ${value.toFixed(3)} kg (${percentage}%)`;
                }
              }
            }
          }
        }
      });
    }

    // Update sticky mobile chart
    const stickyCtx = $('stickyMaterialChart');
    if (stickyCtx) {
      if (stickyChartInstance) {
        stickyChartInstance.data.labels = labels;
        stickyChartInstance.data.datasets[0].data = data;
        stickyChartInstance.data.datasets[0].backgroundColor = colors;
        stickyChartInstance.update();
      } else {
        stickyChartInstance = new Chart(stickyCtx, {
          type: 'doughnut',
          data: {
            labels: labels,
            datasets: [{
              data: data,
              backgroundColor: colors,
              borderColor: '#ffffff',
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  font: { size: 10 },
                  padding: 6,
                  usePointStyle: true
                }
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    const label = context.label || '';
                    const value = context.parsed || 0;
                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                    const percentage = ((value / total) * 100).toFixed(1);
                    return `${label}: ${value.toFixed(2)} kg`;
                  }
                }
              }
            }
          }
        });
      }
    }
  }

  function init() {
    const periodEl = $('period');
    if (periodEl) periodEl.value = periodEl.value || 'daily';
    KEYS.forEach(key => {
      const el = $(key);
      const scope = $(key + 'Scope');
      if (el) {
        el.value = el.value || '0';
        el.setAttribute('min', '0');
        el.setAttribute('step', '1');
        el.addEventListener('input', compute);
        el.addEventListener('change', compute);
      }
      if (scope) scope.addEventListener('change', compute);
    });
    const period = $('period'); if (period) period.addEventListener('change', compute);
    const patients = $('patients'); if (patients) { patients.value = patients.value || '0'; patients.addEventListener('input', compute); }

    compute();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  document.addEventListener('DOMContentLoaded', () => {
    const stickyToggle = $('stickyToggle');
    const stickyExpanded = $('stickyExpanded');
    const formCol = document.querySelector('.form-col');

    if (stickyToggle && stickyExpanded && formCol) {
      stickyToggle.addEventListener('click', function () {
        const expanded = stickyExpanded.style.display === 'block';
        stickyExpanded.style.display = expanded ? 'none' : 'block';
        stickyToggle.textContent = expanded ? 'Details' : 'Hide';

        // Only apply padding adjustments on small screens where sticky is shown
        if (window.innerWidth <= 900) {
          if (expanded) {
            // Details are collapsing: reduce padding
            if (window.innerWidth <= 480) formCol.style.paddingBottom = '320px';
            else if (window.innerWidth <= 600) formCol.style.paddingBottom = '300px';
            else formCol.style.paddingBottom = '280px';
          } else {
            // Details are expanding: increase padding
            if (window.innerWidth <= 480) formCol.style.paddingBottom = '400px';
            else if (window.innerWidth <= 600) formCol.style.paddingBottom = '380px';
            else formCol.style.paddingBottom = '340px';
          }
        } else {
          // On larger screens ensure no inline padding remains
          formCol.style.paddingBottom = '';
        }
      });

      // Reset inline padding if window is resized above mobile breakpoint
      window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
          formCol.style.paddingBottom = '';
          // also ensure sticky expanded hidden (optional)
          const stickyExpandedEl = $('stickyExpanded');
          if (stickyExpandedEl) stickyExpandedEl.style.display = 'none';
          if (stickyToggle) stickyToggle.textContent = 'Details';
        }
      });
    }
  });
})();
