/**
 * DRIVEPRO – Premium Driving Academy & Modern License Training
 * PAGE 02: HOME 2 JAVASCRIPT (home2.js)
 * Clean, modular Vanilla JavaScript for Home 2
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. DATA & CONSTANTS
  // -------------------------------------------------------------------------
  const THEME_STORAGE_KEY = 'drivepro_theme';
  const DIR_STORAGE_KEY = 'drivepro_direction';

  const EXPERIENCE_DATA = {
    'First-Time Drivers': {
      title: 'First-Time Drivers Program',
      tag: 'Novice Foundation',
      icon: 'fa-compass',
      description: 'Built specifically for individuals sitting in the driver’s seat for the first time. We remove fear, instill muscle memory for clutch, brake and steering control, and build confident road routines in a zero-pressure environment.',
      highlights: [
        'Complete cockpit drill, seating posture & mirror calibration',
        'Starting, gentle stopping & smooth clutch biting control',
        'Steering accuracy & progressive lane centering',
        'Navigating quiet residential areas and basic T-junctions',
        'Pedestrian crossing rules & hazard anticipation basics'
      ],
      recommendation: 'Recommended: 20–25 training hours with dual-control vehicle.'
    },
    'Everyday Drivers': {
      title: 'Everyday Drivers Experience',
      tag: 'Intermediate Mastery',
      icon: 'fa-car-side',
      description: 'Tailored for drivers who know vehicle basics but want to conquer busy urban traffic, tight parking lots, complex roundabouts, and multi-lane metropolitan gridlocks.',
      highlights: [
        'Spiral roundabouts & multi-lane highway filter lanes',
        'Parallel parking, bay parking & reverse maneuvers',
        'Anticipating unpredictable city traffic & cycle lanes',
        'Independent navigation using sat-nav and road signs',
        'Stress mitigation & defensive gap selection'
      ],
      recommendation: 'Recommended: 15–20 hours of focused road practice.'
    },
    'Confident Road Drivers': {
      title: 'Confident Road Drivers Program',
      tag: 'Advanced Skillset',
      icon: 'fa-shield-halved',
      description: 'An intensive coaching module for full license holders or test-ready students. Focuses on adverse weather control, high-speed motorway merges, night driving, and sudden hazard avoidance.',
      highlights: [
        'Motorway speeds, lane discipline & slip-road overtaking',
        'Heavy rain, hydroplaning awareness & emergency stops',
        'Night visibility handling & managing oncoming headlight glare',
        'Advanced skid control theory & defensive vehicle positioning',
        'Eco-driving techniques for fuel economy and vehicle longevity'
      ],
      recommendation: 'Recommended: 10–12 hours of specialized training.'
    }
  };

  const INSTRUCTOR_DATA = {
    'David Sterling': {
      name: 'David Sterling',
      role: 'Senior Master Instructor',
      experience: '14 Years Experience',
      specialty: 'Official Test Route Specialist',
      bio: 'David is a former transport examiner with over 1,800 successful test passes to his credit. His calm demeanor and systematic coaching breakdown make complex maneuvers intuitive and stress-free.',
      passRate: '96.4% First-Time Pass Rate',
      vehicle: 'Dual-Control Hybrid Hatchback'
    },
    'Sarah Jenkins': {
      name: 'Sarah Jenkins',
      role: 'Advanced Driver Coach',
      experience: '11 Years Experience',
      specialty: 'Defensive Driving & Motorway Lead',
      bio: 'Sarah specializes in confidence restoration, nervous pupil coaching, and high-speed highway handling. She creates customized lesson pacing that empowers students to overcome driving anxiety.',
      passRate: '95.8% First-Time Pass Rate',
      vehicle: 'Dual-Control Euro NCAP 5★ Sedan'
    },
    'Marcus Bennett': {
      name: 'Marcus Bennett',
      role: 'Foundation & Confidence Coach',
      experience: '9 Years Experience',
      specialty: 'First-Time Novice Specialist',
      bio: 'Marcus has a passion for building great habits from scratch. Known for his patience, positivity, and interactive driving logs, he ensures beginner learners look forward to every single session.',
      passRate: '94.9% First-Time Pass Rate',
      vehicle: 'Modern Dual-Control Compact'
    }
  };

  const PLAN_DATA = {
    'Quick Start Plan': {
      title: 'Quick Start Learning Plan',
      badge: 'Foundation Course',
      overview: 'Ideal for complete novices looking for an encouraging, gentle entry into practical road driving with certified dual-control vehicles.',
      features: [
        '10 Hours of one-on-one driving tuition',
        'Cockpit mechanics, pedal sensitivity & steering arcs',
        'Residential roads & quiet junction introduction',
        'Digital progress log & student feedback report'
      ]
    },
    'Confident Driver Plan': {
      title: 'Confident Driver Learning Plan',
      badge: 'Recommended & Most Popular',
      overview: 'Our comprehensive flagship training roadmap that guides students through all test maneuvers, urban traffic, and examiner mock routes.',
      features: [
        '25 Hours of practical instruction',
        'All maneuvers: Parallel, bay parking & pulling up right',
        'Mock driving examination with official scorecard',
        'Test day car rental & pre-test warm-up hour included'
      ]
    },
    'Road Ready Plan': {
      title: 'Road Ready Learning Plan',
      badge: 'Complete Mastery',
      overview: 'Combines test passing preparation with advanced motorway, high-speed, and adverse weather defensive driving skills for lifelong confidence.',
      features: [
        '35 Hours comprehensive training',
        'Highway and dual carriageway mastery',
        'Adverse weather & night driving modules',
        'Guaranteed test re-sit coverage support'
      ]
    }
  };

  // -------------------------------------------------------------------------
  // 2. DOM ELEMENTS
  // -------------------------------------------------------------------------
  const htmlEl = document.documentElement;
  const header = document.getElementById('site-header');

  // Navigation
  const homeDropdownItem = document.getElementById('home-dropdown-item');
  const homeDropdownBtn = document.getElementById('home-dropdown-btn');

  // Mobile Drawer
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const mobileHomeBtn = document.getElementById('mobile-home-btn');
  const mobileHomeSubmenu = document.getElementById('mobile-home-submenu');

  // Theme & Direction Toggles
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const mobileThemeBtn = document.getElementById('mobile-theme-btn');
  const mobileThemeIcon = document.getElementById('mobile-theme-icon');

  const rtlToggleBtn = document.getElementById('rtl-toggle-btn');
  const rtlLabel = document.getElementById('rtl-label');
  const mobileRtlBtn = document.getElementById('mobile-rtl-btn');
  const mobileRtlLabel = document.getElementById('mobile-rtl-label');

  // Modals
  const loginModal = document.getElementById('login-modal');
  const headerLoginBtn = document.getElementById('header-login-btn');
  const mobileLoginBtn = document.getElementById('mobile-login-btn');
  const closeLoginModal = document.getElementById('close-login-modal');
  const studentLoginForm = document.getElementById('student-login-form');

  const detailsModal = document.getElementById('details-modal');
  const closeDetailsModal = document.getElementById('close-details-modal');
  const detailsModalTitle = document.getElementById('details-modal-title');
  const detailsModalBody = document.getElementById('details-modal-body');

  // Buttons
  const h2StartLearningBtn = document.getElementById('h2-start-learning-btn');
  const ctaBookLessonBtn = document.getElementById('cta-book-lesson-btn');
  const ctaContactTeamBtn = document.getElementById('cta-contact-team-btn');

  const toastContainer = document.getElementById('toast-container');

  // -------------------------------------------------------------------------
  // 3. THEME SYSTEM (SYNCED WITH HOME 1)
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
    showToast(`Switched text direction to ${nextDir.toUpperCase()}`, 'fa-right-left');
  }

  // -------------------------------------------------------------------------
  // 5. STICKY HEADER & SCROLL BEHAVIOR
  // -------------------------------------------------------------------------
  function handleHeaderScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // -------------------------------------------------------------------------
  // 6. DROPDOWN & MOBILE DRAWER NAVIGATION
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
  // 8. MODAL DIALOGS
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

  function openExperienceModal(planName) {
    const data = EXPERIENCE_DATA[planName];
    if (!data) return;

    detailsModalTitle.textContent = data.title;
    detailsModalBody.innerHTML = `
      <div style="margin-bottom: 18px;">
        <span class="badge badge-primary" style="margin-bottom: 12px; display: inline-flex;">
          <i class="fa-solid ${data.icon}"></i> ${data.tag}
        </span>
        <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6; margin-top: 8px;">
          ${data.description}
        </p>
      </div>

      <h4 style="font-size: 1rem; margin-bottom: 12px; color: var(--text-primary);">Curriculum Highlights:</h4>
      <ul style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 22px;">
        ${data.highlights.map(item => `
          <li style="display: flex; align-items: center; gap: 10px; font-size: 0.875rem; color: var(--text-primary);">
            <i class="fa-solid fa-circle-check text-primary" style="font-size: 0.8125rem;"></i>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>

      <div style="background-color: var(--bg-surface-alt); padding: 14px 18px; border-radius: var(--radius-md); margin-bottom: 24px; border: 1px solid var(--border); font-size: 0.875rem; color: var(--text-secondary);">
        <strong style="color: var(--text-primary);"><i class="fa-solid fa-lightbulb text-primary"></i> Course Structure:</strong>
        <p style="margin-top: 4px;">${data.recommendation}</p>
      </div>

      <button class="btn btn-primary btn-block" id="modal-confirm-action-btn">
        <i class="fa-solid fa-calendar-check"></i>
        <span>Book Initial Lesson in this Program</span>
      </button>
    `;

    openModal(detailsModal);

    const confirmBtn = document.getElementById('modal-confirm-action-btn');
    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => {
        closeModal(detailsModal);
        showToast(`Lesson request submitted for ${data.title}! We will contact you to schedule.`, 'fa-circle-check');
      });
    }
  }

  function openInstructorModal(instructorName) {
    const data = INSTRUCTOR_DATA[instructorName];
    if (!data) return;

    detailsModalTitle.textContent = `${data.name} – Profile`;
    detailsModalBody.innerHTML = `
      <div style="margin-bottom: 20px;">
        <span class="badge badge-primary" style="margin-bottom: 10px; display: inline-flex;">
          <i class="fa-solid fa-id-card-clip"></i> ${data.role} • ${data.experience}
        </span>
        <h4 style="font-size: 1.125rem; color: var(--text-primary); margin-top: 6px; margin-bottom: 8px;">
          ${data.specialty}
        </h4>
        <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6;">
          ${data.bio}
        </p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background-color: var(--bg-surface-alt); padding: 16px; border-radius: var(--radius-md); margin-bottom: 22px; border: 1px solid var(--border); font-size: 0.875rem;">
        <div>
          <strong style="color: var(--text-primary);"><i class="fa-solid fa-trophy text-primary"></i> Pass Record:</strong>
          <br><span style="color: var(--text-secondary);">${data.passRate}</span>
        </div>
        <div>
          <strong style="color: var(--text-primary);"><i class="fa-solid fa-car text-primary"></i> Training Vehicle:</strong>
          <br><span style="color: var(--text-secondary);">${data.vehicle}</span>
        </div>
      </div>

      <button class="btn btn-primary btn-block" id="modal-inst-book-btn">
        <i class="fa-solid fa-calendar-plus"></i>
        <span>Request Lessons with ${data.name}</span>
      </button>
    `;

    openModal(detailsModal);

    const instBookBtn = document.getElementById('modal-inst-book-btn');
    if (instBookBtn) {
      instBookBtn.addEventListener('click', () => {
        closeModal(detailsModal);
        showToast(`Request sent to schedule driving lessons with ${data.name}!`, 'fa-circle-check');
      });
    }
  }

  function openPlanModal(planKey) {
    const data = PLAN_DATA[planKey];
    if (!data) return;

    detailsModalTitle.textContent = data.title;
    detailsModalBody.innerHTML = `
      <div style="margin-bottom: 18px;">
        <span class="badge badge-primary" style="margin-bottom: 10px; display: inline-flex;">
          ${data.badge}
        </span>
        <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6; margin-top: 6px;">
          ${data.overview}
        </p>
      </div>

      <h4 style="font-size: 1rem; margin-bottom: 12px; color: var(--text-primary);">Plan Inclusions:</h4>
      <ul style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;">
        ${data.features.map(feat => `
          <li style="display: flex; align-items: center; gap: 10px; font-size: 0.875rem; color: var(--text-primary);">
            <i class="fa-solid fa-check text-primary" style="font-size: 0.875rem;"></i>
            <span>${feat}</span>
          </li>
        `).join('')}
      </ul>

      <button class="btn btn-primary btn-block" id="modal-plan-confirm-btn">
        <i class="fa-solid fa-calendar-check"></i>
        <span>Enroll in ${data.title}</span>
      </button>
    `;

    openModal(detailsModal);

    const planConfirmBtn = document.getElementById('modal-plan-confirm-btn');
    if (planConfirmBtn) {
      planConfirmBtn.addEventListener('click', () => {
        closeModal(detailsModal);
        showToast(`Enrollment confirmed for ${data.title}! Welcome to DRIVEPRO.`, 'fa-circle-check');
      });
    }
  }

  // -------------------------------------------------------------------------
  // 9. EVENT LISTENERS
  // -------------------------------------------------------------------------
  function setupEventListeners() {
    // Window scroll for sticky header elevation
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });

    // Theme toggles
    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', toggleTheme);

    // Direction toggles
    if (rtlToggleBtn) rtlToggleBtn.addEventListener('click', toggleDirection);
    if (mobileRtlBtn) mobileRtlBtn.addEventListener('click', toggleDirection);

    // Dropdown toggles
    if (homeDropdownBtn) homeDropdownBtn.addEventListener('click', toggleHomeDropdown);

    document.addEventListener('click', (e) => {
      if (homeDropdownItem && !homeDropdownItem.contains(e.target)) {
        closeHomeDropdown();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeHomeDropdown();
        closeModal(loginModal);
        closeModal(detailsModal);
        closeMobileDrawer();
      }
    });

    // Mobile drawer toggles
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

    // Login Form Submit Simulation
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

    // Details modal close
    if (closeDetailsModal) {
      closeDetailsModal.addEventListener('click', () => closeModal(detailsModal));
    }
    if (detailsModal) {
      detailsModal.addEventListener('click', (e) => {
        if (e.target === detailsModal) closeModal(detailsModal);
      });
    }

    // Experience Card Triggers
    const expTriggers = document.querySelectorAll('.exp-trigger-btn');
    expTriggers.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const planName = btn.getAttribute('data-plan');
        openExperienceModal(planName);
      });
    });

    // Instructor Profile Triggers
    const instructorBtns = document.querySelectorAll('.instructor-modal-btn');
    instructorBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const instructorName = btn.getAttribute('data-instructor');
        openInstructorModal(instructorName);
      });
    });

    // Learning Plan Triggers
    const planExploreBtns = document.querySelectorAll('.plan-explore-btn');
    planExploreBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const planKey = btn.getAttribute('data-plan');
        openPlanModal(planKey);
      });
    });

    // Hero & CTA buttons
    if (h2StartLearningBtn) {
      h2StartLearningBtn.addEventListener('click', () => {
        openPlanModal('Confident Driver Plan');
      });
    }

    if (ctaBookLessonBtn) {
      ctaBookLessonBtn.addEventListener('click', () => {
        openPlanModal('Quick Start Plan');
      });
    }

    if (ctaContactTeamBtn) {
      ctaContactTeamBtn.addEventListener('click', () => {
        showToast('Our training advisors are available at +1 (800) 555-3748 or admissions@drivepro-academy.com', 'fa-headset');
      });
    }

    // Intercept all Placeholder Links
    const placeholderLinks = document.querySelectorAll('.placeholder-link');
    placeholderLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageName = link.getAttribute('data-page-name') || 'Upcoming Page';
        showToast(`Notice: "${pageName}" is in development for future releases. Currently viewing Home 2.`, 'fa-road-circle-check');
        if (mobileDrawer.classList.contains('is-open')) {
          closeMobileDrawer();
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 10. 4-CARS VERTICAL SWIPE-UP SLIDER (HERO SECTION)
  // -------------------------------------------------------------------------
  function initCarsVerticalSlider() {
    const card = document.getElementById('cars-swipe-card');
    const track = document.getElementById('cars-swipe-track');
    const viewport = document.getElementById('cars-swipe-viewport');
    const counter = document.getElementById('cars-counter');
    const prevBtn = document.getElementById('prev-car-btn');
    const nextBtn = document.getElementById('next-car-btn');
    const dots = document.querySelectorAll('.car-dot');
    const slides = document.querySelectorAll('.car-swipe-slide');
    const carSelectBtns = document.querySelectorAll('.car-select-btn');

    if (!track || slides.length === 0) return;

    const totalCars = slides.length;
    let activeCarIndex = 0;
    let autoSwipeTimer = null;
    const AUTO_INTERVAL = 3400; // 3.4 seconds between vertical auto-swipes

    function updateSlider(index) {
      if (index >= totalCars) {
        activeCarIndex = 0;
      } else if (index < 0) {
        activeCarIndex = totalCars - 1;
      } else {
        activeCarIndex = index;
      }

      // Vertical translation calculation based on actual slide height
      const slideHeight = slides[0].offsetHeight || 330;
      track.style.transform = `translateY(-${activeCarIndex * slideHeight}px)`;

      // Update counter display: e.g. "01/04"
      if (counter) {
        const currentNum = String(activeCarIndex + 1).padStart(2, '0');
        const totalNum = String(totalCars).padStart(2, '0');
        counter.textContent = `${currentNum}/${totalNum}`;
      }

      // Update vertical dots
      dots.forEach((dot, idx) => {
        if (idx === activeCarIndex) {
          dot.classList.add('active-car-dot');
          dot.setAttribute('aria-selected', 'true');
        } else {
          dot.classList.remove('active-car-dot');
          dot.setAttribute('aria-selected', 'false');
        }
      });
    }

    function nextCar() {
      updateSlider(activeCarIndex + 1);
    }

    function prevCar() {
      updateSlider(activeCarIndex - 1);
    }

    function startAutoSwipe() {
      stopAutoSwipe();
      autoSwipeTimer = setInterval(nextCar, AUTO_INTERVAL);
    }

    function stopAutoSwipe() {
      if (autoSwipeTimer) {
        clearInterval(autoSwipeTimer);
        autoSwipeTimer = null;
      }
    }

    // Up / Down arrow buttons
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        nextCar();
        startAutoSwipe();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        prevCar();
        startAutoSwipe();
      });
    }

    // Dot indicators click
    dots.forEach((dot) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        const targetIndex = parseInt(dot.getAttribute('data-index'), 10);
        if (!isNaN(targetIndex)) {
          updateSlider(targetIndex);
          startAutoSwipe();
        }
      });
    });

    // Pause on mouse hover, resume on mouse leave
    if (card) {
      card.addEventListener('mouseenter', stopAutoSwipe);
      card.addEventListener('mouseleave', startAutoSwipe);
    }

    // Touch swipe gestures (swipe up / down on phones/tablets)
    let touchStartY = 0;
    let touchEndY = 0;

    if (viewport) {
      viewport.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].screenY;
        stopAutoSwipe();
      }, { passive: true });

      viewport.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].screenY;
        const diffY = touchStartY - touchEndY;
        if (diffY > 30) {
          // Swiped up -> next car
          nextCar();
        } else if (diffY < -30) {
          // Swiped down -> previous car
          prevCar();
        }
        startAutoSwipe();
      }, { passive: true });
    }

    // Book Lessons in this Car button handler
    carSelectBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const carName = btn.getAttribute('data-car') || 'Dual Control Fleet Vehicle';
        openPlanModal('Confident Driver Plan');
        showToast(`Selected vehicle: ${carName}. Complete your booking below!`, 'fa-car');
      });
    });

    // Handle viewport resize dynamically
    window.addEventListener('resize', () => {
      const slideHeight = slides[0].offsetHeight || 330;
      track.style.transform = `translateY(-${activeCarIndex * slideHeight}px)`;
    }, { passive: true });

    // Initial activation
    updateSlider(0);
    startAutoSwipe();
  }

  // -------------------------------------------------------------------------
  // 11. INITIALIZATION
  // -------------------------------------------------------------------------
  function init() {
    initTheme();
    initDirection();
    setupEventListeners();
    initCarsVerticalSlider();
    handleHeaderScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

