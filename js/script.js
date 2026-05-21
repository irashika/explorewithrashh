// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle) toggle.addEventListener('click', () => links.classList.toggle('open'));

// Newsletter
const nl = document.querySelector('.newsletter');
if (nl) nl.addEventListener('submit', e => {
  e.preventDefault();
  const i = nl.querySelector('input');
  if (i.value) { alert('Thanks! Stories coming to ' + i.value); i.value = ''; }
});

// Reveal on scroll
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'translateY(0)'; }
}), { threshold: 0.1 });
document.querySelectorAll('.cat,.dest,.cs,.polaroid,.insta-tile').forEach(el => {
  el.style.opacity = 0; el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  io.observe(el);
});
