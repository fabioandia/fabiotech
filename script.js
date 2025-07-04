document.querySelectorAll('.ver-detalle').forEach(boton => {
  boton.addEventListener('click', () => {
    const producto = boton.getAttribute('data-producto');
    const detalle = document.getElementById('detalle-producto');
    const nombre = document.getElementById('detalle-nombre');
    const img = document.getElementById('detalle-img');
    const lista = document.getElementById('detalle-caracteristicas');
    const precio = document.getElementById('detalle-precio');

    if (producto === "iphone14") {
      nombre.textContent = "iPhone 14";
      img.src = "https://i.imgur.com/VW7btxL.png";
      lista.innerHTML = `
        <li>Pantalla Super Retina XDR</li>
        <li>Cámara Dual 12MP</li>
        <li>Chip A15 Bionic</li>`;
      precio.textContent = "S/ 3599";
    }

    if (producto === "airpods") {
      nombre.textContent = "AirPods Pro";
      img.src = "https://i.imgur.com/nKSpUXx.png";
      lista.innerHTML = `
        <li>Cancelación activa de ruido</li>
        <li>Audio espacial</li>
        <li>Resistentes al agua</li>`;
      precio.textContent = "S/ 899";
    }

    detalle.style.display = "block";
  });
});

function cerrarDetalle() {
  document.getElementById('detalle-producto').style.display = "none";
}

// Animaciones con ScrollReveal
ScrollReveal().reveal('.producto', { delay: 200, distance: '50px', origin: 'bottom', duration: 800 });
ScrollReveal().reveal('.hero-text', { delay: 300, distance: '50px', origin: 'top', duration: 800 });
