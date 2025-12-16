// Show Modal
function openFormModal() {
  const modal = document.getElementById("formModalOverlay");
  const iframe = document.getElementById("formIframe");

  iframe.src = "/Green Dentistry/index2.html"; // your form file
  modal.style.display = "flex";

  // Prevent scrolling on background
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    modal.classList.add("active");
  }, 10);
}

// Close Modal
function closeFormModal() {
  const modal = document.getElementById("formModalOverlay");

  modal.classList.remove("active");

  setTimeout(() => {
    modal.style.display = "none";
    document.getElementById("formIframe").src = "";

    // Re-enable scrolling on background
    document.body.style.overflow = "auto";
  }, 300);
}

// Attach to all buttons with class:
document.querySelectorAll(".start-form-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    openFormModal();
  });
});

/* New: listen for close message from iframe */
window.addEventListener('message', function (ev) {
  try {
    if (ev && ev.data && ev.data.type === 'closeFormModal') {
      closeFormModal();
    }
  } catch (err) {
    // ignore malformed messages
    console.log('message listener error', err);
  }
});
