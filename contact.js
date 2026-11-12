/**
 * DRIVEPRO - Premium Driving School & License Training Website
 * Contact Us Page Interactive Script (contact.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  /* --------------------------------------------------------------------------
     1. STATE & CONSTANTS
     -------------------------------------------------------------------------- */
  const htmlEl = document.documentElement;
  const THEME_KEY = 'drivepro_theme';
  const DIR_KEY = 'drivepro_direction';

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
     7. DEPARTMENT CHANNEL CARDS -> PRE-FILL INQUIRY FORM
     -------------------------------------------------------------------------- */
  const contactFormSection = document.getElementById('contact-form-section');
  const contactTopicSelect = document.getElementById('contact-topic');
  const contactNameInput = document.getElementById('contact-name');

  document.querySelectorAll('.channel-action-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const topic = btn.dataset.topic;
      if (contactTopicSelect && topic) {
        Array.from(contactTopicSelect.options).forEach((opt) => {
          if (opt.value === topic) {
            contactTopicSelect.value = topic;
          }
        });
      }

      if (contactFormSection) {
        contactFormSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      setTimeout(() => {
        if (contactNameInput) contactNameInput.focus();
      }, 450);

      showToast(`Selected topic: ${topic}`, 'fa-solid fa-clipboard-check');
    });
  });

  /* --------------------------------------------------------------------------
     8. DRIVING SCHOOL & LICENSE INQUIRY FORM HANDLING
     -------------------------------------------------------------------------- */
  const drivingContactForm = document.getElementById('driving-contact-form');
  const successBanner = document.getElementById('contact-success-banner');
  const successBannerHeading = document.getElementById('success-banner-heading');
  const successBannerText = document.getElementById('success-banner-text');

  if (drivingContactForm) {
    drivingContactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('contact-name')?.value.trim();
      const email = document.getElementById('contact-email')?.value.trim();
      const phone = document.getElementById('contact-phone')?.value.trim();
      const topic = document.getElementById('contact-topic')?.value || 'Driving Course Inquiry';
      const transmission = document.getElementById('contact-transmission')?.value || 'Automatic';
      const message = document.getElementById('contact-message')?.value.trim();

      if (!fullName || !email || !phone || !message) {
        showToast('Please complete all required fields (*) before submitting.', 'fa-solid fa-triangle-exclamation');
        return;
      }

      if (successBanner) {
        if (successBannerHeading) {
          successBannerHeading.textContent = `Thank You, ${fullName}! Your Inquiry Is Confirmed.`;
        }
        if (successBannerText) {
          successBannerText.textContent = `Our ${topic} specialist (${transmission}) will reach out to ${phone} within 15 minutes.`;
        }
        successBanner.hidden = false;
        successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      showToast(
        `Inquiry sent! An admissions specialist will contact ${fullName} shortly.`,
        'fa-solid fa-paper-plane'
      );

      drivingContactForm.reset();
    });
  }

  /* --------------------------------------------------------------------------
     9. REGIONAL HUB & INSTANT PICKUP BOOKING MODAL
     -------------------------------------------------------------------------- */
  const bookingModal = document.getElementById('booking-modal');
  const closeBookingModalBtn = document.getElementById('close-booking-modal');
  const bookingModalBody = document.getElementById('booking-modal-body');

  function openBookingModal(defaultHub = 'Central Austin & Downtown Hub') {
    if (!bookingModal || !bookingModalBody) return;

    bookingModalBody.innerHTML = `
      <div class="modal-header">
        <div class="modal-icon-badge">
          <i class="fa-solid fa-calendar-check" aria-hidden="true"></i>
        </div>
        <span class="eyebrow-tag" style="margin-bottom:10px;">DOORSTEP &amp; HUB DISPATCH</span>
        <h3 id="booking-modal-title" class="modal-title">Book Your First Driving Lesson</h3>
        <p class="modal-subtitle">Reserve your 2-hour practical session with free doorstep or training hub pickup.</p>
      </div>
      <form class="modal-form" id="instant-booking-form">
        <div class="form-group">
          <label for="book-student-name">Student Full Name</label>
          <div class="input-wrapper">
            <i class="fa-regular fa-user input-icon" aria-hidden="true"></i>
            <input type="text" id="book-student-name" name="studentName" placeholder="Alex Morgan" required />
          </div>
        </div>
        <div class="form-group">
          <label for="book-student-phone">Mobile Phone Number</label>
          <div class="input-wrapper">
            <i class="fa-solid fa-phone input-icon" aria-hidden="true"></i>
            <input type="tel" id="book-student-phone" name="studentPhone" placeholder="+1 (555) 234-5678" required />
          </div>
        </div>
        <div class="form-group">
          <label for="book-hub-select">Preferred Pickup Zone / Training Hub</label>
          <div class="input-wrapper">
            <i class="fa-solid fa-location-dot input-icon" aria-hidden="true"></i>
            <select id="book-hub-select" name="hubName">
              <option value="Central Austin & Downtown Hub" ${defaultHub.includes('Central') ? 'selected' : ''}>Central Austin &amp; Downtown Hub (+ Doorstep Pickup)</option>
              <option value="North Metro & Domain Center" ${defaultHub.includes('North') ? 'selected' : ''}>North Metro &amp; Domain Center (+ Doorstep Pickup)</option>
              <option value="South Congress & Campus Hub" ${defaultHub.includes('South') ? 'selected' : ''}>South Congress &amp; Campus Hub (+ Doorstep Pickup)</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="book-course-select">Course or Service</label>
          <div class="input-wrapper">
            <i class="fa-solid fa-car-side input-icon" aria-hidden="true"></i>
            <select id="book-course-select" name="courseType">
              <option value="Full Car License Package ($549)">Full Car License Package ($549 — Most Popular)</option>
              <option value="Starter Permit & Basics ($299)">Starter Permit &amp; Basics ($299 — 6 Hours)</option>
              <option value="VIP Fast-Track Guarantee ($849)">VIP Fast-Track Guarantee ($849 — 20 Hours)</option>
              <option value="DMV Road Test Car Rental ($145)">DMV Road Test Car Rental + Warmup ($145)</option>
            </select>
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-block">
          <i class="fa-solid fa-check" aria-hidden="true"></i>
          <span>Confirm Lesson Pickup Request</span>
        </button>
      </form>
    `;

    bookingModal.classList.add('active');
    bookingModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const dynamicBookingForm = document.getElementById('instant-booking-form');
    if (dynamicBookingForm) {
      dynamicBookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const studentName = dynamicBookingForm.querySelector('[name="studentName"]')?.value || 'Student';
        const hubName = dynamicBookingForm.querySelector('[name="hubName"]')?.value || defaultHub;
        closeBookingModal();
        showToast(
          `Lesson request confirmed for ${studentName} via ${hubName}!`,
          'fa-solid fa-calendar-check'
        );
      });
    }
  }

  function closeBookingModal() {
    if (!bookingModal) return;
    bookingModal.classList.remove('active');
    bookingModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (closeBookingModalBtn) closeBookingModalBtn.addEventListener('click', closeBookingModal);
  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) closeBookingModal();
    });
  }

  // Bind Regional Branch Cards & Buttons
  const branchCards = document.querySelectorAll('.branch-card');
  branchCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.branch-book-btn')) return;
      branchCards.forEach((c) => c.classList.remove('active-branch'));
      card.classList.add('active-branch');
    });
  });

  document.querySelectorAll('.branch-book-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const branchName = btn.dataset.branchName || 'Central Austin & Downtown Hub';
      openBookingModal(branchName);
    });
  });

  const faqQuickBookBtn = document.getElementById('faq-quick-book-btn');
  const ctaBookBtn = document.getElementById('cta-book-btn');
  if (faqQuickBookBtn) faqQuickBookBtn.addEventListener('click', () => openBookingModal());
  if (ctaBookBtn) ctaBookBtn.addEventListener('click', () => openBookingModal());

  /* --------------------------------------------------------------------------
     10. INTERACTIVE FAQ ACCORDION
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

        faqItems.forEach((otherItem) => {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question');
          const otherAns = otherItem.querySelector('.faq-answer');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherAns) otherAns.style.maxHeight = null;
        });

        if (!isCurrentlyOpen) {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
          answerEl.style.maxHeight = `${answerEl.scrollHeight + 24}px`;
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     11. STUDENT & INSTRUCTOR LOGIN MODAL
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
      showToast('Signed in to DRIVEPRO Student Dispatch & Lesson Portal!', 'fa-solid fa-user-check');
    });
  }

  if (forgotPassLink) {
    forgotPassLink.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Password reset link sent to your registered student email.', 'fa-solid fa-envelope');
    });
  }

  /* --------------------------------------------------------------------------
     12. PLACEHOLDER LINKS & ESCAPE KEY HANDLER
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
      closeBookingModal();
    }
  });

  // Dynamic Footer Year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());
});

