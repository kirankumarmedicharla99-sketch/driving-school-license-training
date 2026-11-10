/**
 * DRIVEPRO DRIVING SCHOOL & CAR LICENSE PORTAL - COMING-SOON.JS
 * Handles Light/Dark Theme, LTR/RTL Direction, Live Countdown Timer,
 * and Early-Bird Student Waitlist Subscription.
 */

document.addEventListener('DOMContentLoaded', () => {
  const htmlEl = document.documentElement;

  /* ============================================================
     1. THEME & RTL INITIALIZATION (SHARED WITH HOME 1)
     ============================================================ */
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const rtlToggleBtn = document.getElementById('rtl-toggle-btn');
  const rtlLabel = document.getElementById('rtl-label');

  const savedTheme = localStorage.getItem('drivepro_theme') || 'light';
  const savedDir = localStorage.getItem('drivepro_direction') || 'ltr';

  function applyTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('drivepro_theme', theme);
    if (themeIcon) {
      themeIcon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
  }

  function applyDirection(dir) {
    htmlEl.setAttribute('dir', dir);
    localStorage.setItem('drivepro_direction', dir);
    if (rtlLabel) {
      rtlLabel.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
    }
  }

  applyTheme(savedTheme);
  applyDirection(savedDir);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  if (rtlToggleBtn) {
    rtlToggleBtn.addEventListener('click', () => {
      const nextDir = htmlEl.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
      applyDirection(nextDir);
    });
  }

  /* ============================================================
     2. LIVE LAUNCH COUNTDOWN TIMER
     ============================================================ */
  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minutesEl = document.getElementById('cd-minutes');
  const secondsEl = document.getElementById('cd-seconds');

  // Target launch date: 14 days, 8 hours, 45 minutes from current load
  const targetTimestamp = Date.now() + (14 * 24 * 60 * 60 + 8 * 60 * 60 + 45 * 60 + 30) * 1000;

  function updateCountdown() {
    const diff = Math.max(0, targetTimestamp - Date.now());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* ============================================================
     3. EARLY-BIRD WAITLIST SUBSCRIPTION FORM
     ============================================================ */
  const notifyForm = document.getElementById('notify-form');
  const notifyEmail = document.getElementById('notify-email');
  const notifyFeedback = document.getElementById('notify-feedback');

  if (notifyForm && notifyEmail && notifyFeedback) {
    notifyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = notifyEmail.value.trim();

      if (!val || !val.includes('@')) {
        notifyFeedback.textContent = 'Please enter a valid student email address.';
        notifyFeedback.className = 'form-feedback error';
        return;
      }

      notifyFeedback.textContent = `Success! ${val} is registered for 20% Early-Bird Tuition Discount & Launch Access.`;
      notifyFeedback.className = 'form-feedback success';
      notifyForm.reset();
    });
  }
});

