window.onload = function () {
  setTimeout(() => {
    document.querySelector(".intro").style.display = "none";

    document.querySelectorAll(".hidden").forEach(el => {
      el.classList.remove("hidden");
      el.classList.add("fade-in");
    });

    particlesJS("particles-js", {
      particles: {
        number: { value: 80 },
        size: { value: 3 },
        color: { value: "#ffcc00" },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: { enable: true, speed: 2 }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          repulse: { distance: 100 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }, 3000);
};
