window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  document.querySelector(".parallax-image").style.transform = `translateY(${
    scrollPosition * 0.2
  }px)`;
});
