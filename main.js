(function () {
  "use strict";

  var nav = document.querySelector(".site-nav");
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelectorAll(".site-nav a[href^='#']");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      if (nav) nav.classList.remove("is-open");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  });

  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
