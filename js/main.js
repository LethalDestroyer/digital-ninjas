document.addEventListener("DOMContentLoaded", () => {
  // Typed.js
  new Typed("#typed-text", {
    strings: ["We Make Digital Ideas and SEO Marketing"],
    typeSpeed: 50,
    showCursor: false
  });

  // AOS Init
  AOS.init({
    duration: 1000,
    once: false
  });

  // Animate on Scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('#seo-performance, #testimonials-section')
    .forEach(section => observer.observe(section));

  // Success Modal
  if (window.location.search.includes('success=1') || window.location.href.includes('?success')) {
    const modal = new bootstrap.Modal(document.getElementById('successModal'));
    modal.show();
    window.history.replaceState(null, null, window.location.pathname);
  }

  // Counter Animation
  const counters = document.querySelectorAll('.counter');
  const speed = 200;
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
});
