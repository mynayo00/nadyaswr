// Scroll reveal
const revealObs = new IntersectionObserver(entries => {
  entries.forEach((e,i) => {
    if(e.isIntersecting){
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, {threshold:0.08});
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// Skill bars animate
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.w + '%';
      });
    }
  });
}, {threshold:0.3});
const barsSection = document.getElementById('skill-bars');
if(barsSection) barObs.observe(barsSection);

// Portfolio filter
function filterPort(cat, btn){
  document.querySelectorAll('.port-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.port-card').forEach(card => {
    if(cat === 'all' || card.dataset.cat === cat){
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// Back to top
window.addEventListener('scroll', () => {
  document.getElementById('back-top').classList.toggle('show', window.scrollY > 400);
});

// Nav shrink on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').style.padding = window.scrollY > 60 ? '0.75rem 5%' : '1.1rem 5%';
});

// Hamburger toggle
const nav = document.querySelector("nav");
const toggle = document.querySelector(".nav-toggle");
if(toggle){
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}
