/**
 * DRIVEPRO – Premium Driving School & License Training Academy
 * About Us Page JavaScript File (about.js)
 * Consistent with Home 1 (index.js) state, theme, RTL, modals & toast notifications
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. STATE & CONSTANTS
  // -------------------------------------------------------------------------
  const THEME_STORAGE_KEY = 'drivepro_theme';
  const DIR_STORAGE_KEY = 'drivepro_direction';

  const TEAM_DATA = {
    'David Sterling': {
      name: 'David Sterling',
      role: 'Founder & Chief Driving Instructor',
      experience: '14+ Years Experience',
      vehicle: 'Audi A3 Sportback S-Line (Dual-Control)',
      passRate: '98% First-Time Pass Rate',
      badge: 'Chief Examiner Certified',
      bio: 'As a former national practical driving test examiner, David founded DRIVEPRO in 2014 to bridge the gap between basic vehicle control and genuine road mastery. He oversees instructor accreditation and official test route simulations.',
      specialties: [
        'Official practical examination marking standards',
        'Complex multi-lane spiral roundabouts & city junctions',
        'Mock driving test assessment & readiness scoring',
        'Manual & automatic dual-control coaching'
      ]
    },
    'Sarah Jenkins': {
      name: 'Sarah Jenkins',
      role: 'Head of Defensive & Highway Training',
      experience: '11+ Years Experience',
      vehicle: 'BMW 2 Series Gran Coupé (Dual-Control)',
      passRate: '96% First-Time Pass Rate',
      badge: 'Defensive Road Specialist',
      bio: 'Sarah leads DRIVEPRO’s advanced road safety and license training curriculum. She specializes in helping learners master high-speed dual carriageways, adverse weather handling, and tight urban bay/parallel parking.',
      specialties: [
        'High-speed highway merging, lane discipline & overtaking',
        'Precision parallel parking & reverse bay maneuvers',
        'Night-time glare & adverse weather skid prevention',
        'Eco-safe braking and defensive forward scanning'
      ]
    },
    'Marcus Bennett': {
      name: 'Marcus Bennett',
      role: 'Novice Confidence & License Lead',
      experience: '9+ Years Experience',
      vehicle: 'Volkswagen Golf 8 R-Line (Dual-Control)',
      passRate: '95% First-Time Pass Rate',
      badge: 'Novice Anxiety Specialist',
      bio: 'Marcus is renowned for his calm, supportive coaching style designed specifically for nervous first-time learners. He breaks complex driving maneuvers into clear, repeatable visual checkpoints.',
      specialties: [
        'Zero-anxiety beginner cockpit drills & pedal control',
        'Smooth clutch biting-point & hill-start mastery',
        'Step-by-step confidence building in live city traffic',
        'Pre-test nerves management & independent sat-nav driving'
      ]
    }
  };

  // -------------------------------------------------------------------------
  // 2. DOM ELEMENTS
  // -------------------------------------------------------------------------
  const htmlEl = document.documentElement;
  const header = document.getElementById('site-header');

  // Navigation & Dropdown
  const homeDropdownItem = document.getElementById('home-dropdown-item');
  const homeDropdownBtn = document.getElementById('home-dropdown-btn');

  // Mobile Drawer
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const mobileHomeBtn = document.getElementById('mobile-home-btn');
  const mobileHomeSubmenu = document.getElementById('mobile-home-submenu');

  // Controls (Theme & RTL)
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const mobileThemeBtn = document.getElementById('mobile-theme-btn');
  const mobileThemeIcon = document.getElementById('mobile-theme-icon');

  const rtlToggleBtn = document.getElementById('rtl-toggle-btn');
  const rtlLabel = document.getElementById('rtl-label');
  const mobileRtlBtn = document.getElementById('mobile-rtl-btn');
  const mobileRtlLabel = document.getElementById('mobile-rtl-label');

  // Modals & Forms
  const loginModal = document.getElementById('login-modal');
  const headerLoginBtn = document.getElementById('header-login-btn');
  const mobileLoginBtn = document.getElementById('mobile-login-btn');
  const closeLoginModal = document.getElementById('close-login-modal');
  const studentLoginForm = document.getElementById('student-login-form');

  const aboutModal = document.getElementById('about-modal');
  const closeAboutModal = document.getElementById('close-about-modal');
  const aboutModalBody = document.getElementById('about-modal-body');
  const aboutModalTitle = document.getElementById('about-modal-title');

  // Action Buttons
  const aboutAccreditationBtn = document.getElementById('about-accreditation-btn');
  const ctaBookBtn = document.getElementById('cta-book-btn');
  const contactSupportBtn = document.getElementById('contact-support-btn');

  // Toast Container
  const toastContainer = document.getElementById('toast-container');

  // -------------------------------------------------------------------------
  // 3. THEME TOGGLE (LIGHT / DARK)
  // -------------------------------------------------------------------------
  function applyTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    const isDark = theme === 'dark';
    if (themeIcon) {
      themeIcon.className = isDark ? 'fa-solid fa-sun text-primary' : 'fa-solid fa-moon';
    }
    if (mobileThemeIcon) {
      mobileThemeIcon.className = isDark ? 'fa-solid fa-sun text-primary' : 'fa-solid fa-moon';
    }
  }

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark ? 'dark' : 'light');
    }
  }

  function toggleTheme() {
    const currentTheme = htmlEl.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
    showToast(`Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} Mode`, 'fa-circle-half-stroke');
  }

  // -------------------------------------------------------------------------
  // 4. RTL / LTR DIRECTION TOGGLE
  // -------------------------------------------------------------------------
  function applyDirection(dir) {
    htmlEl.setAttribute('dir', dir);
    localStorage.setItem(DIR_STORAGE_KEY, dir);

    const isRtl = dir === 'rtl';
    const labelText = isRtl ? 'LTR' : 'RTL';

    if (rtlLabel) rtlLabel.textContent = labelText;
    if (mobileRtlLabel) mobileRtlLabel.textContent = `${labelText} Mode`;
  }

  function initDirection() {
    const savedDir = localStorage.getItem(DIR_STORAGE_KEY) || 'ltr';
    applyDirection(savedDir);
  }

  function toggleDirection() {
    const currentDir = htmlEl.getAttribute('dir') || 'ltr';
    const nextDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
    applyDirection(nextDir);
    showToast(`Switched layout to ${nextDir.toUpperCase()} mode`, 'fa-right-left');
  }

  // -------------------------------------------------------------------------
  // 5. STICKY HEADER & SCROLL BEHAVIOUR
  // -------------------------------------------------------------------------
  function handleHeaderScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // -------------------------------------------------------------------------
  // 6. DESKTOP & MOBILE NAVIGATION
  // -------------------------------------------------------------------------
  function toggleHomeDropdown(e) {
    if (e) e.stopPropagation();
    const isOpen = homeDropdownItem.classList.contains('dropdown-open');
    if (isOpen) {
      closeHomeDropdown();
    } else {
      homeDropdownItem.classList.add('dropdown-open');
      homeDropdownBtn.setAttribute('aria-expanded', 'true');
    }
  }

  function closeHomeDropdown() {
    if (homeDropdownItem) {
      homeDropdownItem.classList.remove('dropdown-open');
      homeDropdownBtn.setAttribute('aria-expanded', 'false');
    }
  }

  function openMobileDrawer() {
    mobileDrawer.classList.add('is-open');
    drawerBackdrop.classList.add('is-active');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    mobileMenuToggle.classList.add('is-active');
    mobileMenuToggle.setAttribute('aria-expanded', 'true');
    document.documentElement.classList.add('drawer-scroll-lock');
    document.body.classList.add('drawer-scroll-lock');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
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

  function closeMobileDrawer() {
    mobileDrawer.classList.remove('is-open');
    drawerBackdrop.classList.remove('is-active');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    mobileMenuToggle.classList.remove('is-active');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    document.documentElement.classList.remove('drawer-scroll-lock');
    document.body.classList.remove('drawer-scroll-lock');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }

  function toggleMobileHomeSubmenu(e) {
    e.preventDefault();
    mobileHomeSubmenu.classList.toggle('is-open');
    const isExpanded = mobileHomeSubmenu.classList.contains('is-open');
    mobileHomeBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    const arrow = mobileHomeBtn.querySelector('.mobile-arrow');
    if (arrow) {
      arrow.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
    }
  }

  // -------------------------------------------------------------------------
  // 7. TOAST NOTIFICATION SYSTEM
  // -------------------------------------------------------------------------
  function showToast(message, iconClass = 'fa-circle-info') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');

    toast.innerHTML = `
      <div class="toast-icon">
        <i class="fa-solid ${iconClass}" aria-hidden="true"></i>
      </div>
      <div class="toast-message">${message}</div>
    `;

    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 3800);
  }

  // -------------------------------------------------------------------------
  // 8. MODALS LOGIC
  // -------------------------------------------------------------------------
  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('is-open');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('is-open');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function openTeamProfileModal(memberName) {
    const data = TEAM_DATA[memberName];
    if (!data) return;

    aboutModalTitle.innerHTML = `
      <i class="fa-solid fa-id-card-clip text-primary" aria-hidden="true"></i>
      <span>${data.name}</span>
    `;

    aboutModalBody.innerHTML = `
      <div style="margin-bottom: 18px;">
        <span class="badge badge-primary" style="margin-bottom: 10px; display: inline-flex;">
          <i class="fa-solid fa-certificate"></i> ${data.badge}
        </span>
        <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6; margin-top: 6px;">
          ${data.bio}
        </p>
      </div>

      <div style="background-color: var(--bg-surface-alt); padding: 16px; border-radius: var(--radius-md); margin-bottom: 20px; border: 1px solid var(--border);">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 0.875rem;">
          <div><strong style="color: var(--text-primary);"><i class="fa-solid fa-user-tie text-primary"></i> Role:</strong> <br><span style="color: var(--text-secondary);">${data.role}</span></div>
          <div><strong style="color: var(--text-primary);"><i class="fa-regular fa-clock text-primary"></i> Experience:</strong> <br><span style="color: var(--text-secondary);">${data.experience}</span></div>
          <div><strong style="color: var(--text-primary);"><i class="fa-solid fa-car text-primary"></i> Training Car:</strong> <br><span style="color: var(--text-secondary);">${data.vehicle}</span></div>
          <div><strong style="color: var(--text-primary);"><i class="fa-solid fa-trophy text-primary"></i> Record:</strong> <br><span style="color: var(--text-primary); font-weight: 700;">${data.passRate}</span></div>
        </div>
      </div>

      <h4 style="font-size: 1rem; margin-bottom: 12px; color: var(--text-primary);">Coaching Specialties:</h4>
      <ul style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px;">
        ${data.specialties.map(item => `
          <li style="display: flex; align-items: center; gap: 10px; font-size: 0.875rem; color: var(--text-primary);">
            <i class="fa-solid fa-circle-check text-primary" style="font-size: 0.8125rem;"></i>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>

      <button class="btn btn-primary btn-block" id="modal-book-instructor-btn">
        <i class="fa-solid fa-calendar-check"></i>
        <span>Book a Lesson with ${data.name.split(' ')[0]}</span>
      </button>
    `;

    openModal(aboutModal);

    const bookBtn = document.getElementById('modal-book-instructor-btn');
    if (bookBtn) {
      bookBtn.addEventListener('click', () => {
        closeModal(aboutModal);
        showToast(`Lesson request sent for ${data.name}! Our coordinator will confirm your slot.`, 'fa-circle-check');
      });
    }
  }

  function openAccreditationModal() {
    aboutModalTitle.innerHTML = `
      <i class="fa-solid fa-shield-halved text-primary" aria-hidden="true"></i>
      <span>Academy Accreditation &amp; Safety</span>
    `;

    aboutModalBody.innerHTML = `
      <div style="margin-bottom: 18px;">
        <span class="badge badge-primary" style="margin-bottom: 10px; display: inline-flex;">
          <i class="fa-solid fa-award"></i> ISO &amp; National Transport Certified
        </span>
        <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6; margin-top: 6px;">
          DRIVEPRO Driving School &amp; License Training Academy operates under strict national driver education standards, annual fleet inspections, and verified examiner training protocols.
        </p>
      </div>

      <ul style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;">
        <li style="display: flex; align-items: center; gap: 10px; font-size: 0.875rem; color: var(--text-primary);">
          <i class="fa-solid fa-circle-check text-primary"></i>
          <span>100% Euro NCAP 5-Star Dual-Control Vehicle Fleet</span>
        </li>
        <li style="display: flex; align-items: center; gap: 10px; font-size: 0.875rem; color: var(--text-primary);">
          <i class="fa-solid fa-circle-check text-primary"></i>
          <span>State-Licensed &amp; DBS Background-Verified Instructors</span>
        </li>
        <li style="display: flex; align-items: center; gap: 10px; font-size: 0.875rem; color: var(--text-primary);">
          <i class="fa-solid fa-circle-check text-primary"></i>
          <span>Comprehensive Learner Insurance Included in Every Lesson</span>
        </li>
        <li style="display: flex; align-items: center; gap: 10px; font-size: 0.875rem; color: var(--text-primary);">
          <i class="fa-solid fa-circle-check text-primary"></i>
          <span>Verified 95% First-Time Practical Test Pass Rate (2026 Audit)</span>
        </li>
      </ul>

      <button class="btn btn-primary btn-block" id="modal-accreditation-close-btn">
        <i class="fa-solid fa-check"></i>
        <span>Got It, Continue Exploring</span>
      </button>
    `;

    openModal(aboutModal);

    const confirmBtn = document.getElementById('modal-accreditation-close-btn');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => closeModal(aboutModal));
    }
  }

  function openBookingModal() {
    aboutModalTitle.innerHTML = `
      <i class="fa-solid fa-calendar-check text-primary" aria-hidden="true"></i>
      <span>Book Your First Driving Lesson</span>
    `;

    aboutModalBody.innerHTML = `
      <p class="modal-description">
        Start your license training journey with a certified DRIVEPRO instructor. Choose your preferred transmission and schedule below.
      </p>
      <form id="quick-booking-form" class="modal-form">
        <div class="form-group">
          <label for="booking-name" class="form-label">Full Name</label>
          <div class="input-with-icon">
            <i class="fa-regular fa-user input-icon" aria-hidden="true"></i>
            <input type="text" id="booking-name" class="form-input" placeholder="e.g. Jordan Miller" required />
          </div>
        </div>
        <div class="form-group">
          <label for="booking-phone" class="form-label">Phone Number</label>
          <div class="input-with-icon">
            <i class="fa-solid fa-phone input-icon" aria-hidden="true"></i>
            <input type="tel" id="booking-phone" class="form-input" placeholder="e.g. +1 (555) 234-5678" required />
          </div>
        </div>
        <div class="form-group">
          <label for="booking-program" class="form-label">License Training Program</label>
          <div class="input-with-icon">
            <i class="fa-solid fa-car-side input-icon" aria-hidden="true"></i>
            <input type="text" id="booking-program" class="form-input" value="Car License Training (Automatic / Manual)" required />
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block">
          <i class="fa-solid fa-paper-plane" aria-hidden="true"></i>
          <span>Confirm Lesson Booking</span>
        </button>
      </form>
    `;

    openModal(aboutModal);

    const bookingForm = document.getElementById('quick-booking-form');
    if (bookingForm) {
      bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameVal = document.getElementById('booking-name')?.value || 'Learner';
        closeModal(aboutModal);
        showToast(`Thank you, ${nameVal}! Your first driving lesson request has been received.`, 'fa-circle-check');
      });
    }
  }

  // -------------------------------------------------------------------------
  // 9. EVENT LISTENERS SETUP
  // -------------------------------------------------------------------------
  function setupEventListeners() {
    // Window Scroll for sticky header
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });

    // Theme Toggles
    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', toggleTheme);

    // RTL/LTR Toggles
    if (rtlToggleBtn) rtlToggleBtn.addEventListener('click', toggleDirection);
    if (mobileRtlBtn) mobileRtlBtn.addEventListener('click', toggleDirection);

    // Home Dropdown Click Interaction
    if (homeDropdownBtn) {
      homeDropdownBtn.addEventListener('click', toggleHomeDropdown);
    }

    // Close Dropdown on Click Outside
    document.addEventListener('click', (e) => {
      if (homeDropdownItem && !homeDropdownItem.contains(e.target)) {
        closeHomeDropdown();
      }
    });

    // Close on Escape Key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeHomeDropdown();
        closeModal(loginModal);
        closeModal(aboutModal);
        closeMobileDrawer();
      }
    });

    // Mobile Drawer Controls
    if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', openMobileDrawer);
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMobileDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeMobileDrawer);
    if (mobileHomeBtn) mobileHomeBtn.addEventListener('click', toggleMobileHomeSubmenu);

    // Login Navigation Triggers
    if (headerLoginBtn && headerLoginBtn.tagName !== 'A') {
      headerLoginBtn.addEventListener('click', () => openModal(loginModal));
    }
    if (mobileLoginBtn && mobileLoginBtn.tagName !== 'A') {
      mobileLoginBtn.addEventListener('click', () => {
        closeMobileDrawer();
        openModal(loginModal);
      });
    }
    if (closeLoginModal) {
      closeLoginModal.addEventListener('click', () => closeModal(loginModal));
    }
    if (loginModal) {
      loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) closeModal(loginModal);
      });
    }

    // Student Login Form Submission
    if (studentLoginForm) {
      studentLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('student-email');
        const userEmail = emailInput ? emailInput.value : 'Student';
        closeModal(loginModal);

        if (headerLoginBtn) {
          headerLoginBtn.innerHTML = `
            <i class="fa-solid fa-circle-user" aria-hidden="true"></i>
            <span>Portal: Active</span>
          `;
          headerLoginBtn.classList.remove('btn-primary');
          headerLoginBtn.classList.add('btn-secondary');
        }

        showToast(`Welcome back, ${userEmail}! Student portal session active.`, 'fa-circle-check');
      });
    }

    // About Modal Close
    if (closeAboutModal) {
      closeAboutModal.addEventListener('click', () => closeModal(aboutModal));
    }
    if (aboutModal) {
      aboutModal.addEventListener('click', (e) => {
        if (e.target === aboutModal) closeModal(aboutModal);
      });
    }

    // Team Profile Buttons
    const teamProfileBtns = document.querySelectorAll('.team-profile-btn');
    teamProfileBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const memberName = btn.getAttribute('data-member');
        openTeamProfileModal(memberName);
      });
    });

    // Accreditation & CTA Buttons
    if (aboutAccreditationBtn) {
      aboutAccreditationBtn.addEventListener('click', openAccreditationModal);
    }

    if (ctaBookBtn) {
      ctaBookBtn.addEventListener('click', openBookingModal);
    }

    if (contactSupportBtn) {
      contactSupportBtn.addEventListener('click', () => {
        showToast('Support hotline: +1 (800) 555-3748 is available Mon–Sat.', 'fa-headset');
      });
    }

    // Intercept Placeholder Links Cleanly
    const placeholderLinks = document.querySelectorAll('.placeholder-link');
    placeholderLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageName = link.getAttribute('data-page-name') || 'Upcoming Page';
        showToast(`Notice: "${pageName}" is in development for future releases. Currently viewing About Us.`, 'fa-road-circle-check');
        if (mobileDrawer && mobileDrawer.classList.contains('is-open')) {
          closeMobileDrawer();
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 10. INITIALIZATION
  // -------------------------------------------------------------------------
  function init() {
    initTheme();
    initDirection();
    setupEventListeners();
    handleHeaderScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

