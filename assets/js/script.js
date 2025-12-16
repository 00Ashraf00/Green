const cards = document.querySelectorAll('.card');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.createElement("div");

progressBar.className = "progress-bar";
document.getElementById("progress").appendChild(progressBar);

let current = 0;

function updateProgress() {
  const percent = ((current + 1) / cards.length) * 100;
  progressBar.style.width = percent + "%";
}

updateProgress();

nextBtn.addEventListener('click', () => {
  const inputs = cards[current].querySelectorAll('input, select, textarea');

  for (let input of inputs) {
    if (!input.checkValidity()) {
      input.reportValidity();
      return;
    }
  }

  cards[current].classList.remove('active');
  current++;

  if (current < cards.length) {
    cards[current].classList.add('active');
    updateProgress();
  } else {
    nextBtn.textContent = 'Completed!';
    nextBtn.disabled = true;
  }
});
