/**
 * DRIVEPRO DRIVING SCHOOL & CAR LICENSE PORTAL - SIGNUP.JS
 * Handles Theme/RTL synchronization, password visibility toggle,
 * 4-field signup validation, and Google/Apple registration.
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
      themeIcon.className = theme === 'dark'
        ? 'fa-solid fa-sun theme-icon'
        : 'fa-solid fa-moon theme-icon';
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
     2. PASSWORD SHOW / HIDE TOGGLE
     ============================================================ */
  const passwordInput = document.getElementById('signup-password');
  const togglePasswordBtn = document.getElementById('toggle-password-btn');
  const passwordEyeIcon = document.getElementById('password-eye-icon');

  if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener('click', () => {
      const isPassword = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
      if (passwordEyeIcon) {
        passwordEyeIcon.className = isPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye';
      }
    });
  }

  /* ============================================================
     3. SIGNUP FORM VALIDATION (4 PLACEHOLDERS)
     ============================================================ */
  const signupForm = document.getElementById('signup-form');
  const nameInput = document.getElementById('signup-name');
  const emailInput = document.getElementById('signup-email');
  const phoneInput = document.getElementById('signup-phone');

  const nameError = document.getElementById('signup-name-error');
  const emailError = document.getElementById('signup-email-error');
  const phoneError = document.getElementById('signup-phone-error');
  const passwordError = document.getElementById('signup-password-error');

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // 1. Full Name validation
      const nameVal = nameInput.value.trim();
      if (!nameVal || nameVal.length < 2) {
        nameInput.classList.add('input-error');
        nameError.textContent = 'Please enter your full name.';
        nameError.classList.add('visible');
        isValid = false;
      } else {
        nameInput.classList.remove('input-error');
        nameError.textContent = '';
        nameError.classList.remove('visible');
      }

      // 2. Email validation
      const emailVal = emailInput.value.trim();
      if (!emailVal || !emailVal.includes('@')) {
        emailInput.classList.add('input-error');
        emailError.textContent = 'Please enter a valid email address.';
        emailError.classList.add('visible');
        isValid = false;
      } else {
        emailInput.classList.remove('input-error');
        emailError.textContent = '';
        emailError.classList.remove('visible');
      }

      // 3. Phone / Permit Number validation
      const phoneVal = phoneInput.value.trim();
      if (!phoneVal || phoneVal.length < 6) {
        phoneInput.classList.add('input-error');
        phoneError.textContent = 'Enter a valid phone or permit ID.';
        phoneError.classList.add('visible');
        isValid = false;
      } else {
        phoneInput.classList.remove('input-error');
        phoneError.textContent = '';
        phoneError.classList.remove('visible');
      }

      // 4. Password validation
      const passVal = passwordInput.value.trim();
      if (!passVal || passVal.length < 6) {
        passwordInput.classList.add('input-error');
        passwordError.textContent = 'Password must be at least 6 characters.';
        passwordError.classList.add('visible');
        isValid = false;
      } else {
        passwordInput.classList.remove('input-error');
        passwordError.textContent = '';
        passwordError.classList.remove('visible');
      }

      if (!isValid) return;

      showToast(`Welcome aboard, ${nameVal}! Redirecting to your Student Dashboard...`);
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1000);
    });
  }

  /* ============================================================
     4. GOOGLE & APPLE SOCIAL AUTH BUTTONS
     ============================================================ */
  const socialBtns = document.querySelectorAll('.social-auth-btn');
  socialBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const provider = btn.getAttribute('data-provider') || 'Social';
      showToast(`Creating your student account with ${provider}...`);
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1000);
    });
  });

  /* ============================================================
     5. TOAST HELPER
     ============================================================ */
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--primary);"></i><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3200);
  }
});

