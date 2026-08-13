const header = document.querySelector('.site-header');
const progress = document.getElementById('progress');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
}, { passive: true });

menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();


/* Custom circular cursor */
const customCursor = document.getElementById('customCursor');
if (customCursor && window.matchMedia('(pointer:fine)').matches) {
  document.body.classList.add('cursor-ready');
  let cursorX = window.innerWidth / 2;
  let cursorY = window.innerHeight / 2;
  let targetX = cursorX;
  let targetY = cursorY;

  window.addEventListener('mousemove', (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    customCursor.style.opacity = '1';
  }, { passive: true });

  function animateCursor() {
    cursorX += (targetX - cursorX) * 0.18;
    cursorY += (targetY - cursorY) * 0.18;
    customCursor.style.left = `${cursorX}px`;
    customCursor.style.top = `${cursorY}px`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll('a, button, input, textarea').forEach((element) => {
    element.addEventListener('mouseenter', () => {
      customCursor.style.width = '54px';
      customCursor.style.height = '54px';
      customCursor.style.borderColor = 'rgba(139,92,246,.75)';
    });
    element.addEventListener('mouseleave', () => {
      customCursor.style.width = '44px';
      customCursor.style.height = '44px';
      customCursor.style.borderColor = 'rgba(67,135,245,.75)';
    });
  });
}

/* Contact form opens a pre-filled email message */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:mohankr211@gmail.com?subject=${subject}&body=${body}`;
    const note = document.getElementById('formNote');
    if (note) note.textContent = 'Opening your email app…';
  });
}
