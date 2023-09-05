// set copyright
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

// navigator
const navBtnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

navBtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// mobile-nav  close
const links = document.querySelectorAll("a:link");
// console.log(links);

links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    //   console.log(link);
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// sticky nav
const heroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    console.log(entries);
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    // root: null,
    // threshold: 0,
    // rootMargin: "-80px",
  }
);
obs.observe(heroEl);
