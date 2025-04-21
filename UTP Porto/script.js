// Animasi sederhana saat scroll
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.project-card, .about, .contact');
  
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 150;
  
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      }
    }
  });

const cursor = document.querySelector(".custom-cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});
const toggle = document.getElementById("modeToggle");
const savedMode = localStorage.getItem("theme");

// Set awal berdasarkan localStorage
if (savedMode === "light") {
  document.body.classList.add("light-mode");
  toggle.textContent = "🌞";
} else {
  document.body.classList.remove("light-mode");
  toggle.textContent = "🌙";
}

// Toggle saat klik
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  toggle.textContent = isLight ? "🌞" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});


// Parallax background movement
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    document.querySelector(".hero").style.backgroundPositionY = `${scrollY * 0.5}px`;
  });

  const text = "Gue ghalib, Mahasiswa IlmuKomputer";
let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById("typing").textContent += text.charAt(index);
    index++;
    setTimeout(type, 60);
  }
}
window.addEventListener("load", type);
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
  
    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (top < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", revealOnScroll);
  
  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.1)`;
    });
  
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0) scale(1)';
    });
  });
  