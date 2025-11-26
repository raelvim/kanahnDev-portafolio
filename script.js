document.querySelectorAll(".btn-servicio").forEach((btn) => {
  btn.addEventListener("click", function () {
    const servicio = this.getAttribute("data-servicio");
    // Esto pre-llenará el asunto cuando lleguen al formulario de contacto
    localStorage.setItem("servicio-solicitado", servicio);
  });
});

// Cerrar banner después de 10 segundos
setTimeout(() => {
  const banner = document.querySelector(".promo-banner");
  if (banner) {
    banner.style.display = "none";
    document.body.style.paddingTop = "80px"; // Restaurar padding
  }
}, 10000);
