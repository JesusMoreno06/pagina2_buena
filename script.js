document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("infoModal");
  const button = document.getElementById("infoBtn");
  const closeBtn = document.querySelector(".close");

  // Abrir modal
  button.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Cerrar modal al hacer clic en la X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar modal al hacer clic fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
