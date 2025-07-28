// js/javaencabezado.js
document.addEventListener('DOMContentLoaded', () => {
  fetch('header.html')               // Ajusta la ruta si header.html no está en la raíz
    .then(response => {
        if (!response.ok) throw new Error('Network response was not OK');
        return response.text();
    })
    .then(html => {
        document.getElementById('header-container').innerHTML = html;
    })
    .catch(err => {
        console.error('Error cargando el header:', err);
    });
});
