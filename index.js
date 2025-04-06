window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  document.querySelector(".parallax-image").style.transform = `translateY(${
    scrollPosition * 0.2
  }px)`;
});

const h2 = document.querySelectorAll("h2");

const rotationValues = [5, -3, 2, -4, -1, 1];
window.onload(() => {
  h2.forEach((element, i) => {
    console.log(rotationValues[i]);
    element.style.transform = `rotate(${rotationValues[i]})`;
  });
});
