window.onload = function () {
  if (navigator.userAgent.indexOf("Chrome") !== -1) {
    const h1 = document.querySelector("#home h1");

    h1.style.fontFamily = "Saira Stencil One, sans-serif";
  } else {
    const h1 = document.querySelector("#home h1");
    h1.style.fontFamily = "Stencil Cargo Army, sans-serif";
  }
};

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  document.querySelector(".parallax-image").style.transform = `translateY(${
    scrollPosition * 0.2
  }px)`;
});
