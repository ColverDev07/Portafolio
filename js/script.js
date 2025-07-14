// Animación de carga inicial con GSAP
window.addEventListener("DOMContentLoaded", () => {
    gsap.from(".navbar", {
      duration: 1,
      y: -60,
      opacity: 0,
      ease: "power3.out"
    });
  
    gsap.from(".hero-content h2", {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 0.3,
      ease: "power3.out"
    });
  
    gsap.from(".hero-content .subtitle", {
      duration: 1,
      y: 30,
      opacity: 0,
      delay: 0.6,
      ease: "power3.out"
    });
  
    gsap.from(".cta", {
      duration: 1,
      scale: 0.8,
      opacity: 0,
      delay: 0.9,
      ease: "back.out(1.7)"
    });
  
    gsap.from(".hero-img", {
      duration: 1.2,
      scale: 0.7,
      opacity: 0,
      rotate: 20,
      delay: 0.1,
      ease: "back.out(1.7)"
    });
  });
  
  // ScrollReveal para secciones
  ScrollReveal().reveal(".skills-section h2, .skills-grid", {
    duration: 1000,
    origin: "bottom",
    distance: "50px",
    reset: true
  });
  
  ScrollReveal().reveal(".projects-section h2, .project-gallery", {
    duration: 1000,
    origin: "bottom",
    distance: "60px",
    delay: 200,
    reset: true
  });
  
  ScrollReveal().reveal(".contact-section h2, .contact-info", {
    duration: 1000,
    origin: "bottom",
    distance: "40px",
    delay: 300,
    reset: true
  });
  
  // Hover animado en botones CTA con GSAP
  const ctaBtn = document.querySelector(".cta");
  if (ctaBtn) {
    ctaBtn.addEventListener("mouseenter", () => {
      gsap.to(ctaBtn, { scale: 1.05, duration: 0.3 });
    });
  
    ctaBtn.addEventListener("mouseleave", () => {
      gsap.to(ctaBtn, { scale: 1, duration: 0.3 });
    });
  }
  
  // Animación en los project cards
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: index * 0.1
    });
  });
  
  // Animación para las tarjetas de habilidades
  const skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 40,
      duration: 0.7,
      delay: index * 0.08
    });
  });

  // Animación para la sección de contacto
  ScrollReveal().reveal(".contact-info p, .contact-info a", {
    duration: 900,
    origin: "bottom",
    distance: "30px",
    interval: 80,
    reset: true
  });
  
// MODAL para descripción de proyectos
const projectData = [
  {
    title: "MotivApp",
    desc: "App de frases motivacionales con animaciones, sonidos y recordatorios diarios para inspirarte."
  },
  {
    title: "MotivationWall",
    desc: "Muro visual interactivo donde puedes ver, crear y compartir frases animadas."
  },
  {
    title: "Red Social de Citas",
    desc: "Aplicación de citas con perfiles personalizados, chat seguro y sistema de emparejamiento."
  },
  {
    title: "Notas Personales",
    desc: "App para organizar ideas, tareas y notas con almacenamiento local y recordatorios."
  }
];

// Crear modal dinámico
function showProjectModal(index) {
  let modal = document.createElement('div');
  modal.className = 'project-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <h3>${projectData[index].title}</h3>
      <p>${projectData[index].desc}</p>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  modal.querySelector('.close-modal').onclick = () => {
    modal.remove();
    document.body.style.overflow = '';
  };
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.remove();
      document.body.style.overflow = '';
    }
  };
}

// Asignar evento a cada tarjeta de proyecto
const projectCardsList = document.querySelectorAll('.project-card');
projectCardsList.forEach((card, idx) => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => showProjectModal(idx));
});
  