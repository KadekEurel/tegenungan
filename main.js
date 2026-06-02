// =============================================
//  TEGENUNGAN WATERFALL — main.js
// =============================================

/* ---- AOS Init ---- */
AOS.init({
  duration: 900,
  once: true,
  offset: 80,
  easing: 'ease-out-cubic',
});

/* ---- Navbar Scroll Effect ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ---- Hamburger / Mobile Menu ---- */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on nav link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
  });
});

/* ---- Smooth Anchor Scrolling ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navbarHeight = navbar.offsetHeight;
      const targetPos = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  });
});

/* ---- Hero Particles ---- */
function createParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;

  const count = 30;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';

    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const dur = (4 + Math.random() * 6).toFixed(1) + 's';
    const delay = (Math.random() * 6).toFixed(1) + 's';
    const size = (1.5 + Math.random() * 3).toFixed(1) + 'px';

    p.style.cssText = `
      left: ${x}%;
      top: ${y}%;
      width: ${size};
      height: ${size};
      --dur: ${dur};
      --delay: -${delay};
    `;

    container.appendChild(p);
  }
}

createParticles();

/* ---- Swiper: View ---- */
const viewSwiper = new Swiper('.view-swiper', {
  slidesPerView: 'auto',
  centeredSlides: false,
  spaceBetween: 24,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.view-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.view-prev',
    nextEl: '.view-next',
  },
  breakpoints: {
    320:  { slidesPerView: 1.15, centeredSlides: true },
    600:  { slidesPerView: 1.6,  centeredSlides: false },
    900:  { slidesPerView: 2.2,  centeredSlides: false },
    1200: { slidesPerView: 3,    centeredSlides: false },
  },
});

/* ---- Swiper: Facility ---- */
const facilitySwiper = new Swiper('.facility-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3800,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.facility-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.facility-prev',
    nextEl: '.facility-next',
  },
  breakpoints: {
    320:  { slidesPerView: 1.3,  centeredSlides: true },
    600:  { slidesPerView: 2.2,  centeredSlides: false },
    900:  { slidesPerView: 3,    centeredSlides: false },
    1200: { slidesPerView: 4,    centeredSlides: false },
  },
});

/* ---- Swiper: Reviews ---- */
const reviewSwiper = new Swiper('.review-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.review-pagination',
    clickable: true,
  },
  breakpoints: {
    320:  { slidesPerView: 1.1,  centeredSlides: true },
    600:  { slidesPerView: 1.6,  centeredSlides: false },
    900:  { slidesPerView: 2.2,  centeredSlides: false },
    1200: { slidesPerView: 3,    centeredSlides: false },
  },
});

/* ---- Toast Notification ---- */
function showToast(message, duration = 3500) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

/* ---- Booking Form Handler ---- */
function handleBooking() {
  const name  = document.querySelector('.booking-form input[type="text"]');
  const email = document.querySelector('.booking-form input[type="email"]');
  const date  = document.querySelector('.booking-form input[type="date"]');

  if (!name?.value.trim()) {
    showToast('⚠️ Mohon masukkan nama Anda.');
    name?.focus();
    return;
  }

  if (!email?.value.trim() || !email.value.includes('@')) {
    showToast('⚠️ Mohon masukkan email yang valid.');
    email?.focus();
    return;
  }

  if (!date?.value) {
    showToast('⚠️ Mohon pilih tanggal kunjungan.');
    date?.focus();
    return;
  }

  // Simulate booking
  const btn = document.querySelector('.booking-form .button-main');
  if (btn) {
    const original = btn.textContent;
    btn.textContent = 'Memproses...';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = '✓ Tiket Dipesan!';
      btn.style.background = '#40916c';
      showToast('🎉 Pemesanan berhasil! Cek email Anda untuk konfirmasi tiket.');

      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        btn.style.background = '';
        // Reset form
        if (name)  name.value  = '';
        if (email) email.value = '';
        if (date)  date.value  = '';
      }, 3000);
    }, 1400);
  }
}

/* ---- Contact Form Handler ---- */
function handleContact() {
  const name    = document.getElementById('contactName');
  const email   = document.getElementById('contactEmail');
  const subject = document.getElementById('contactSubject');
  const message = document.getElementById('contactMessage');

  if (!name?.value.trim()) {
    showToast('⚠️ Mohon masukkan nama Anda.');
    name?.focus();
    return;
  }

  if (!email?.value.trim() || !email.value.includes('@')) {
    showToast('⚠️ Mohon masukkan email yang valid.');
    email?.focus();
    return;
  }

  if (!message?.value.trim()) {
    showToast('⚠️ Mohon tulis pesan Anda.');
    message?.focus();
    return;
  }

  const btn = document.querySelector('.contact-form .button-main');
  if (btn) {
    const original = btn.textContent;
    btn.textContent = 'Mengirim...';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = '✓ Pesan Terkirim!';
      btn.style.background = '#40916c';
      showToast('📬 Pesan Anda telah terkirim! Kami akan menghubungi Anda segera.');

      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
        btn.style.background = '';
        if (name)    name.value    = '';
        if (email)   email.value   = '';
        if (subject) subject.value = '';
        if (message) message.value = '';
      }, 3000);
    }, 1400);
  }
}

/* ---- Input Animation: Floating Labels ---- */
document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(el => {
  el.addEventListener('focus', () => {
    el.closest('.form-group')?.classList.add('focused');
  });
  el.addEventListener('blur', () => {
    el.closest('.form-group')?.classList.remove('focused');
  });
});

/* ---- Parallax Hero Text ---- */
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-section');
  if (!hero) return;
  const scrolled = window.scrollY;
  if (scrolled < window.innerHeight) {
    hero.style.transform = `translateY(${scrolled * 0.18}px)`;
    hero.style.opacity = 1 - (scrolled / window.innerHeight) * 1.2;
  }
});

/* ---- Active Navbar Link on Scroll ---- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nb-list a');

function setActiveLink() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - navbar.offsetHeight - 80;
    if (window.scrollY >= sectionTop) {
      current = '#' + section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === current) {
      link.style.color = 'var(--cream)';
    }
  });
}

window.addEventListener('scroll', setActiveLink, { passive: true });

/* ---- Keyboard Accessibility: Close mobile menu on Escape ---- */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
  }
});

console.log('%c🌊 Tegenungan Waterfall', 'color:#52b788;font-size:18px;font-weight:bold;');
console.log('%cWebsite loaded successfully.', 'color:#c9a84c;font-size:12px;');
