const wrapper = document.querySelector(".swiper-wrapper");
const swiperContainer = document.querySelector(".swiper-container");
const slides = document.querySelectorAll(".swiper-slide");

const dotsContainer = document.createElement("div");

dotsContainer.classList.add("swiper-dots");
dotsContainer.classList.add("swiper-pagination");
wrapper.appendChild(dotsContainer);

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
if (leftArrow && rightArrow) {
  leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) goToSlide(currentIndex - 1);
    else goToSlide(slides.length - 1);
  });

  rightArrow.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) goToSlide(currentIndex + 1);
    else goToSlide(0);
  });
}

let currentIndex = 0;

slides.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("swiper-dot");
  dot.addEventListener("click", () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".swiper-dot");

function goToSlide(newIndex) {
  slides[currentIndex].classList.remove("active");
  slides[newIndex].classList.add("active");

  dots[currentIndex].classList.remove("active");
  dots[newIndex].classList.add("active");

  currentIndex = newIndex;
}

goToSlide(currentIndex);
