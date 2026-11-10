/**
 * DRIVEPRO DRIVING SCHOOL & CAR LICENSE PORTAL - 404.JS
 * Synchronizes Light/Dark Theme and LTR/RTL Direction with Home 1.
 */

document.addEventListener('DOMContentLoaded', () => {
  const htmlEl = document.documentElement;
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
});

