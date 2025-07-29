// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.service-box');
  boxes.forEach(box => box.classList.add('animate'));
});


// js/main.js (o crea un archivo separado, p.ej. services-reveal.js)
document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.service-box');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // opcional: deja de observar tras la primera animación
      }
    });
  }, {
    threshold: 0.2 // dispara cuando el 20% de la caja esté visible
  });

  boxes.forEach(box => observer.observe(box));
});
