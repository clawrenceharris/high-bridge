window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  const images = document.querySelectorAll(".parallax-image");
  images.forEach((item) => {
    item.style.transform = `translateY(${scrollPosition * 0.2}px)`;
  });
});
