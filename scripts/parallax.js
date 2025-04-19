window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  const image = document.querySelector(".parallax-image");
  image.style.transform = `translateY(${scrollPosition * 0.2}px)`;
});
