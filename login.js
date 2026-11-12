/**
 * DRIVEPRO DRIVING SCHOOL & CAR LICENSE PORTAL - LOGIN.JS
 * Handles Theme/RTL synchronization, password visibility toggle,
 * form validation, social auth simulation, and forgot password modal.
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
  const passwordInput = document.getElementById('login-password');
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
     3. LOGIN FORM VALIDATION & REDIRECT TO DASHBOARD
     ============================================================ */
  const loginForm = document.getElementById('login-form');
  const emailInput = document.getElementById('login-email');
  const emailError = document.getElementById('login-email-error');
  const passwordError = document.getElementById('login-password-error');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const emailVal = emailInput.value.trim();
      const passVal = passwordInput.value.trim();

      if (!emailVal || (!emailVal.includes('@') && emailVal.length < 4)) {
        emailInput.classList.add('input-error');
        emailError.textContent = 'Please enter a valid student email or permit ID.';
        emailError.classList.add('visible');
        isValid = false;
      } else {
        emailInput.classList.remove('input-error');
        emailError.textContent = '';
        emailError.classList.remove('visible');
      }

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

      showToast('Authentication verified! Redirecting to Student Dashboard...');
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 900);
    });
  }

  /* ============================================================
     4. GOOGLE & APPLE SOCIAL AUTH BUTTONS
     ============================================================ */
  const socialBtns = document.querySelectorAll('.social-auth-btn');
  socialBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const provider = btn.getAttribute('data-provider') || 'Social';
      showToast(`Connecting to ${provider} Student Single Sign-On...`);
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1000);
    });
  });

  /* ============================================================
     5. FORGOT PASSWORD MODAL
     ============================================================ */
  const forgotLink = document.getElementById('forgot-password-link');
  const forgotModal = document.getElementById('forgot-modal');
  const closeForgotModal = document.getElementById('close-forgot-modal');
  const forgotForm = document.getElementById('forgot-form');
  const resetEmailInput = document.getElementById('reset-email');
  const resetEmailError = document.getElementById('reset-email-error');

  function openModal() {
    if (!forgotModal) return;
    forgotModal.classList.add('active');
    forgotModal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    if (!forgotModal) return;
    forgotModal.classList.remove('active');
    forgotModal.setAttribute('aria-hidden', 'true');
  }

  if (forgotLink) {
    forgotLink.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  }

  if (closeForgotModal) {
    closeForgotModal.addEventListener('click', closeModal);
  }

  if (forgotModal) {
    forgotModal.addEventListener('click', (e) => {
      if (e.target === forgotModal) closeModal();
    });
  }

  if (forgotForm) {
    forgotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = resetEmailInput.value.trim();
      if (!val || !val.includes('@')) {
        resetEmailInput.classList.add('input-error');
        resetEmailError.textContent = 'Please enter a valid student email address.';
        resetEmailError.classList.add('visible');
        return;
      }
      resetEmailInput.classList.remove('input-error');
      resetEmailError.textContent = '';
      resetEmailError.classList.remove('visible');

      closeModal();
      forgotForm.reset();
      showToast(`Password reset instructions sent to ${val}`);
    });
  }

  /* ============================================================
     6. TOAST HELPER
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

