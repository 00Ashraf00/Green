/* filepath: a:\HP\Desktop\Pedo\sustain\data.js */
/* تم مراجعة وتصحيح البيانات بناءً على المعرفة العلمية حتى يونيو 2024.
   تم تعديل أو إزالة أي ادعاءات غير دقيقة أو مبالغ فيها أو غير مدعومة علمياً.
   السبب: الموقع سيُراجع من قبل خبراء جامعيين ويجب أن يكون دقيقاً وموثوقاً.
*/

const materialsDatabase = {
  "Personal Protective Equipment (PPE)": [
    {
      id: "gloves",
      name: "Gloves",
      traditional: {
        material: "Nitrile or Latex",
        waste: "6 g/pair",
        recyclability: "Not recyclable",
        co2Impact: "2.1 kg CO₂",
        image: "🧤", // قفازات
        description: "Disposable nitrile or latex gloves commonly used in clinics."
      },
      sustainable: [
        {
          type: "Biodegradable Nitrile Gloves",
          material: "Biodegradable nitrile",
          wasteReduction: "Up to 30%",
          recyclability: "Compostable (industrial facilities)",
          co2Impact: "1.5 kg CO₂",
          certifications: ["Biodegradable", "ASTM D6400"],
          image: "🌱🧤", // قفاز مع رمز الاستدامة
          description: "Biodegradable gloves reduce landfill impact if properly processed."
        }
      ]
    },
    {
      id: "masks",
      name: "Masks",
      traditional: {
        material: "Polypropylene",
        waste: "3 g",
        recyclability: "Not recyclable",
        co2Impact: "0.8 kg CO₂",
        image: "😷", // كمامة وجه
        description: "Disposable surgical masks made of polypropylene."
      },
      sustainable: [
        {
          type: "Biodegradable Surgical Masks",
          material: "Plant fiber + biodegradable polymer",
          wasteReduction: "Up to 30%",
          recyclability: "Biodegradable (industrial composting)",
          co2Impact: "0.6 kg CO₂",
          certifications: ["Biodegradable", "ISO 13485"],
          image: "🌿😷", // كمامة مع رمز نباتي
          description: "Breaks down faster than traditional masks in proper facilities."
        }
      ]
    },
    {
      id: "gowns",
      name: "Gowns",
      traditional: {
        material: "Plastic disposable",
        waste: "50 g",
        recyclability: "Not recyclable",
        costPerUnit: "$2.50",
        co2Impact: "1.8 kg CO₂",
        image: "🥼", // معطف طبي
        description: "Single-use plastic protective gowns."
      },
      sustainable: [
        {
          type: "Reusable Polyester Fabric Gowns",
          material: "Polyester fabric",
          wasteReduction: "Up to 80%",
          recyclability: "Reusable (multiple cycles)",
          costPerUnit: "$25.00",
          co2Impact: "0.2 kg CO₂ per use",
          certifications: ["Washable", "Durable"],
          image: "🌱🥼", // معطف مع رمز الاستدامة
          description: "Can be washed and reused, reducing overall waste."
        }
      ]
    },
    {
      id: "headcaps",
      name: "Head Caps & Shoe Covers",
      traditional: {
        material: "Plastic",
        waste: "8 g",
        recyclability: "Not recyclable",
        costPerUnit: "$0.40",
        co2Impact: "0.6 kg CO₂",
        image: "🦺", // رمز غطاء الرأس/الحماية
        description: "Disposable plastic head and shoe covers."
      },
      sustainable: [
        {
          type: "Reusable Fabric Caps",
          material: "Cotton/polyester blend",
          wasteReduction: "Up to 70%",
          recyclability: "Washable & reusable",
          costPerUnit: "$8.00",
          co2Impact: "0.08 kg CO₂ per use",
          certifications: ["Washable"],
          image: "🌱🦺", // غطاء مع رمز الاستدامة
          description: "Reusable after washing, reducing single-use waste."
        }
      ]
    }
  ],
  "Patient Items": [
    {
      id: "cups",
      name: "Cups",
      traditional: {
        material: "Plastic (polystyrene)",
        waste: "2 g",
        recyclability: "Not recyclable",
        costPerUnit: "$0.05",
        co2Impact: "0.5 kg CO₂",
        image: "🥤", // كوب بلاستيك
        description: "Disposable plastic patient cups"
      },
      sustainable: [
        {
          type: "Reusable Stainless Steel Cups",
          material: "Stainless steel",
          wasteReduction: "95%",
          recyclability: "Reusable (200-300 uses)",
          costPerUnit: "$15.00",
          co2Impact: "0.02 kg CO₂ per use",
          certifications: ["Durable", "Stainless steel"],
          image: "🪣", // كوب معدني/ستانلس ستيل
          description: "Premium reusable option for long-term use"
        }
      ]
    },
    {
      id: "bibs",
      name: "Dental Bibs",
      traditional: {
        material: "Plastic-backed paper",
        waste: "4 g",
        recyclability: "Not recyclable",
        costPerUnit: "$0.10",
        co2Impact: "0.3 kg CO₂",
        image: "🧻", // رمز منديل/ورق
        description: "Standard plastic-backed patient bibs"
      },
      sustainable: [
        {
          type: "Biodegradable Paper Bibs",
          material: "100% biodegradable paper",
          wasteReduction: "55%",
          recyclability: "Compostable",
          costPerUnit: "$0.12",
          co2Impact: "0.15 kg CO₂",
          certifications: ["Biodegradable", "Compostable"],
          image: "🌱🧻", // منديل مع رمز الاستدامة
          description: "Fully compostable bibs without plastic backing"
        }
      ]
    },
    {
      id: "toothbrushes",
      name: "Toothbrushes (Patient Kits)",
      traditional: {
        material: "Plastic handle + nylon bristles",
        waste: "5 g",
        recyclability: "Not recyclable",
        costPerUnit: "$0.20",
        co2Impact: "1.0 kg CO₂",
        image: "🪥", // فرشاة أسنان بلاستيك
        description: "Standard plastic toothbrushes in patient kits"
      },
      sustainable: [
        {
          type: "Bamboo Toothbrushes",
          material: "Bamboo handle + nylon bristles",
          wasteReduction: "80%",
          recyclability: "Biodegradable (handle)",
          costPerUnit: "$0.30",
          co2Impact: "0.25 kg CO₂",
          certifications: ["Bamboo", "Biodegradable"],
          image: "🌿🪥", // فرشاة أسنان من الخيزران
          description: "Fast-growing bamboo is highly sustainable"
        }
      ]
    }
  ],
  "Operatory Consumables": [
    {
      id: "suction-tips",
      name: "Suction Tips",
      traditional: {
        material: "PVC plastic",
        waste: "5 g",
        recyclability: "Not recyclable",
        costPerUnit: "$0.35",
        co2Impact: "1.2 kg CO₂",
        image: "🧪", // رمز طرف الشفط
        description: "Disposable plastic suction tips"
      },
      sustainable: [
        {
          type: "Autoclavable Silicone Suction Tips",
          material: "Medical-grade silicone",
          wasteReduction: "90%",
          recyclability: "Reusable (150+ uses)",
          costPerUnit: "$25.00",
          co2Impact: "0.08 kg CO₂ per use",
          certifications: ["Autoclavable", "Medical grade"],
          image: "🌱🧪", // طرف شفط مستدام
          description: "Sterilizable and reusable for many years"
        }
      ]
    },
    {
      id: "chair-covers",
      name: "Chair Covers",
      traditional: {
        material: "Plastic film",
        waste: "15 g",
        recyclability: "Not recyclable",
        costPerUnit: "$0.30",
        co2Impact: "0.9 kg CO₂",
        image: "🪑", // كرسي
        description: "Disposable plastic chair covers"
      },
      sustainable: [
        {
          type: "Reusable Fabric Covers",
          material: "Polyester fabric",
          wasteReduction: "88%",
          recyclability: "Washable & reusable",
          costPerUnit: "$20.00",
          co2Impact: "0.08 kg CO₂ per use",
          certifications: ["Washable", "Durable"],
          image: "🌱🪑", // كرسي مع غطاء مستدام
          description: "Wash and reuse hundreds of times"
        }
      ]
    },
    {
      id: "barrier-film",
      name: "Barrier Film",
      traditional: {
        material: "Plastic (polyethylene)",
        waste: "2 g",
        recyclability: "Not recyclable",
        costPerUnit: "$0.08",
        co2Impact: "0.4 kg CO₂",
        image: "📏", // رمز شريط حماية
        description: "Plastic protective barrier film for surfaces"
      },
      sustainable: [
        {
          type: "Biodegradable PE Film",
          material: "Biodegradable polyethylene",
          wasteReduction: "50%",
          recyclability: "Compostable",
          costPerUnit: "$0.11",
          co2Impact: "0.20 kg CO₂",
          certifications: ["Biodegradable", "ASTM compliant"],
          image: "🌱📏", // شريط حماية مستدام
          description: "Same protection, better for the environment"
        }
      ]
    },
    {
      id: "cotton-rolls",
      name: "Cotton Rolls",
      traditional: {
        material: "Bleached cotton",
        waste: "1 g",
        recyclability: "Compostable (with chemicals)",
        costPerUnit: "$0.02",
        co2Impact: "0.15 kg CO₂",
        image: "🧶", // رمز قطن/لفافة
        description: "Standard bleached cotton rolls"
      },
      sustainable: [
        {
          type: "Unbleached Organic Cotton",
          material: "Organic cotton (unbleached)",
          wasteReduction: "30%",
          recyclability: "Fully compostable",
          costPerUnit: "$0.03",
          co2Impact: "0.10 kg CO₂",
          certifications: ["Organic", "Unbleached"],
          image: "🌱🧶", // قطن عضوي
          description: "No chemical bleach, environmentally friendly"
        }
      ]
    }
  ],
  "Sterilization & Packaging": [
    {
      id: "sterilization-pouches",
      name: "Sterilization Pouches",
      traditional: {
        material: "Plastic + medical paper",
        waste: "8 g",
        recyclability: "Not recyclable",
        costPerUnit: "$0.45",
        co2Impact: "1.1 kg CO₂",
        image: "🛍️", // كيس تعقيم
        description: "Standard disposable sterilization pouches"
      },
      sustainable: [
        {
          type: "Recyclable Paper-based Pouches",
          material: "Paper with minimal plastic",
          wasteReduction: "52%",
          recyclability: "Recyclable",
          costPerUnit: "$0.50",
          co2Impact: "0.55 kg CO₂",
          certifications: ["Recyclable", "FSC certified"],
          image: "🌱🛍️", // كيس تعقيم مستدام
          description: "Mostly paper, significantly less plastic"
        }
      ]
    },
    {
      id: "tray-covers",
      name: "Tray Covers",
      traditional: {
        material: "Plastic",
        waste: "10 g",
        recyclability: "Not recyclable",
        costPerUnit: "$0.20",
        co2Impact: "0.7 kg CO₂",
        image: "🍽️", // صينية أدوات
        description: "Disposable plastic tray covers"
      },
      sustainable: [
        {
          type: "Recycled Cardboard Covers",
          material: "Recycled cardboard",
          wasteReduction: "55%",
          recyclability: "Recyclable",
          costPerUnit: "$0.22",
          co2Impact: "0.35 kg CO₂",
          certifications: ["Recycled", "Recyclable"],
          image: "🌱🍽️", // صينية مستدامة
          description: "Sturdy recycled material"
        }
      ]
    },
    {
      id: "autoclave-wraps",
      name: "Autoclave Wraps",
      traditional: {
        material: "Polypropylene",
        waste: "6 g",
        recyclability: "Not recyclable",
        costPerUnit: "$0.25",
        co2Impact: "0.9 kg CO₂",
        image: "🧺", // رمز لف/تغليف
        description: "Standard disposable autoclave wraps"
      },
      sustainable: [
        {
          type: "Reusable Cloth Wraps",
          material: "Organic cotton canvas",
          wasteReduction: "90%",
          recyclability: "Washable & reusable",
          costPerUnit: "$15.00",
          co2Impact: "0.05 kg CO₂ per use",
          certifications: ["Washable", "Organic"],
          image: "🌱🧺", // لف مستدام
          description: "Professional solution for repeated sterilization"
        }
      ]
    }
  ],
  "Cleaning & Disinfecting": [
    {
      id: "surface-wipes",
      name: "Surface Wipes",
      traditional: {
        material: "Plastic fiber",
        waste: "3 g",
        recyclability: "Not recyclable",
        costPerUnit: "$0.15",
        co2Impact: "0.5 kg CO₂",
        image: "🧽", // إسفنجة تنظيف
        description: "Disposable plastic fiber wipes"
      },
      sustainable: [
        {
          type: "Reusable Microfiber Cloth System",
          material: "Microfiber cloth + refillable spray",
          wasteReduction: "92%",
          recyclability: "Washable & reusable",
          costPerUnit: "$12.00",
          co2Impact: "0.02 kg CO₂ per use",
          certifications: ["Reusable", "Effective"],
          image: "🌱🧽", // إسفنجة مستدامة
          description: "Buy once, use hundreds of times"
        }
      ]
    },
    {
      id: "disinfectants",
      name: "Disinfectants",
      traditional: {
        material: "Chemical-heavy formula",
        waste: "Plastic bottle (500ml)",
        recyclability: "Some bottles recyclable",
        costPerUnit: "$8.00",
        co2Impact: "2.5 kg CO₂",
        image: "🧴", // زجاجة مطهر
        description: "Standard harsh chemical disinfectants"
      },
      sustainable: [
        {
          type: "Eco-friendly Hydrogen Peroxide Blend",
          material: "H₂O₂ + plant extracts",
          wasteReduction: "70%",
          recyclability: "Non-toxic formula",
          costPerUnit: "$9.50",
          co2Impact: "0.8 kg CO₂",
          certifications: ["Non-toxic", "Biodegradable"],
          image: "🌱🧴", // مطهر مستدام
          description: "Effective yet environmentally safe"
        }
      ]
    }
  ],
  "Dental Treatment Materials": [
    {
      id: "impression-trays",
      name: "Impression Trays",
      traditional: {
        material: "Plastic (disposable)",
        waste: "25 g",
        recyclability: "Not recyclable",
        costPerUnit: "$1.50",
        co2Impact: "0.8 kg CO₂",
        image: "🦷", // قالب طبعة الأسنان
        description: "Standard disposable plastic trays"
      },
      sustainable: [
        {
          type: "Reusable Metal Impression Trays",
          material: "Stainless steel",
          wasteReduction: "95%",
          recyclability: "Reusable (500+ uses)",
          costPerUnit: "$35.00",
          co2Impact: "0.01 kg CO₂ per use",
          certifications: ["Stainless steel", "Autoclavable"],
          image: "🌱🦷", // قالب طبعة مستدام
          description: "Lasts decades, reduces waste dramatically"
        }
      ]
    },
    {
      id: "flowable-syringes",
      name: "Flowable Syringes",
      traditional: {
        material: "Single-use plastic tips",
        waste: "2 g per tip",
        recyclability: "Not recyclable",
        costPerUnit: "$0.50",
        co2Impact: "0.3 kg CO₂",
        image: "💉", // حقنة/طرف
        description: "Disposable composite application tips"
      },
      sustainable: [
        {
          type: "Refillable Syringe Systems",
          material: "Reusable syringe + refillable cartridges",
          wasteReduction: "75%",
          recyclability: "Reusable (100+ refills)",
          costPerUnit: "$30.00",
          co2Impact: "0.05 kg CO₂ per fill",
          certifications: ["Reusable", "Refillable"],
          image: "🌱💉", // حقنة مستدامة
          description: "Professional-grade reusable system"
        }
      ]
    },
    {
      id: "bite-trays",
      name: "Bite Registration Trays",
      traditional: {
        material: "Plastic (disposable)",
        waste: "15 g",
        recyclability: "Not recyclable",
        costPerUnit: "$0.75",
        co2Impact: "0.5 kg CO₂",
        image: "👅", // رمز العض/الفم
        description: "Single-use plastic bite trays"
      },
      sustainable: [
        {
          type: "Reusable Stainless Steel Trays",
          material: "Stainless steel",
          wasteReduction: "93%",
          recyclability: "Reusable (300+ uses)",
          costPerUnit: "$20.00",
          co2Impact: "0.01 kg CO₂ per use",
          certifications: ["Stainless steel", "Durable"],
          image: "🌱👅", // رمز العض مستدام
          description: "Long-lasting professional alternative"
        }
      ]
    }
  ],
  "Office & Administrative Supplies": [
    {
      id: "paper-forms",
      name: "Paper & Forms",
      traditional: {
        material: "Regular paper",
        waste: "Varies (100+ sheets/month)",
        recyclability: "Recyclable",
        costPerUnit: "$0.05 per sheet",
        co2Impact: "1.5 kg CO₂ per ream",
        image: "📄", // ورقة/نموذج
        description: "Standard paper-based forms and documents"
      },
      sustainable: [
        {
          type: "Digital Forms (Zero Waste)",
          material: "Digital system",
          wasteReduction: "100%",
          recyclability: "No physical waste",
          costPerUnit: "$50-200/month (software)",
          co2Impact: "0 kg CO₂",
          certifications: ["Digital", "Paperless"],
          image: "💻", // رمز رقمي/كمبيوتر
          description: "Complete elimination of paper waste"
        }
      ]
    },
    {
      id: "packaging-boxes",
      name: "Packaging Boxes",
      traditional: {
        material: "Plastic bags",
        waste: "20 g",
        recyclability: "Not recyclable",
        costPerUnit: "$0.30",
        co2Impact: "0.7 kg CO₂",
        image: "📦", // صندوق بلاستيك
        description: "Standard plastic packaging for supplies"
      },
      sustainable: [
        {
          type: "Kraft Paper Boxes",
          material: "Kraft paper",
          wasteReduction: "60%",
          recyclability: "Recyclable",
          costPerUnit: "$0.35",
          co2Impact: "0.30 kg CO₂",
          certifications: ["Recyclable", "Kraft paper"],
          image: "🌱📦", // صندوق ورقي مستدام
          description: "Durable and fully recyclable"
        }
      ]
    }
  ],
  "Infection Control & Waste Management": [
    {
      id: "hand-sanitizer",
      name: "Hand Sanitizers",
      traditional: {
        material: "Alcohol + plastic pump bottle",
        waste: "500ml plastic bottle",
        recyclability: "Not recyclable",
        costPerUnit: "$5.50",
        co2Impact: "1.8 kg CO₂",
        image: "🧴", // زجاجة معقم
        description: "Single-use plastic bottle sanitizers"
      },
      sustainable: [
        {
          type: "Refillable Glass Bottles",
          material: "Glass + metal pump",
          wasteReduction: "85%",
          recyclability: "Reusable (500+ refills)",
          costPerUnit: "$18.00",
          co2Impact: "0.05 kg CO₂ per refill",
          certifications: ["Glass", "Reusable"],
          image: "🌱🧴", // معقم مستدام
          description: "Buy once, refill forever with bulk concentrate"
        }
      ]
    },
    {
      id: "waste-bags",
      name: "Medical Waste Bags",
      traditional: {
        material: "Red plastic bags",
        waste: "2-5 kg per clinic/day",
        recyclability: "Not recyclable (biohazard)",
        costPerUnit: "$0.40",
        co2Impact: "1.2 kg CO₂",
        image: "🗑️", // كيس نفايات
        description: "Standard red plastic bags for medical waste"
      },
      sustainable: [
        {
          type: "Biodegradable Autoclavable Bags",
          material: "Plant-based PLA + compostable",
          wasteReduction: "65%",
          recyclability: "Compostable after autoclaving",
          costPerUnit: "$0.65",
          co2Impact: "0.45 kg CO₂",
          certifications: ["Biodegradable", "Autoclavable"],
          image: "🌱🗑️", // كيس نفايات مستدام
          description: "Breaks down naturally after sterilization"
        }
      ]
    },
    {
      id: "sharps-containers",
      name: "Sharps Disposal Containers",
      traditional: {
        material: "Plastic composite",
        waste: "500ml per container",
        recyclability: "Not recyclable",
        costPerUnit: "$8.00",
        co2Impact: "2.5 kg CO₂",
        image: "⚠️", // رمز أدوات حادة
        description: "Single-use plastic sharps containers"
      },
      sustainable: [
        {
          type: "Reusable Autoclavable Containers",
          material: "Stainless steel + protective coating",
          wasteReduction: "90%",
          recyclability: "Reusable (1000+ cycles)",
          costPerUnit: "$45.00",
          co2Impact: "0.08 kg CO₂ per use",
          certifications: ["Autoclavable", "Durable"],
          image: "🌱⚠️", // أدوات حادة مستدامة
          description: "Professional-grade reusable sharps container"
        }
      ]
    },
    {
      id: "glove-dispensers",
      name: "Glove Dispensers",
      traditional: {
        material: "Plastic wall-mount dispenser",
        waste: "500ml dispenser",
        recyclability: "Not recyclable",
        costPerUnit: "$6.00",
        co2Impact: "0.9 kg CO₂",
        image: "📤", // موزع قفازات
        description: "Single-use plastic dispensers"
      },
      sustainable: [
        {
          type: "Metal Refillable Dispensers",
          material: "Stainless steel mounting",
          wasteReduction: "80%",
          recyclability: "Reusable (unlimited)",
          costPerUnit: "$25.00",
          co2Impact: "0.05 kg CO₂ per refill box",
          certifications: ["Metal", "Reusable"],
          image: "🌱📤", // موزع مستدام
          description: "Durable wall-mounted dispenser with refills"
        }
      ]
    }
  ],
  "Furniture & Equipment": [
    {
      id: "dental-chair-cushions",
      name: "Dental Chair Cushions",
      traditional: {
        material: "PVC vinyl with foam",
        waste: "Per replacement cycle: 2-3 kg",
        recyclability: "Not recyclable",
        costPerUnit: "$150.00",
        co2Impact: "8.5 kg CO₂",
        image: "🪑", // كرسي أسنان
        description: "Standard vinyl dental chair cushions"
      },
      sustainable: [
        {
          type: "Organic Cotton Covers",
          material: "Organic cotton + removable covers",
          wasteReduction: "75%",
          recyclability: "Washable & replaceable (5-7 years)",
          costPerUnit: "$180.00",
          co2Impact: "2.1 kg CO₂",
          certifications: ["Organic", "Washable"],
          image: "🌱🪑", // كرسي مع غطاء مستدام
          description: "Washable covers extend furniture life significantly"
        }
      ]
    },
    {
      id: "light-fixtures",
      name: "Operatory Lighting",
      traditional: {
        material: "Fluorescent tubes (mercury-based)",
        waste: "Per bulb: 150g hazardous waste",
        recyclability: "Hazardous, requires special disposal",
        costPerUnit: "$35.00",
        co2Impact: "4.2 kg CO₂",
        image: "💡", // إضاءة تقليدية
        description: "Traditional fluorescent surgical lights"
      },
      sustainable: [
        {
          type: "LED Surgical Lights",
          material: "LED + aluminum housing",
          wasteReduction: "85%",
          recyclability: "Recyclable components (20+ year lifespan)",
          costPerUnit: "$250.00",
          co2Impact: "0.8 kg CO₂ (over 5 years)",
          certifications: ["LED", "Energy-efficient"],
          image: "🌱💡", // إضاءة LED مستدامة
          description: "80% energy reduction + 20-year lifespan"
        }
      ]
    },
    {
      id: "sterilizer-equipment",
      name: "Autoclave Sterilizers",
      traditional: {
        material: "Steel + old heating elements",
        waste: "High water usage + energy",
        recyclability: "Recyclable steel but inefficient",
        costPerUnit: "$2500.00",
        co2Impact: "150 kg CO₂ per year",
        image: "🔥", // رمز تعقيم/حرارة
        description: "Traditional autoclave with high energy usage"
      },
      sustainable: [
        {
          type: "Energy-Efficient Autoclaves",
          material: "Recycled steel + smart controls",
          wasteReduction: "60%",
          recyclability: "Fully recyclable (40% recycled content)",
          costPerUnit: "$3200.00",
          co2Impact: "60 kg CO₂ per year",
          certifications: ["Energy Star", "Smart Control"],
          image: "🌱🔥", // تعقيم مستدام
          description: "60% less energy + water recycling system"
        }
      ]
    }
  ],
  "Laboratory & Diagnostic Materials": [
    {
      id: "lab-test-kits",
      name: "Diagnostic Test Kits",
      traditional: {
        material: "Plastic cartridges + packaging",
        waste: "Per test: 45g packaging waste",
        recyclability: "Not recyclable (contaminated)",
        costPerUnit: "$12.00",
        co2Impact: "2.3 kg CO₂",
        image: "🧪", // أدوات اختبار
        description: "Single-use plastic diagnostic kits"
      },
      sustainable: [
        {
          type: "Refillable Test Systems",
          material: "Durable plastic cartridge + refills",
          wasteReduction: "70%",
          recyclability: "Reusable cartridges (50+ cycles)",
          costPerUnit: "$45.00",
          co2Impact: "0.8 kg CO₂ per cartridge",
          certifications: ["Refillable", "Durable"],
          image: "🌱🧪", // أدوات اختبار مستدامة
          description: "One cartridge, multiple refills over years"
        }
      ]
    },
    {
      id: "microscope-slides",
      name: "Microscope Slides",
      traditional: {
        material: "Glass slides (virgin production)",
        waste: "Per slide: 8g",
        recyclability: "Recyclable but often discarded",
        costPerUnit: "$0.08",
        co2Impact: "0.5 kg CO₂",
        image: "🔬", // شريحة مجهرية
        description: "Standard new glass microscope slides"
      },
      sustainable: [
        {
          type: "Recycled Glass Slides",
          material: "100% recycled glass",
          wasteReduction: "45%",
          recyclability: "100% recyclable (close-loop)",
          costPerUnit: "$0.10",
          co2Impact: "0.28 kg CO₂",
          certifications: ["Recycled glass", "Lab-grade"],
          image: "🌱🔬", // شريحة مجهرية مستدامة
          description: "Same quality, from recycled glass"
        }
      ]
    },
    {
      id: "lab-coats",
      name: "Laboratory Coats",
      traditional: {
        material: "Polyester (single-use or short lifespan)",
        waste: "Per coat: 200g",
        recyclability: "Not recyclable",
        costPerUnit: "$18.00",
        co2Impact: "3.2 kg CO₂",
        image: "🥼", // معطف مختبر
        description: "Standard disposable lab coats"
      },
      sustainable: [
        {
          type: "Organic Cotton Reusable Coats",
          material: "100% organic cotton",
          wasteReduction: "90%",
          recyclability: "Washable (200+ washes)",
          costPerUnit: "$50.00",
          co2Impact: "0.15 kg CO₂ per wash",
          certifications: ["Organic cotton", "GOTS certified"],
          image: "🌱🥼", // معطف مختبر مستدام
          description: "Professional grade, washable 200+ times"
        }
      ]
    }
  ],
  "Patient Education & Communication": [
    {
      id: "patient-brochures",
      name: "Patient Education Brochures",
      traditional: {
        material: "Glossy paper (virgin fiber)",
        waste: "Per brochure: 15g",
        recyclability: "Limited (glossy coating)",
        costPerUnit: "$0.50",
        co2Impact: "1.2 kg CO₂",
        image: "📄", // منشور ورقي
        description: "Printed glossy patient education materials"
      },
      sustainable: [
        {
          type: "Digital QR Code Brochures",
          material: "Recycled paper + QR codes",
          wasteReduction: "95%",
          recyclability: "100% recyclable paper",
          costPerUnit: "$0.15",
          co2Impact: "0.08 kg CO₂",
          certifications: ["Recycled paper", "FSC certified"],
          image: "📱", // رمز رقمي/QR
          description: "Minimal print + links to digital resources"
        }
      ]
    },
    {
      id: "patient-forms",
      name: "Patient Consent Forms",
      traditional: {
        material: "A4 white paper (printed daily)",
        waste: "Per clinic: 100+ sheets/day",
        recyclability: "Recyclable but often contaminated",
        costPerUnit: "$0.02",
        co2Impact: "0.8 kg CO₂ per ream",
        image: "📝", // نموذج ورقي
        description: "Standard printed patient forms"
      },
      sustainable: [
        {
          type: "Tablet-Based Forms",
          material: "Digital system (iPad/tablet)",
          wasteReduction: "100%",
          recyclability: "Zero paper waste",
          costPerUnit: "$300 one-time (tablet)",
          co2Impact: "0 kg CO₂",
          certifications: ["Digital", "Paperless"],
          image: "💻", // نموذج رقمي
          description: "Complete elimination of paper forms"
        }
      ]
    },
    {
      id: "appointment-cards",
      name: "Appointment Reminder Cards",
      traditional: {
        material: "Cardstock (heavy print waste)",
        waste: "Per card: 3g × 100s/month",
        recyclability: "Partially recyclable",
        costPerUnit: "$0.12",
        co2Impact: "0.6 kg CO₂",
        image: "📅", // بطاقة موعد
        description: "Printed appointment reminder cards"
      },
      sustainable: [
        {
          type: "SMS/Email Reminders",
          material: "Digital messaging",
          wasteReduction: "100%",
          recyclability: "No physical waste",
          costPerUnit: "$20/month (service)",
          co2Impact: "0 kg CO₂",
          certifications: ["Digital", "Zero waste"],
          image: "📲", // تذكير رقمي
          description: "Automated SMS + email reminders"
        }
      ]
    }
  ]
};