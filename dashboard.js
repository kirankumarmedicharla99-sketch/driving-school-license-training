/**
 * DRIVEPRO - Premium Driving School & License Training Website
 * Student Portal Dashboard Interactive Script (dashboard.js)
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
  const themeIcon = document.getElementById('theme-icon');

  function applyTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);

    if (themeIcon) {
      themeIcon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
  }

  const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const nextTheme = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      showToast(
        `Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} Mode`,
        nextTheme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'
      );
    });
  }

  /* --------------------------------------------------------------------------
     4. DIRECTION (LTR / RTL) PERSISTENCE & TOGGLE
     -------------------------------------------------------------------------- */
  const rtlToggleBtn = document.getElementById('rtl-toggle-btn');
  const rtlLabel = document.getElementById('rtl-label');

  function applyDirection(dir) {
    htmlEl.setAttribute('dir', dir);
    localStorage.setItem(DIR_KEY, dir);
    if (rtlLabel) rtlLabel.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
  }

  const savedDir = localStorage.getItem(DIR_KEY) || 'ltr';
  applyDirection(savedDir);

  if (rtlToggleBtn) {
    rtlToggleBtn.addEventListener('click', () => {
      const nextDir = htmlEl.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
      applyDirection(nextDir);
      showToast(`Dashboard layout direction set to ${nextDir.toUpperCase()}`, 'fa-solid fa-right-left');
    });
  }

  /* --------------------------------------------------------------------------
     5. MOBILE / TABLET SIDEBAR DRAWER TOGGLE (360px - 1024px)
     -------------------------------------------------------------------------- */
  const sidebar = document.getElementById('dashboard-sidebar');
  const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
  const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
  const sidebarBackdrop = document.getElementById('sidebar-backdrop');

  function openSidebar() {
    if (!sidebar) return;
    sidebar.classList.add('open');
    if (sidebarBackdrop) sidebarBackdrop.classList.add('active');
    if (sidebarToggleBtn) sidebarToggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeSidebar() {
    if (!sidebar) return;
    sidebar.classList.remove('open');
    if (sidebarBackdrop) sidebarBackdrop.classList.remove('active');
    if (sidebarToggleBtn) sidebarToggleBtn.setAttribute('aria-expanded', 'false');
  }

  if (sidebarToggleBtn) sidebarToggleBtn.addEventListener('click', openSidebar);
  if (sidebarCloseBtn) sidebarCloseBtn.addEventListener('click', closeSidebar);
  if (sidebarBackdrop) sidebarBackdrop.addEventListener('click', closeSidebar);

  /* --------------------------------------------------------------------------
     6. 5 SIDEBAR NAVIGATION LINKS -> SWITCH TAB PANELS
     -------------------------------------------------------------------------- */
  const navLinks = document.querySelectorAll('.sidebar-nav-link');
  const panels = document.querySelectorAll('.dashboard-panel');
  const dashboardContent = document.getElementById('dashboard-content');

  function activateTab(tabKey) {
    navLinks.forEach((btn) => {
      const isMatch = btn.dataset.tab === tabKey;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', String(isMatch));
    });

    panels.forEach((panel) => {
      const isMatch = panel.id === `panel-${tabKey}`;
      panel.classList.toggle('active', isMatch);
      panel.hidden = !isMatch;
    });

    if (dashboardContent) {
      dashboardContent.scrollTo({ top: 0, behavior: 'smooth' });
    }

    closeSidebar();
    closeAllDropdowns();
  }

  navLinks.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tabKey = btn.dataset.tab;
      if (tabKey) activateTab(tabKey);
    });
  });

  // Quick tab switch buttons inside banners/dropdowns
  document.querySelectorAll('[data-switch-tab]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const targetTab = trigger.dataset.switchTab;
      if (targetTab) activateTab(targetTab);
    });
  });

  /* --------------------------------------------------------------------------
     7. TOPBAR DROPDOWNS: NOTIFICATIONS & PROFILE MENU
     -------------------------------------------------------------------------- */
  const notificationBtn = document.getElementById('notification-btn');
  const notifDropdown = document.getElementById('notif-dropdown');
  const notifBadge = document.getElementById('notif-badge');
  const markAllReadBtn = document.getElementById('mark-all-read-btn');

  const profileTriggerBtn = document.getElementById('profile-trigger-btn');
  const profileDropdown = document.getElementById('profile-dropdown');

  function closeAllDropdowns() {
    if (notifDropdown) notifDropdown.classList.remove('open');
    if (notificationBtn) notificationBtn.setAttribute('aria-expanded', 'false');
    if (profileDropdown) profileDropdown.classList.remove('open');
    if (profileTriggerBtn) profileTriggerBtn.setAttribute('aria-expanded', 'false');
  }

  if (notificationBtn && notifDropdown) {
    notificationBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = !notifDropdown.classList.contains('open');
      closeAllDropdowns();
      if (willOpen) {
        notifDropdown.classList.add('open');
        notificationBtn.setAttribute('aria-expanded', 'true');
      }
    });
  }

  if (markAllReadBtn) {
    markAllReadBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      document.querySelectorAll('.notif-item.unread').forEach((item) => {
        item.classList.remove('unread');
      });
      if (notifBadge) notifBadge.style.display = 'none';
      showToast('All portal notifications marked as read.', 'fa-solid fa-check-double');
    });
  }

  if (profileTriggerBtn && profileDropdown) {
    profileTriggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = !profileDropdown.classList.contains('open');
      closeAllDropdowns();
      if (willOpen) {
        profileDropdown.classList.add('open');
        profileTriggerBtn.setAttribute('aria-expanded', 'true');
      }
    });
  }

  document.addEventListener('click', (e) => {
    if (
      !e.target.closest('#notification-dropdown-wrapper') &&
      !e.target.closest('#profile-dropdown-wrapper')
    ) {
      closeAllDropdowns();
    }
  });

  /* --------------------------------------------------------------------------
     8. LOGOUT FUNCTIONALITY (SIDEBAR & PROFILE MENU)
     -------------------------------------------------------------------------- */
  const sidebarLogoutBtn = document.getElementById('sidebar-logout-btn');
  const profileLogoutBtn = document.getElementById('profile-logout-btn');

  function handleLogout() {
    closeAllDropdowns();
    showToast('Signing out of Student License Portal... Redirecting to Home.', 'fa-solid fa-right-from-bracket');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1100);
  }

  if (sidebarLogoutBtn) sidebarLogoutBtn.addEventListener('click', handleLogout);
  if (profileLogoutBtn) profileLogoutBtn.addEventListener('click', handleLogout);

  /* --------------------------------------------------------------------------
     9. BOOK NEW LESSON SLOT FORM HANDLING
     -------------------------------------------------------------------------- */
  const slotForm = document.getElementById('dashboard-slot-form');
  const scheduledSlotsList = document.getElementById('scheduled-slots-list');

  if (slotForm && scheduledSlotsList) {
    slotForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const rawDate = document.getElementById('slot-date')?.value || '2026-11-16';
      const slotTime = document.getElementById('slot-time')?.value || '02:00 PM – 04:00 PM';
      const slotModule = document.getElementById('slot-module')?.value || 'Official DMV Test Route Simulation';
      const slotInstructor = document.getElementById('slot-instructor')?.value || 'Marcus Vance';
      const slotPickup = document.getElementById('slot-pickup')?.value || '740 Congress Ave';

      const dateObj = new Date(`${rawDate}T12:00:00`);
      const monthStr = dateObj.toLocaleString('en-US', { month: 'short' }).toUpperCase();
      const dayStr = String(dateObj.getDate()).padStart(2, '0');

      const newSlotEl = document.createElement('div');
      newSlotEl.className = 'slot-item upcoming-slot';
      newSlotEl.innerHTML = `
        <div class="slot-date-badge">
          <span class="slot-month">${monthStr}</span>
          <strong class="slot-day">${dayStr}</strong>
        </div>
        <div class="slot-info">
          <span class="slot-status-tag upcoming">Newly Scheduled Pickup</span>
          <h4>${slotModule}</h4>
          <p>${slotTime} &bull; Instructor: ${slotInstructor} &bull; Pickup: ${slotPickup}</p>
        </div>
        <button type="button" class="btn btn-secondary btn-sm cancel-slot-btn">Reschedule</button>
      `;

      scheduledSlotsList.prepend(newSlotEl);
      bindRescheduleButtons();

      showToast(
        `Booked 2-Hr slot on ${monthStr} ${dayStr} (${slotTime})!`,
        'fa-solid fa-calendar-check'
      );
    });
  }

  function bindRescheduleButtons() {
    document.querySelectorAll('.cancel-slot-btn').forEach((btn) => {
      btn.onclick = () => {
        showToast('Reschedule request opened — select a new date in the form.', 'fa-solid fa-clock-rotate-left');
        const dateInput = document.getElementById('slot-date');
        if (dateInput) dateInput.focus();
      };
    });
  }
  bindRescheduleButtons();

  /* --------------------------------------------------------------------------
     10. INTERACTIVE MODALS (PROFILE, INSTRUCTOR MESSAGE, PAYMENT, TEST DOCS)
     -------------------------------------------------------------------------- */
  const dashboardModal = document.getElementById('dashboard-modal');
  const closeDashboardModalBtn = document.getElementById('close-dashboard-modal');
  const dashboardModalBody = document.getElementById('dashboard-modal-body');

  function openDashboardModal(htmlContent) {
    if (!dashboardModal || !dashboardModalBody) return;
    closeAllDropdowns();
    dashboardModalBody.innerHTML = htmlContent;
    dashboardModal.classList.add('active');
    dashboardModal.setAttribute('aria-hidden', 'false');
  }

  function closeDashboardModal() {
    if (!dashboardModal) return;
    dashboardModal.classList.remove('active');
    dashboardModal.setAttribute('aria-hidden', 'true');
  }

  if (closeDashboardModalBtn) closeDashboardModalBtn.addEventListener('click', closeDashboardModal);
  if (dashboardModal) {
    dashboardModal.addEventListener('click', (e) => {
      if (e.target === dashboardModal) closeDashboardModal();
    });
  }

  // Learner Profile Modal
  const openProfileModalBtn = document.getElementById('open-profile-modal-btn');
  if (openProfileModalBtn) {
    openProfileModalBtn.addEventListener('click', () => {
      openDashboardModal(`
        <h3 id="dashboard-modal-title" style="font-size:1.35rem; margin-bottom:6px;">Learner Profile &amp; Permit Details</h3>
        <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:18px;">Verified DMV Student Record #DP-2026-849</p>
        <div style="display:flex; flex-direction:column; gap:10px; font-size:0.88rem; margin-bottom:22px; background:var(--bg-surface-alt); padding:16px; border-radius:12px;">
          <div><strong>Full Name:</strong> Alex Morgan</div>
          <div><strong>Learner Permit ID:</strong> #TX-90482 (Valid thru 2028)</div>
          <div><strong>Enrolled Package:</strong> Full Car License Package (12 Hrs + DMV Car)</div>
          <div><strong>Transmission Track:</strong> Automatic Transmission</div>
          <div><strong>Doorstep Pickup:</strong> 740 Congress Ave, Apt 4B, Austin, TX</div>
        </div>
        <button type="button" class="btn btn-primary btn-block" id="modal-ok-btn">Done</button>
      `);
      document.getElementById('modal-ok-btn')?.addEventListener('click', closeDashboardModal);
    });
  }

  // Message Instructor Modal
  const messageInstructorBtn = document.getElementById('message-instructor-btn');
  if (messageInstructorBtn) {
    messageInstructorBtn.addEventListener('click', () => {
      openDashboardModal(`
        <h3 id="dashboard-modal-title" style="font-size:1.35rem; margin-bottom:6px;">Message Instructor Marcus Vance</h3>
        <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:16px;">Send a pickup note or question about your upcoming Thursday session.</p>
        <form id="instructor-msg-form" class="slot-booking-form">
          <div class="form-group">
            <label for="inst-msg">Your Message</label>
            <input type="text" id="inst-msg" placeholder="e.g. Please call when arriving at the front gate..." required />
          </div>
          <button type="submit" class="btn btn-primary btn-block">Send Direct Message</button>
        </form>
      `);
      document.getElementById('instructor-msg-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        closeDashboardModal();
        showToast('Message delivered to Instructor Marcus Vance!', 'fa-solid fa-paper-plane');
      });
    });
  }

  // Pay Final Installment ($183.00)
  const payInstallmentBtn = document.getElementById('pay-installment-btn');
  const inlinePayBtn = document.getElementById('inline-pay-btn');

  function handlePayFinalInstallment() {
    openDashboardModal(`
      <h3 id="dashboard-modal-title" style="font-size:1.35rem; margin-bottom:6px;">Pay Final Tuition Installment</h3>
      <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:18px;">Complete Car License Package — Installment 3 of 3 ($183.00 at 0% APR)</p>
      <form id="pay-modal-form" class="slot-booking-form">
        <div class="form-group">
          <label>Saved Payment Method</label>
          <input type="text" value="Visa Ending in •••• 4821 (Alex Morgan)" readonly />
        </div>
        <button type="submit" class="btn btn-primary btn-block">Authorize $183.00 Payment</button>
      </form>
    `);

    document.getElementById('pay-modal-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      closeDashboardModal();

      const paidDisplay = document.getElementById('paid-amount-display');
      const remainingDisplay = document.getElementById('remaining-balance-display');
      const balanceNote = document.getElementById('balance-due-note');
      const pendingBadge = document.getElementById('pending-status-badge');

      if (paidDisplay) paidDisplay.textContent = '$549.00';
      if (remainingDisplay) remainingDisplay.textContent = '$0.00';
      if (balanceNote) balanceNote.textContent = 'Tuition 100% Paid in Full • Ready for Graduation';
      if (pendingBadge) {
        pendingBadge.className = 'table-badge-pass';
        pendingBadge.textContent = 'Paid (Visa •••• 4821)';
      }
      if (inlinePayBtn) {
        inlinePayBtn.innerHTML = '<i class="fa-solid fa-download" aria-hidden="true"></i> PDF';
      }
      if (payInstallmentBtn) {
        payInstallmentBtn.innerHTML = '<i class="fa-solid fa-circle-check" aria-hidden="true"></i> <span>Tuition Paid in Full ($0 Balance)</span>';
      }

      showToast('Payment of $183.00 confirmed! Your tuition balance is now $0.00.', 'fa-solid fa-circle-check');
    });
  }

  if (payInstallmentBtn) payInstallmentBtn.addEventListener('click', handlePayFinalInstallment);
  if (inlinePayBtn) inlinePayBtn.addEventListener('click', handlePayFinalInstallment);

  // Download Buttons (Logbook & Receipts)
  const downloadLogbookBtn = document.getElementById('download-logbook-btn');
  if (downloadLogbookBtn) {
    downloadLogbookBtn.addEventListener('click', () => {
      showToast('Downloading Verified 10-Hour DMV Logbook & Certificate PDF...', 'fa-solid fa-file-pdf');
    });
  }

  document.querySelectorAll('.download-receipt-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const inv = btn.dataset.inv || '#INV-2026';
      showToast(`Downloading official tuition receipt ${inv}.pdf...`, 'fa-solid fa-download');
    });
  });

  // DMV Test Buttons
  document.getElementById('confirm-test-docs-btn')?.addEventListener('click', () => {
    showToast('All test-day permit & insurance documents verified!', 'fa-solid fa-clipboard-check');
  });

  document.getElementById('reschedule-dmv-btn')?.addEventListener('click', () => {
    showToast('DMV Road Test Concierge notified to check alternate test dates.', 'fa-solid fa-calendar-days');
  });

  // Escape Key Handler
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSidebar();
      closeAllDropdowns();
      closeDashboardModal();
    }
  });
});

