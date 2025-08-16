// Animación inicial con GSAP
window.addEventListener("DOMContentLoaded", () => {
  gsap.from(".sidebar", {
    duration: 1,
    x: -80,
    opacity: 0,
    ease: "power3.out"
  });

  gsap.from(".hero-img", {
    duration: 1.2,
    scale: 0.7,
    opacity: 0,
    rotate: 20,
    delay: 0.3,
    ease: "back.out(1.7)"
  });

  gsap.from(".hero h1", {
    duration: 1,
    y: 40,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out"
  });

  gsap.from(".hero p", {
    duration: 1,
    y: 20,
    opacity: 0,
    delay: 0.8,
    ease: "power3.out"
  });

  gsap.from(".cta", {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    delay: 1.1,
    ease: "back.out(1.7)"
  });
});

// ScrollReveal
ScrollReveal().reveal("section h2, .card, .skills li", {
  duration: 1000,
  origin: "bottom",
  distance: "40px",
  reset: true,
  interval: 100
});
