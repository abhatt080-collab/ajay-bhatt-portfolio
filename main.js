// ── NAVBAR SCROLL ──
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ── HAMBURGER ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => entry.target.classList.add('visible'), parseInt(delay));
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
revealEls.forEach(el => revealObs.observe(el));

// ── STATS COUNTER ──
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();
  const isLarge = target >= 1000;

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(eased * target);

    if (isLarge && target >= 500000) {
      el.textContent = (value / 1000).toFixed(0) + suffix;
    } else {
      el.textContent = value.toLocaleString() + suffix;
    }
    if (progress < 1) requestAnimationFrame(update);
    else {
      if (isLarge && target >= 500000) el.textContent = '500' + suffix;
      else el.textContent = target.toLocaleString() + suffix;
    }
  }
  requestAnimationFrame(update);
}

const statNums = document.querySelectorAll('.stat-num');
const statObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      statObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
statNums.forEach(el => statObs.observe(el));

// ── PARTICLES ──
const particleContainer = document.getElementById('particles');
if (particleContainer) {
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 8 + 's';
    p.style.animationDuration = (6 + Math.random() * 6) + 's';
    p.style.width = p.style.height = (2 + Math.random() * 3) + 'px';
    particleContainer.appendChild(p);
  }
}

// ── DUPLICATE TESTIMONIALS for infinite scroll ──
const testiTrack = document.getElementById('testiTrack');
if (testiTrack) {
  const cards = testiTrack.innerHTML;
  testiTrack.innerHTML = cards + cards;
}

// ── MODALS ──
document.querySelectorAll('[data-modal]').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const id = trigger.dataset.modal;
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('open');
  });
});
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal-overlay').classList.remove('open');
  });
});
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
});

// ── PAGE TRANSITIONS ──
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  if (href && !href.startsWith('#') && !href.startsWith('mailto') && !href.startsWith('http')) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.3s ease';
      setTimeout(() => { window.location = href; }, 300);
    });
  }
});
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
  document.body.style.transition = 'opacity 0.4s ease';
});
document.body.style.opacity = '0';

// ── BACK-FORWARD CACHE (bfcache) FIX ──
window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    document.body.style.opacity = '1';
    document.querySelectorAll('.reveal').forEach(function(el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.classList.add('active');
    });
  }
});

