/* ─── Moor Graphix Mobile Menu ─── */
(function () {
  function toggleMobileMenu() {
    var menu = document.getElementById('mobileMenu');
    if (!menu) return;
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  }

  // Close when clicking outside the menu links
  document.addEventListener('click', function (e) {
    var menu = document.getElementById('mobileMenu');
    if (!menu || !menu.classList.contains('open')) return;
    // If the click is directly on the overlay background (not a child)
    if (e.target === menu) toggleMobileMenu();
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var menu = document.getElementById('mobileMenu');
      if (menu && menu.classList.contains('open')) toggleMobileMenu();
    }
  });

  // Expose globally
  window.toggleMobileMenu = toggleMobileMenu;
})();
