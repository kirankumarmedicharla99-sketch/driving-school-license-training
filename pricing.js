/**
 * DRIVEPRO - Premium Driving School & License Training Website
 * Pricing & Packages Page Interactive Script (pricing.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  /* --------------------------------------------------------------------------
     1. STATE & CONSTANTS
     -------------------------------------------------------------------------- */
  const htmlEl = document.documentElement;
  const THEME_KEY = 'drivepro_theme';
  const DIR_KEY = 'drivepro_direction';

  let currentTransmission = 'auto'; // 'auto' | 'manual'

  const PACKAGE_DETAILS = {
    starter: {
      title: 'Beginner Permit & Basics Package',
      badge: 'STARTER PLAN • 6 HOURS',
      autoPrice: '$299',
      manualPrice: '$329',
      installmentAuto: '2 interest-free payments of $149.50',
      installmentManual: '2 interest-free payments of $164.50',
      summary:
        'Designed for newly permitted learners or returning drivers who want a structured, confidence-building foundation in modern dual-control training vehicles.',
      modules: [
        '3 × 2-Hour 1-on-1 Behind-the-Wheel Practical Sessions (6 Hours Total)',
        'Cockpit Drill, Blind-Spot Mirror Calibration & Smooth Braking Control',
        'Residential Intersections, Multi-Way Stops & Right-of-Way Rules',
        'Introductory Curbside Parallel & Reverse Bay Parking',
        'Complimentary Home, High School, Campus, or Office Pickup & Drop-Off',
        '24/7 Access to the DRIVEPRO Online DMV Theory & Hazard App'
      ]
    },
    complete: {
      title: 'Full Car License Package (Most Popular)',
      badge: 'COMPLETE LICENSE • 12 HOURS + ROAD TEST',
      autoPrice: '$549',
      manualPrice: '$599',
      installmentAuto: '3 monthly payments of $183.00 (0% APR)',
      installmentManual: '3 monthly payments of $199.66 (0% APR)',
      summary:
        'Our flagship all-inclusive car license program. Covers every practical maneuver, simulated mock exams, and includes our dual-control car for your official DMV road test.',
      modules: [
        '6 × 2-Hour Structured Behind-the-Wheel Sessions (12 Hours Total)',
        'Official DMV Road Test Car Rental + 1-Hour Pre-Exam Warmup Included',
        '2 Full-Length Simulated Mock Road Tests on Local Examiner Routes',
        'Precision Parallel Parking, 3-Point Turns & Hill-Start Mastery',
        '2-Hour Highway Merging, Lane-Change & Defensive Traffic Module',
        'Official Graduation Certificate for Up to 15% Auto Insurance Discount'
      ]
    },
    vip: {
      title: 'VIP Fast-Track License Guarantee',
      badge: 'VIP INTENSIVE • 20 HOURS + PASS GUARANTEE',
      autoPrice: '$849',
      manualPrice: '$899',
      installmentAuto: '3 monthly payments of $283.00 (0% APR)',
      installmentManual: '3 monthly payments of $299.66 (0% APR)',
      summary:
        'Engineered for learners who want maximum behind-the-wheel hours, priority evening/weekend scheduling, highway & night mastery, and our First-Time Pass Protection Guarantee.',
      modules: [
        '10 × 2-Hour Comprehensive Practical Driving Sessions (20 Hours Total)',
        'First-Attempt Pass Guarantee: 2 Free Remedial Coaching Hours if Needed',
        'Dedicated Master Instructor with Fast-Track 14-to-21 Day Completion Option',
        'Full 4-Hour Expressway, Night-Time Glare & Adverse Weather Module',
        'Unlimited Mock DMV Road Evaluations & Priority Test Concierge',
        'Official DMV Road Test Vehicle Escort + Same-Day Rescheduling Waiver'
      ]
    }
  };

  /* --------------------------------------------------------------------------
     2. TOAST NOTIFICATION SYSTEM
     -------------------------------------------------------------------------- */
  const toastContainer = document.getElementById('toast-container');

  function showToast(message, iconClass = 'fa-solid fa-circle-check') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <i class="${iconClass}" aria-hidden="true"></i>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      setTimeout(() => toast.remove(), 260);
    }, 3600);
  }

  /* --------------------------------------------------------------------------
     3. THEME (LIGHT / DARK) PERSISTENCE & TOGGLE
     -------------------------------------------------------------------------- */
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const mobileThemeBtn = document.getElementById('mobile-theme-btn');
  const themeIcon = document.getElementById('theme-icon');
  const mobileThemeIcon = document.getElementById('mobile-theme-icon');

  function applyTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);

    const iconClass = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    if (themeIcon) themeIcon.className = `${iconClass} theme-icon`;
    if (mobileThemeIcon) mobileThemeIcon.className = iconClass;
  }

  const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
  applyTheme(savedTheme);

  function handleThemeToggle() {
    const nextTheme = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', handleThemeToggle);
  if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', handleThemeToggle);

  /* --------------------------------------------------------------------------
     4. DIRECTION (LTR / RTL) PERSISTENCE & TOGGLE
     -------------------------------------------------------------------------- */
  const rtlToggleBtn = document.getElementById('rtl-toggle-btn');
  const mobileRtlBtn = document.getElementById('mobile-rtl-btn');
  const rtlLabel = document.getElementById('rtl-label');
  const mobileRtlLabel = document.getElementById('mobile-rtl-label');

  function applyDirection(dir) {
    htmlEl.setAttribute('dir', dir);
    localStorage.setItem(DIR_KEY, dir);

    const nextLabel = dir === 'rtl' ? 'LTR' : 'RTL';
    if (rtlLabel) rtlLabel.textContent = nextLabel;
    if (mobileRtlLabel) mobileRtlLabel.textContent = `${nextLabel} Mode`;
  }

  const savedDir = localStorage.getItem(DIR_KEY) || 'ltr';
  applyDirection(savedDir);

  function handleDirectionToggle() {
    const nextDir = htmlEl.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
    applyDirection(nextDir);
  }

  if (rtlToggleBtn) rtlToggleBtn.addEventListener('click', handleDirectionToggle);
  if (mobileRtlBtn) mobileRtlBtn.addEventListener('click', handleDirectionToggle);

  /* --------------------------------------------------------------------------
     5. STICKY HEADER & DESKTOP DROPDOWN
     -------------------------------------------------------------------------- */
  const siteHeader = document.getElementById('site-header');
  const homeDropdownItem = document.getElementById('home-dropdown-item');
  const homeDropdownBtn = document.getElementById('home-dropdown-btn');

  window.addEventListener('scroll', () => {
    if (!siteHeader) return;
    if (window.scrollY > 20) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  if (homeDropdownBtn && homeDropdownItem) {
    homeDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = homeDropdownItem.classList.toggle('open');
      homeDropdownBtn.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (e) => {
      if (!homeDropdownItem.contains(e.target)) {
        homeDropdownItem.classList.remove('open');
        homeDropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* --------------------------------------------------------------------------
     6. MOBILE DRAWER NAVIGATION
     -------------------------------------------------------------------------- */
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const mobileHomeBtn = document.getElementById('mobile-home-btn');
  const mobileHomeSubmenu = document.getElementById('mobile-home-submenu');

  function openMobileDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (drawerBackdrop) drawerBackdrop.classList.add('active');
    if (mobileMenuToggle) {
      mobileMenuToggle.classList.add('active');
      mobileMenuToggle.setAttribute('aria-expanded', 'true');
    }
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
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (drawerBackdrop) drawerBackdrop.classList.remove('active');
    if (mobileMenuToggle) {
      mobileMenuToggle.classList.remove('active');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
    }
    document.documentElement.classList.remove('drawer-scroll-lock');
    document.body.classList.remove('drawer-scroll-lock');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        closeMobileDrawer();
      } else {
        openMobileDrawer();
      }
    });
  }

  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMobileDrawer);
  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeMobileDrawer);
    drawerBackdrop.addEventListener('wheel', (e) => e.preventDefault(), { passive: false });
    drawerBackdrop.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
  }

  if (mobileHomeBtn && mobileHomeSubmenu) {
    mobileHomeBtn.addEventListener('click', () => {
      const isOpen = mobileHomeSubmenu.classList.toggle('open');
      mobileHomeBtn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* --------------------------------------------------------------------------
     7. TRANSMISSION PRICING SWITCHER (AUTOMATIC vs MANUAL)
     -------------------------------------------------------------------------- */
  const btnTransAuto = document.getElementById('btn-trans-auto');
  const btnTransManual = document.getElementById('btn-trans-manual');
  const priceAmounts = document.querySelectorAll('.price-amount');
  const priceSubtexts = document.querySelectorAll('.price-subtext');
  const tablePrices = document.querySelectorAll('.th-price');

  function setTransmissionMode(mode) {
    currentTransmission = mode;
    const isManual = mode === 'manual';

    if (btnTransAuto && btnTransManual) {
      btnTransAuto.classList.toggle('active', !isManual);
      btnTransAuto.setAttribute('aria-pressed', String(!isManual));
      btnTransManual.classList.toggle('active', isManual);
      btnTransManual.setAttribute('aria-pressed', String(isManual));
    }

    priceAmounts.forEach((el) => {
      const targetVal = isManual ? el.dataset.manualPrice : el.dataset.autoPrice;
      if (targetVal) el.textContent = targetVal;
    });

    priceSubtexts.forEach((el) => {
      const targetSub = isManual ? el.dataset.manualSub : el.dataset.autoSub;
      if (targetSub) el.textContent = targetSub;
    });

    tablePrices.forEach((el) => {
      const targetText = isManual ? el.dataset.manualText : el.dataset.autoText;
      if (targetText) el.textContent = targetText;
    });

    showToast(
      `Showing ${isManual ? 'Manual (Stick-Shift)' : 'Automatic Transmission'} package rates`,
      'fa-solid fa-car-side'
    );
  }

  if (btnTransAuto) {
    btnTransAuto.addEventListener('click', () => {
      if (currentTransmission !== 'auto') setTransmissionMode('auto');
    });
  }

  if (btnTransManual) {
    btnTransManual.addEventListener('click', () => {
      if (currentTransmission !== 'manual') setTransmissionMode('manual');
    });
  }

  /* --------------------------------------------------------------------------
     8. PACKAGE ENROLLMENT, SYLLABUS & CUSTOM QUOTE MODAL
     -------------------------------------------------------------------------- */
  const pricingModal = document.getElementById('pricing-modal');
  const closePricingModalBtn = document.getElementById('close-pricing-modal');
  const pricingModalBody = document.getElementById('pricing-modal-body');

  function openPricingModal(htmlContent) {
    if (!pricingModal || !pricingModalBody) return;
    pricingModalBody.innerHTML = htmlContent;
    pricingModal.classList.add('active');
    pricingModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const dynamicForm = pricingModalBody.querySelector('form');
    if (dynamicForm) {
      dynamicForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const studentName = dynamicForm.querySelector('[name="studentName"]')?.value || 'Learner';
        const selectedItem = dynamicForm.querySelector('[name="selectedPlan"]')?.value || 'Driving Package';
        closePricingModal();
        showToast(
          `Thank you, ${studentName}! Your enrollment request for ${selectedItem} has been received.`,
          'fa-solid fa-calendar-check'
        );
      });
    }
  }

  function closePricingModal() {
    if (!pricingModal) return;
    pricingModal.classList.remove('active');
    pricingModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (closePricingModalBtn) closePricingModalBtn.addEventListener('click', closePricingModal);
  if (pricingModal) {
    pricingModal.addEventListener('click', (e) => {
      if (e.target === pricingModal) closePricingModal();
    });
  }

  function renderPlanEnrollmentModal(planKey, showSyllabusFirst = false) {
    const plan = PACKAGE_DETAILS[planKey] || PACKAGE_DETAILS.complete;
    const isManual = currentTransmission === 'manual';
    const activePrice = isManual ? plan.manualPrice : plan.autoPrice;
    const activeInstallment = isManual ? plan.installmentManual : plan.installmentAuto;
    const transLabel = isManual ? 'Manual (Stick-Shift)' : 'Automatic Transmission';

    const modulesHtml = plan.modules
      .map((item) => `<li><i class="fa-solid fa-circle-check" aria-hidden="true"></i><span>${item}</span></li>`)
      .join('');

    openPricingModal(`
      <div class="modal-header">
        <div class="modal-icon-badge">
          <i class="fa-solid fa-id-card-clip" aria-hidden="true"></i>
        </div>
        <span class="eyebrow-tag" style="margin-bottom:10px;">${plan.badge}</span>
        <h3 id="pricing-modal-title" class="modal-title">${plan.title}</h3>
        <p class="modal-subtitle">${activePrice} (${transLabel}) • ${activeInstallment}</p>
      </div>

      ${
        showSyllabusFirst
          ? `
        <div class="modal-syllabus-box">
          <h4>Included Curriculum &amp; Tuition Benefits</h4>
          <ul class="modal-syllabus-list">${modulesHtml}</ul>
        </div>
      `
          : ''
      }

      <form class="modal-form">
        <input type="hidden" name="selectedPlan" value="${plan.title} (${activePrice} - ${transLabel})" />
        <div class="form-group">
          <label for="enroll-name">Student Full Name</label>
          <div class="input-wrapper">
            <i class="fa-regular fa-user input-icon" aria-hidden="true"></i>
            <input type="text" id="enroll-name" name="studentName" placeholder="Alex Morgan" required />
          </div>
        </div>
        <div class="form-group">
          <label for="enroll-phone">Phone Number (For Pickup Coordination)</label>
          <div class="input-wrapper">
            <i class="fa-solid fa-phone input-icon" aria-hidden="true"></i>
            <input type="tel" id="enroll-phone" name="studentPhone" placeholder="+1 (555) 234-5678" required />
          </div>
        </div>
        <div class="form-group">
          <label for="enroll-payment">Preferred Payment Option</label>
          <div class="input-wrapper">
            <i class="fa-regular fa-credit-card input-icon" aria-hidden="true"></i>
            <select id="enroll-payment" name="paymentOption">
              <option value="full">Pay in Full (${activePrice}) — Instant Booking</option>
              <option value="installments">0% APR Split Payment Plan (${activeInstallment})</option>
            </select>
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block">
          <i class="fa-solid fa-calendar-check" aria-hidden="true"></i>
          <span>Confirm Package &amp; Schedule First Lesson</span>
        </button>
      </form>
    `);
  }

  // Bind "Enroll in Plan" buttons
  document.querySelectorAll('.select-plan-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const planKey = (btn.dataset.plan || 'complete').trim();
      renderPlanEnrollmentModal(planKey, false);
    });
  });

  // Bind "View Full Syllabus & Payment Breakdown" buttons
  document.querySelectorAll('.plan-details-link').forEach((btn) => {
    btn.addEventListener('click', () => {
      const planKey = (btn.dataset.planDetail || 'complete').trim();
      renderPlanEnrollmentModal(planKey, true);
    });
  });

  // Bind Add-On Booking buttons
  document.querySelectorAll('.addon-book-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const addonName = btn.dataset.addon || 'Single Driving Lesson';
      openPricingModal(`
        <div class="modal-header">
          <div class="modal-icon-badge">
            <i class="fa-solid fa-car-side" aria-hidden="true"></i>
          </div>
          <span class="eyebrow-tag" style="margin-bottom:10px;">ADD-ON SERVICE BOOKING</span>
          <h3 id="pricing-modal-title" class="modal-title">${addonName}</h3>
          <p class="modal-subtitle">Includes dual-control training car, insurance, and free doorstep pickup.</p>
        </div>
        <form class="modal-form">
          <input type="hidden" name="selectedPlan" value="${addonName}" />
          <div class="form-group">
            <label for="addon-student-name">Student Full Name</label>
            <div class="input-wrapper">
              <i class="fa-regular fa-user input-icon" aria-hidden="true"></i>
              <input type="text" id="addon-student-name" name="studentName" placeholder="Jordan Taylor" required />
            </div>
          </div>
          <div class="form-group">
            <label for="addon-phone">Mobile Phone Number</label>
            <div class="input-wrapper">
              <i class="fa-solid fa-phone input-icon" aria-hidden="true"></i>
              <input type="tel" id="addon-phone" name="studentPhone" placeholder="+1 (555) 876-5432" required />
            </div>
          </div>
          <div class="form-group">
            <label for="addon-transmission">Vehicle Transmission</label>
            <div class="input-wrapper">
              <i class="fa-solid fa-gears input-icon" aria-hidden="true"></i>
              <select id="addon-transmission" name="transmission">
                <option value="Automatic">Automatic Transmission Vehicle</option>
                <option value="Manual">Manual (Stick-Shift) Vehicle</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-block">
            <i class="fa-solid fa-check" aria-hidden="true"></i>
            <span>Reserve Add-On Session</span>
          </button>
        </form>
      `);
    });
  });

  // Bind Custom Quote & CTA Book Buttons
  const customQuoteTriggers = [
    document.getElementById('about-custom-quote-btn'),
    document.getElementById('faq-ask-btn'),
    document.getElementById('cta-book-btn')
  ];

  customQuoteTriggers.forEach((btn) => {
    if (!btn) return;
    btn.addEventListener('click', () => {
      renderPlanEnrollmentModal('complete', false);
    });
  });

  /* --------------------------------------------------------------------------
     9. INTERACTIVE FAQ ACCORDION
     -------------------------------------------------------------------------- */
  const faqAccordion = document.getElementById('faq-accordion');
  if (faqAccordion) {
    const faqItems = faqAccordion.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
      const questionBtn = item.querySelector('.faq-question');
      const answerEl = item.querySelector('.faq-answer');

      if (!questionBtn || !answerEl) return;

      questionBtn.addEventListener('click', () => {
        const isCurrentlyOpen = item.classList.contains('active');

        // Close all other items
        faqItems.forEach((otherItem) => {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question');
          const otherAns = otherItem.querySelector('.faq-answer');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherAns) otherAns.style.maxHeight = null;
        });

        // Toggle clicked item
        if (!isCurrentlyOpen) {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
          answerEl.style.maxHeight = `${answerEl.scrollHeight + 24}px`;
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     10. STUDENT & INSTRUCTOR LOGIN MODAL
     -------------------------------------------------------------------------- */
  const loginModal = document.getElementById('login-modal');
  const headerLoginBtn = document.getElementById('header-login-btn');
  const mobileLoginBtn = document.getElementById('mobile-login-btn');
  const closeLoginModalBtn = document.getElementById('close-login-modal');
  const loginForm = document.getElementById('login-form');
  const forgotPassLink = document.getElementById('forgot-pass-link');

  function openLoginModal() {
    closeMobileDrawer();
    if (!loginModal) return;
    loginModal.classList.add('active');
    loginModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLoginModal() {
    if (!loginModal) return;
    loginModal.classList.remove('active');
    loginModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (headerLoginBtn && headerLoginBtn.tagName !== 'A') headerLoginBtn.addEventListener('click', openLoginModal);
  if (mobileLoginBtn && mobileLoginBtn.tagName !== 'A') mobileLoginBtn.addEventListener('click', openLoginModal);
  if (closeLoginModalBtn) closeLoginModalBtn.addEventListener('click', closeLoginModal);

  if (loginModal) {
    loginModal.addEventListener('click', (e) => {
      if (e.target === loginModal) closeLoginModal();
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeLoginModal();
      showToast('Signed in to DRIVEPRO Student Billing & Lesson Portal!', 'fa-solid fa-user-check');
    });
  }

  if (forgotPassLink) {
    forgotPassLink.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Password reset link sent to your registered student email.', 'fa-solid fa-envelope');
    });
  }

  /* --------------------------------------------------------------------------
     11. PLACEHOLDER LINKS & ESCAPE KEY HANDLER
     -------------------------------------------------------------------------- */
  document.querySelectorAll('.placeholder-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageName = link.dataset.pageName || 'Requested';
      closeMobileDrawer();
      showToast(`${pageName} page will be linked soon!`, 'fa-solid fa-circle-info');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileDrawer();
      closeLoginModal();
      closePricingModal();
    }
  });

  // Dynamic Footer Year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());
});

