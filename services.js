/**
 * DRIVEPRO – Premium Driving School & License Training Academy
 * Services & Courses Page JavaScript File (services.js)
 * Consistent with Home 1 (index.js) state, theme, RTL, modals, FAQs & toast notifications
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
        '2 Official test-style mock exams with score sheet'
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
    },
    'Intensive Fast-Track Course': {
      title: 'Intensive Fast-Track Course',
      duration: '25 Practical Hours (10–14 Days)',
      car: 'Dedicated Dual-Control Test Vehicle',
      level: 'Accelerated License Candidates',
      badge: 'Fast-Track Priority',
      overview: 'Engineered for learners who need to earn their full driving license quickly. Train 2 to 3 hours daily with a dedicated senior instructor and receive priority practical exam scheduling support.',
      modules: [
        'Daily 2-hour structured practical road sessions',
        'Rapid muscle-memory development for all test maneuvers',
        'Intensive local examination route immersion',
        'Full mock driving examination on Day 10',
        'Test-day vehicle hire & pre-test warm-up included'
      ],
      price: '$720 total (Priority Schedule)'
    },
    'Automatic License Training': {
      title: 'Automatic License Training',
      duration: '22 Practical Hours',
      car: 'Modern Dual-Control Automatic Hatchback',
      level: 'All Skill Levels (Automatic Only)',
      badge: 'Zero Clutch Stress',
      overview: 'Skip clutch biting points and stalling anxiety altogether. Our automatic license training lets you focus 100% on road positioning, hazard perception, and smooth urban navigation.',
      modules: [
        'Automatic gearbox modes, creep control & hill hold',
        'Smooth urban traffic flow & junction anticipation',
        '360° camera awareness & reverse bay/parallel parking',
        'Multi-lane roundabouts & dual-carriageway merging',
        'Official automatic practical test route mock exam'
      ],
      price: '$610 total'
    },
    'Mock Test & Refresher Pack': {
      title: 'Mock Test & Refresher Pack',
      duration: '10 Practical Hours',
      car: 'Manual or Automatic Dual-Control Car',
      level: 'Test-Ready Learners & Returning Drivers',
      badge: 'Exam Polish',
      overview: 'Perfect if your official practical test is weeks away or if you hold a license and want to rebuild confidence in busy city traffic and tight parking spaces.',
      modules: [
        '3 full 40-minute examiner-marked mock driving tests',
        'Targeted correction of minor & serious driving faults',
        'High-density parallel parking & bay parking drills',
        'Independent sat-nav & traffic sign following',
        'Includes official test-day car hire option'
      ],
      price: '$290 total'
    }
  };

  const TEAM_DATA = {
    'David Sterling': {
      name: 'David Sterling',
      role: 'Car License & Mock Exam Lead',
      experience: '14+ Years Experience',
      vehicle: 'Audi A3 Sportback S-Line (Dual-Control)',
      passRate: '98% First-Time Pass Rate',
      badge: 'Chief Examiner Certified',
      bio: 'As a former national practical driving test examiner, David founded DRIVEPRO in 2014 to help learners master official test routes, sat-nav sections, and examiner marking criteria with calm confidence.',
      specialties: [
        'Official practical examination marking standards',
        'Complex multi-lane spiral roundabouts & city junctions',
        'Mock driving test assessment & readiness scoring',
        'Manual & automatic dual-control coaching'
      ]
    },
    'Sarah Jenkins': {
      name: 'Sarah Jenkins',
      role: 'Advanced & Fast-Track Lead',
      experience: '11+ Years Experience',
      vehicle: 'BMW 2 Series Gran Coupé (Dual-Control)',
      passRate: '96% First-Time Pass Rate',
      badge: 'Defensive Road Specialist',
      bio: 'Sarah leads DRIVEPRO’s Intensive Fast-Track and Advanced Defensive courses. She specializes in helping learners master high-speed dual carriageways, adverse weather handling, and tight urban parking.',
      specialties: [
        'Accelerated daily Fast-Track license preparation',
        'High-speed highway merging, lane discipline & overtaking',
        'Precision parallel parking & reverse bay maneuvers',
        'Night-time glare & adverse weather skid prevention'
      ]
    },
    'Marcus Bennett': {
      name: 'Marcus Bennett',
      role: 'Beginner & Automatic Lead',
      experience: '9+ Years Experience',
      vehicle: 'Volkswagen Golf 8 R-Line (Dual-Control)',
      passRate: '95% First-Time Pass Rate',
      badge: 'Novice Anxiety Specialist',
      bio: 'Marcus is renowned for his calm, supportive coaching style designed specifically for nervous first-time learners and automatic transmission candidates.',
      specialties: [
        'Zero-anxiety beginner cockpit drills & pedal control',
        'Automatic & manual smooth speed modulation',
        'Step-by-step confidence building in live city traffic',
        'Pre-test nerves management & independent driving'
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

  const serviceModal = document.getElementById('service-modal');
  const closeServiceModal = document.getElementById('close-service-modal');
  const serviceModalBody = document.getElementById('service-modal-body');
  const serviceModalTitle = document.getElementById('service-modal-title');

  // Action Buttons
  const freeAssessmentBtn = document.getElementById('free-assessment-btn');
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
  // 8. MODALS LOGIC (COURSES, INSTRUCTORS & BOOKING)
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

    serviceModalTitle.innerHTML = `
      <i class="fa-solid fa-car-side text-primary" aria-hidden="true"></i>
      <span>${data.title}</span>
    `;

    serviceModalBody.innerHTML = `
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
        <button class="btn btn-primary btn-block" id="modal-course-enroll-btn">
          <i class="fa-solid fa-calendar-plus"></i>
          <span>Enroll In This Course</span>
        </button>
      </div>
    `;

    openModal(serviceModal);

    const enrollBtn = document.getElementById('modal-course-enroll-btn');
    if (enrollBtn) {
      enrollBtn.addEventListener('click', () => {
        closeModal(serviceModal);
        showToast(`Enrollment requested for ${data.title}! An instructor will contact you shortly.`, 'fa-circle-check');
      });
    }
  }

  function openTeamProfileModal(memberName) {
    const data = TEAM_DATA[memberName];
    if (!data) return;

    serviceModalTitle.innerHTML = `
      <i class="fa-solid fa-id-card-clip text-primary" aria-hidden="true"></i>
      <span>${data.name}</span>
    `;

    serviceModalBody.innerHTML = `
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

    openModal(serviceModal);

    const bookBtn = document.getElementById('modal-book-instructor-btn');
    if (bookBtn) {
      bookBtn.addEventListener('click', () => {
        closeModal(serviceModal);
        showToast(`Lesson request sent for ${data.name}! Our coordinator will confirm your slot.`, 'fa-circle-check');
      });
    }
  }

  function openBookingModal(defaultCourse = 'Car License Training (30 Hours)') {
    serviceModalTitle.innerHTML = `
      <i class="fa-solid fa-calendar-check text-primary" aria-hidden="true"></i>
      <span>Book Driving Lesson / Assessment</span>
    `;

    serviceModalBody.innerHTML = `
      <p class="modal-description">
        Schedule your practical driving lesson or 1-hour baseline skill assessment in a dual-control manual or automatic training car.
      </p>
      <form id="service-booking-form" class="modal-form">
        <div class="form-group">
          <label for="booking-name" class="form-label">Learner Full Name</label>
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
          <label for="booking-course" class="form-label">Selected Course / Service</label>
          <div class="input-with-icon">
            <i class="fa-solid fa-car-side input-icon" aria-hidden="true"></i>
            <input type="text" id="booking-course" class="form-input" value="${defaultCourse}" required />
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block">
          <i class="fa-solid fa-paper-plane" aria-hidden="true"></i>
          <span>Confirm Booking Request</span>
        </button>
      </form>
    `;

    openModal(serviceModal);

    const form = document.getElementById('service-booking-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const learnerName = document.getElementById('booking-name')?.value || 'Learner';
        closeModal(serviceModal);
        showToast(`Booking confirmed for ${learnerName}! Check your phone for instructor details.`, 'fa-circle-check');
      });
    }
  }

  // -------------------------------------------------------------------------
  // 9. FAQ ACCORDION LOGIC
  // -------------------------------------------------------------------------
  function setupFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item) => {
      const btn = item.querySelector('.faq-question');
      if (!btn) return;

      btn.addEventListener('click', () => {
        const isCurrentlyOpen = item.classList.contains('is-open');

        // Close all items first for clean single-open accordion behavior
        faqItems.forEach((otherItem) => {
          otherItem.classList.remove('is-open');
          const otherBtn = otherItem.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        });

        // Toggle clicked item
        if (!isCurrentlyOpen) {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
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
        closeModal(serviceModal);
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

    // Service Modal Close
    if (closeServiceModal) {
      closeServiceModal.addEventListener('click', () => closeModal(serviceModal));
    }
    if (serviceModal) {
      serviceModal.addEventListener('click', (e) => {
        if (e.target === serviceModal) closeModal(serviceModal);
      });
    }

    // Course View Buttons
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

    // Team Profile Buttons
    const teamProfileBtns = document.querySelectorAll('.team-profile-btn');
    teamProfileBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const memberName = btn.getAttribute('data-member');
        openTeamProfileModal(memberName);
      });
    });

    // Assessment & CTA Buttons
    if (freeAssessmentBtn) {
      freeAssessmentBtn.addEventListener('click', () => {
        openBookingModal('1-Hour Baseline Driving Assessment');
      });
    }

    if (ctaBookBtn) {
      ctaBookBtn.addEventListener('click', () => {
        openBookingModal('Car License Training (30 Hours)');
      });
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
        showToast(`Notice: "${pageName}" is in development for future releases. Currently viewing Services.`, 'fa-road-circle-check');
        if (mobileDrawer && mobileDrawer.classList.contains('is-open')) {
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
    setupFaqAccordion();
    setupEventListeners();
    handleHeaderScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

