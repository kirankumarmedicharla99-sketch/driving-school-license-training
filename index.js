/**
 * DRIVEPRO – Premium Driving School & License Training Academy
 * Master JavaScript File (index.js)
 * Clean, modular Vanilla JavaScript for Home 1
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. STATE & CONSTANTS
  // -------------------------------------------------------------------------
  const THEME_STORAGE_KEY = 'drivepro_theme';
  const DIR_STORAGE_KEY = 'drivepro_direction';

  const COURSE_DATA = {
    'Beginner Driving Course': {
      title: 'Beginner Driving Course',
      duration: '20 Practical Hours',
      car: 'Dual-Control Modern Hatchback',
      level: 'Novice / First-Time Driver',
      badge: 'Beginner Friendly',
      overview: 'Designed for complete beginners to build strong driving habits from scratch. Our patient certified instructors guide you through foundational vehicle mechanics, mirror checks, clutch control, steering smoothness, and essential traffic rules.',
      modules: [
        'Cockpit drill & essential vehicle controls',
        'Starting, stopping & precise clutch biting point',
        'Steering technique & road positioning',
        'Basic junctions, roundabouts & pedestrian crossings',
        'Emergency stop procedure & hazard anticipation'
      ],
      price: '$540 total / $30 per hour'
    },
    'Car License Training': {
      title: 'Car License Training',
      duration: '30 Practical Hours + Mock Exams',
      car: 'Euro NCAP 5-Star Dual-Control Sedan',
      level: 'Test Candidate / Intermediate',
      badge: 'Highest Pass Rate',
      overview: 'A full structured roadmap targeted specifically to pass your official national practical driving test. Includes extensive route practice around your local test center and realistic examiner-style mock tests.',
      modules: [
        'Official test center route simulation',
        'Independent driving with sat-nav & road signs',
        'Maneuvers: Parallel park, bay park & pull up on right',
        'Complex multi-lane spiral roundabouts',
        'Official test-style mock exam with score sheet'
      ],
      price: '$790 total (Includes 2 Mock Tests)'
    },
    'Advanced Driving Course': {
      title: 'Advanced Driving Course',
      duration: '15 Practical Hours',
      car: 'Performance / Highway Dual-Control Vehicle',
      level: 'Licensed Drivers Seeking Confidence',
      badge: 'Defensive Driving',
      overview: 'Elevate your driving from basic test passing to high-level situational mastery. Conquers motorway anxiety, adverse weather driving, night-time glare handling, and advanced defensive skid mitigation.',
      modules: [
        'High-speed motorway joining, overtaking & lane etiquette',
        'Adverse weather & heavy rain hydroplaning defense',
        'Night driving & hazard anticipation in low visibility',
        'Fuel-efficient eco-driving techniques',
        'Advanced tight spatial maneuvering & city parking'
      ],
      price: '$420 total'
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

  const courseModal = document.getElementById('course-modal');
  const closeCourseModal = document.getElementById('close-course-modal');
  const courseModalBody = document.getElementById('course-modal-body');
  const courseModalTitle = document.getElementById('course-modal-title');

  // Action Buttons
  const heroInstructorBtn = document.getElementById('hero-instructor-btn');
  const aboutDiscoverBtn = document.getElementById('about-discover-btn');
  const ctaBookBtn = document.getElementById('cta-book-btn');
  const contactSupportBtn = document.getElementById('contact-support-btn');

  // Toast Container
  const toastContainer = document.getElementById('toast-container');

  // Carousel Elements
  const carouselTrack = document.getElementById('carousel-track');
  const carouselSlides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');
  const paginationDots = document.querySelectorAll('.pagination-dot');

  let currentSlide = 0;
  let autoSlideTimer = null;
  let touchStartX = 0;
  let touchEndX = 0;

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

    // Re-render carousel position when direction changes
    updateCarouselPosition();
  }

  function initDirection() {
    const savedDir = localStorage.getItem(DIR_STORAGE_KEY) || 'ltr';
    applyDirection(savedDir);
  }

  function toggleDirection() {
    const currentDir = htmlEl.getAttribute('dir') || 'ltr';
    const nextDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
    applyDirection(nextDir);
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

    // Trigger animation in next frame
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto remove after 3.8s
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
  // 8. TESTIMONIAL CAROUSEL
  // -------------------------------------------------------------------------
  function updateCarouselPosition() {
    if (!carouselTrack || carouselSlides.length === 0) return;

    const isRtl = htmlEl.getAttribute('dir') === 'rtl';
    const directionFactor = isRtl ? 1 : -1;
    const offset = currentSlide * 100 * directionFactor;

    carouselTrack.style.transform = `translateX(${offset}%)`;

    // Update slides state
    carouselSlides.forEach((slide, index) => {
      slide.classList.toggle('active-slide', index === currentSlide);
    });

    // Update dots
    paginationDots.forEach((dot, index) => {
      const isActive = index === currentSlide;
      dot.classList.toggle('active-dot', isActive);
      dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  }

  function goToSlide(index) {
    if (index < 0) {
      currentSlide = carouselSlides.length - 1;
    } else if (index >= carouselSlides.length) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }
    updateCarouselPosition();
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideTimer = setInterval(nextSlide, 6000);
  }

  function stopAutoSlide() {
    if (autoSlideTimer) {
      clearInterval(autoSlideTimer);
      autoSlideTimer = null;
    }
  }

  function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
  }

  function handleSwipeGesture() {
    const threshold = 40;
    const isRtl = htmlEl.getAttribute('dir') === 'rtl';
    const diff = touchEndX - touchStartX;

    if (Math.abs(diff) > threshold) {
      if (diff < 0) {
        // Swiped Left
        isRtl ? prevSlide() : nextSlide();
      } else {
        // Swiped Right
        isRtl ? nextSlide() : prevSlide();
      }
    }
  }

  // -------------------------------------------------------------------------
  // 9. MODALS LOGIC
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

  function openCourseDetailsModal(courseName) {
    const data = COURSE_DATA[courseName];
    if (!data) return;

    courseModalTitle.textContent = data.title;
    courseModalBody.innerHTML = `
      <div style="margin-bottom: 20px;">
        <span class="badge badge-primary" style="margin-bottom: 12px; display: inline-flex;">
          <i class="fa-solid fa-award"></i> ${data.badge}
        </span>
        <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6; margin-top: 8px;">
          ${data.overview}
        </p>
      </div>

      <div style="background-color: var(--bg-surface-alt); padding: 16px; border-radius: var(--radius-md); margin-bottom: 20px; border: 1px solid var(--border);">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 0.875rem;">
          <div><strong style="color: var(--text-primary);"><i class="fa-regular fa-clock text-primary"></i> Duration:</strong> <br><span style="color: var(--text-secondary);">${data.duration}</span></div>
          <div><strong style="color: var(--text-primary);"><i class="fa-solid fa-car text-primary"></i> Vehicle:</strong> <br><span style="color: var(--text-secondary);">${data.car}</span></div>
          <div><strong style="color: var(--text-primary);"><i class="fa-solid fa-signal text-primary"></i> Level:</strong> <br><span style="color: var(--text-secondary);">${data.level}</span></div>
          <div><strong style="color: var(--text-primary);"><i class="fa-solid fa-tag text-primary"></i> Tuition:</strong> <br><span style="color: var(--text-primary); font-weight: 700;">${data.price}</span></div>
        </div>
      </div>

      <h4 style="font-size: 1rem; margin-bottom: 12px; color: var(--text-primary);">Core Curriculum Modules:</h4>
      <ul style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px;">
        ${data.modules.map(mod => `
          <li style="display: flex; align-items: center; gap: 10px; font-size: 0.875rem; color: var(--text-primary);">
            <i class="fa-solid fa-circle-check text-primary" style="font-size: 0.8125rem;"></i>
            <span>${mod}</span>
          </li>
        `).join('')}
      </ul>

      <div style="display: flex; gap: 12px;">
        <button class="btn btn-primary btn-block" id="modal-book-confirm-btn">
          <i class="fa-solid fa-calendar-plus"></i>
          <span>Enroll In This Course</span>
        </button>
      </div>
    `;

    openModal(courseModal);

    // Bind enroll button inside modal
    const bookConfirmBtn = document.getElementById('modal-book-confirm-btn');
    if (bookConfirmBtn) {
      bookConfirmBtn.addEventListener('click', () => {
        closeModal(courseModal);
        showToast(`Enrollment requested for ${data.title}! An instructor will contact you.`, 'fa-circle-check');
      });
    }
  }

  // -------------------------------------------------------------------------
  // 10. EVENT LISTENERS SETUP
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
        closeModal(courseModal);
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

        // Update header login button to user avatar / greeting
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

    // Course Modal Close
    if (closeCourseModal) {
      closeCourseModal.addEventListener('click', () => closeModal(courseModal));
    }
    if (courseModal) {
      courseModal.addEventListener('click', (e) => {
        if (e.target === courseModal) closeModal(courseModal);
      });
    }

    // Course "View Course" Buttons
    const courseViewButtons = document.querySelectorAll('.course-view-btn');
    courseViewButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        // If it's a link to a page (e.g. service details.html), permit standard navigation
        if (btn.tagName === 'A' && btn.getAttribute('href')) {
          return;
        }
        e.preventDefault();
        const courseName = btn.getAttribute('data-course');
        openCourseDetailsModal(courseName);
      });
    });

    // Testimonial Carousel Controls
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoSlide();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoSlide();
      });
    }

    paginationDots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const targetIndex = parseInt(dot.getAttribute('data-index'), 10);
        goToSlide(targetIndex);
        startAutoSlide();
      });
    });

    // Carousel Touch Gestures
    if (carouselTrack) {
      carouselTrack.addEventListener('touchstart', handleTouchStart, { passive: true });
      carouselTrack.addEventListener('touchend', handleTouchEnd, { passive: true });

      // Pause auto-sliding when hovering with mouse
      carouselTrack.addEventListener('mouseenter', stopAutoSlide);
      carouselTrack.addEventListener('mouseleave', startAutoSlide);
    }

    // Generic Action Buttons (Hero, About, CTA, Support)
    if (heroInstructorBtn) {
      heroInstructorBtn.addEventListener('click', () => {
        showToast('Instructor roster: 15 certified mentors available for booking.', 'fa-id-card-clip');
      });
    }

    if (aboutDiscoverBtn) {
      aboutDiscoverBtn.addEventListener('click', () => {
        showToast('DRIVEPRO Academy: Dual-control certified since 2014.', 'fa-shield-halved');
      });
    }

    if (ctaBookBtn) {
      ctaBookBtn.addEventListener('click', () => {
        openCourseDetailsModal('Car License Training');
      });
    }

    if (contactSupportBtn) {
      contactSupportBtn.addEventListener('click', () => {
        showToast('Support hotline: +1 (800) 555-3748 is available Mon-Sat.', 'fa-headset');
      });
    }

    // Intercept all Placeholder Links cleanly
    const placeholderLinks = document.querySelectorAll('.placeholder-link');
    placeholderLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageName = link.getAttribute('data-page-name') || 'Upcoming Page';
        showToast(`Notice: "${pageName}" is in development for future releases. Currently viewing Home 1.`, 'fa-road-circle-check');
        if (mobileDrawer.classList.contains('is-open')) {
          closeMobileDrawer();
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 11. INITIALIZATION
  // -------------------------------------------------------------------------
  function init() {
    initTheme();
    initDirection();
    setupEventListeners();
    updateCarouselPosition();
    startAutoSlide();
    handleHeaderScroll();
  }

  // Execute on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

