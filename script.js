// ---------- scroll reveals ----------
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

// ---------- case study accordions ----------
document.querySelectorAll('.card-head').forEach((head) => {
  head.addEventListener('click', () => {
    const card = head.closest('.card');
    const isOpen = card.classList.toggle('open');
    head.setAttribute('aria-expanded', String(isOpen));
  });
});

// ---------- project filters ----------
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');
filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((f) => f.classList.remove('active'));
    filter.classList.add('active');
    const value = filter.dataset.filter;
    cards.forEach((card) => {
      const show = value === 'all' || card.dataset.category === value;
      card.hidden = !show;
      if (!show) {
        card.classList.remove('open');
        card.querySelector('.card-head').setAttribute('aria-expanded', 'false');
      }
    });
  });
});

// ---------- glitch text setup ----------
const accent = document.querySelector('.hero h1 .accent');
if (accent) accent.setAttribute('data-text', accent.textContent.trim());

// ---------- typing effect ----------
const typingTarget = document.getElementById('typingText');
if (typingTarget) {
  const phrase = 'deploying ideas into reality...';
  let i = 0;
  const type = () => {
    typingTarget.textContent = phrase.slice(0, i);
    i = i < phrase.length ? i + 1 : 0;
    setTimeout(type, i === 0 ? 2200 : 75);
  };
  type();
}

// ---------- animated stat counters ----------
const stats = document.querySelectorAll('.stat strong');
const countUp = (el) => {
  const raw = el.textContent.trim();
  const match = raw.match(/(\d+)/);
  if (!match) return;
  const target = parseInt(match[1], 10);
  const prefix = raw.slice(0, match.index);
  const suffix = raw.slice(match.index + match[1].length);
  const pad = match[1].length;
  const start = performance.now();
  const duration = 1300;
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased).toString().padStart(pad, '0');
    el.textContent = prefix + value + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
if ('IntersectionObserver' in window) {
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  stats.forEach((el) => statObserver.observe(el));
}

// ---------- cursor glow ----------
const glow = document.querySelector('.cursor-glow');
if (glow && window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

// ---------- magnetic buttons ----------
document.querySelectorAll('.btn, .nav-cta').forEach((el) => {
  el.addEventListener('mousemove', (e) => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.12;
    const y = (e.clientY - r.top - r.height / 2) * 0.18;
    el.style.transform = `translate(${x}px, ${y}px)`;
  });
  el.addEventListener('mouseleave', () => { el.style.transform = ''; });
});

// ---------- active nav highlight ----------
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.style.color = link.getAttribute('href') === `#${entry.target.id}` ? 'var(--cyan)' : '';
      });
    });
  }, { threshold: 0.3 });
  sections.forEach((section) => navObserver.observe(section));
}
