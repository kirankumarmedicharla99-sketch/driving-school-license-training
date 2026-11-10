/**
 * DRIVEPRO – Premium Driving School & License Training Academy
 * Journal Page Script (journal.js)
 * Full interactive support: Theme, RTL, Mobile Drawer, Search & Category Filters, FAQs
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. STATE & STORAGE KEYS
  // -------------------------------------------------------------------------
  const THEME_STORAGE_KEY = 'drivepro_theme';
  const DIR_STORAGE_KEY = 'drivepro_direction';

  // -------------------------------------------------------------------------
  // 2. TOAST NOTIFICATION UTILITY
  // -------------------------------------------------------------------------
  function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');

    const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-info';
    toast.innerHTML = `
      <i class="fa-solid ${icon}" style="color: var(--primary);" aria-hidden="true"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // -------------------------------------------------------------------------
  // 3. THEME & RTL MANAGEMENT
  // -------------------------------------------------------------------------
  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'light';
    applyTheme(savedTheme);

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const mobileThemeBtn = document.getElementById('mobile-theme-btn');

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }
    if (mobileThemeBtn) {
      mobileThemeBtn.addEventListener('click', toggleTheme);
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    const themeIcon = document.getElementById('theme-icon');
    const mobileThemeIcon = document.getElementById('mobile-theme-icon');

    if (theme === 'dark') {
      if (themeIcon) themeIcon.className = 'fa-solid fa-sun theme-icon';
      if (mobileThemeIcon) mobileThemeIcon.className = 'fa-solid fa-sun';
    } else {
      if (themeIcon) themeIcon.className = 'fa-solid fa-moon theme-icon';
      if (mobileThemeIcon) mobileThemeIcon.className = 'fa-solid fa-moon';
    }
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
  }

  function initDirection() {
    const savedDir = localStorage.getItem(DIR_STORAGE_KEY) || 'ltr';
    applyDirection(savedDir);

    const rtlBtn = document.getElementById('rtl-toggle-btn');
    const mobileRtlBtn = document.getElementById('mobile-rtl-btn');

    if (rtlBtn) {
      rtlBtn.addEventListener('click', toggleDirection);
    }
    if (mobileRtlBtn) {
      mobileRtlBtn.addEventListener('click', toggleDirection);
    }
  }

  function applyDirection(dir) {
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem(DIR_STORAGE_KEY, dir);

    const rtlLabel = document.getElementById('rtl-label');
    const mobileRtlLabel = document.getElementById('mobile-rtl-label');

    if (dir === 'rtl') {
      if (rtlLabel) rtlLabel.textContent = 'LTR';
      if (mobileRtlLabel) mobileRtlLabel.textContent = 'LTR Mode';
    } else {
      if (rtlLabel) rtlLabel.textContent = 'RTL';
      if (mobileRtlLabel) mobileRtlLabel.textContent = 'RTL Mode';
    }
  }

  function toggleDirection() {
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    applyDirection(newDir);
    showToast(`Switched text layout to ${newDir.toUpperCase()}`, 'info');
  }

  // -------------------------------------------------------------------------
  // 4. MOBILE DRAWER NAVIGATION
  // -------------------------------------------------------------------------
  function initMobileDrawer() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const closeBtn = document.getElementById('close-drawer-btn');
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('drawer-backdrop');

    function openDrawer() {
      if (drawer) {
        drawer.classList.add('active');
        drawer.setAttribute('aria-hidden', 'false');
      }
      if (backdrop) backdrop.classList.add('active');
      document.documentElement.classList.add('drawer-scroll-lock');
      document.body.classList.add('drawer-scroll-lock');
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
      if (!document.documentElement.dataset.drawerTouchGuardBound) {
        document.documentElement.dataset.drawerTouchGuardBound = '1';
        document.addEventListener('touchmove', (e) => {
          if (!document.documentElement.classList.contains('drawer-scroll-lock')) return;
          const inner = e.target.closest('.mobile-drawer-inner');
          if (!inner || inner.scrollHeight <= inner.clientHeight) {
            e.preventDefault();
          }
        }, { passive: false });
      }
    }

    function closeDrawer() {
      if (drawer) {
        drawer.classList.remove('active');
        drawer.setAttribute('aria-hidden', 'true');
      }
      if (backdrop) backdrop.classList.remove('active');
      document.documentElement.classList.remove('drawer-scroll-lock');
      document.body.classList.remove('drawer-scroll-lock');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    }

    if (menuToggle) menuToggle.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) {
      backdrop.addEventListener('click', closeDrawer);
      backdrop.addEventListener('wheel', (e) => e.preventDefault(), { passive: false });
      backdrop.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
    }

    // Mobile submenu toggle for Home
    const homeToggle = document.getElementById('mobile-home-toggle');
    const subMenu = document.getElementById('mobile-home-submenu');
    if (homeToggle && subMenu) {
      homeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        subMenu.classList.toggle('active');
        const icon = homeToggle.querySelector('.mobile-dropdown-icon');
        if (icon) {
          icon.style.transform = subMenu.classList.contains('active') ? 'rotate(180deg)' : '';
        }
      });
    }
  }

  // -------------------------------------------------------------------------
  // 5. SEARCH & CATEGORY FILTERING FOR JOURNAL CARDS
  // -------------------------------------------------------------------------
  function initJournalFilters() {
    const searchInput = document.getElementById('journal-search-input');
    const searchBtn = document.getElementById('journal-search-btn');
    const filterButtons = document.querySelectorAll('.filter-tab-btn');
    const cards = document.querySelectorAll('.journal-card');
    const noResultsMsg = document.getElementById('journal-no-results');

    let currentCategory = 'all';
    let searchQuery = '';

    function filterCards() {
      let visibleCount = 0;

      cards.forEach((card) => {
        const title = (card.querySelector('.journal-card-title')?.textContent || '').toLowerCase();
        const excerpt = (card.querySelector('.journal-card-excerpt')?.textContent || '').toLowerCase();
        const category = (card.getAttribute('data-category') || '').toLowerCase();

        const matchesCategory = currentCategory === 'all' || category === currentCategory;
        const matchesSearch = !searchQuery || title.includes(searchQuery) || excerpt.includes(searchQuery) || category.includes(searchQuery);

        if (matchesCategory && matchesSearch) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (noResultsMsg) {
        noResultsMsg.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    }

    // Category Tabs
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-filter') || 'all';
        filterCards();
      });
    });

    // Search Input
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        filterCards();
      });

      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          filterCards();
        }
      });
    }

    if (searchBtn) {
      searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        filterCards();
      });
    }
  }

  // -------------------------------------------------------------------------
  // 6. FAQS ACCORDION
  // -------------------------------------------------------------------------
  function initFaqsAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
      const btn = item.querySelector('.faq-question-btn');
      const answer = item.querySelector('.faq-answer');

      if (!btn || !answer) return;

      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Close other items
        faqItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove('active');
            const otherAnswer = other.querySelector('.faq-answer');
            if (otherAnswer) otherAnswer.style.maxHeight = null;
            const otherBtn = other.querySelector('.faq-question-btn');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove('active');
          answer.style.maxHeight = null;
          btn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 7. NEWSLETTER FORM HANDLER
  // -------------------------------------------------------------------------
  function initNewsletter() {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter-input');
      const email = input ? input.value.trim() : '';
      if (email) {
        showToast(`Thank you! ${email} has been subscribed to the DRIVEPRO Journal.`, 'success');
        form.reset();
      }
    });
  }

  // -------------------------------------------------------------------------
  // 8. INITIALIZATION
  // -------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initDirection();
    initMobileDrawer();
    initJournalFilters();
    initFaqsAccordion();
    initNewsletter();

    document.querySelectorAll('.placeholder-link').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageName = link.dataset.pageName || 'Legal Information';
        showToast(`${pageName} portal opens in your browser policy drawer.`, 'info');
      });
    });
  });
})();

