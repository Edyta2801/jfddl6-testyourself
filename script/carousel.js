
let carouselAcctualImageIndex = 0;
let imageNumber;
let autoCarousel = true;
const squareIndicator = document.body.querySelectorAll('.section-hero__slide-indicator');
const imageBox = document.body.querySelectorAll('.section-hero__background');
const sectionHero = document.body.querySelector('.section-hero')

carousel();
eventListener();

function hideBackgroundImages() {
  for (let i = 0; i < imageBox.length; i++) {
    imageBox[i].style.display = "none";
  }
}
function clearSquareIndicators() {
  for (let i = 0; i < imageBox.length; i++) {
    squareIndicator[i].style.backgroundColor = "grey";
  }
}

function startAutoSlide() {
  if (autoCarousel == false) {
    autoCarousel = true;
    carouselAcctualImageIndex = imageNumber
    carousel()
  }
}

function carousel() {
  if (autoCarousel == true) {
    hideBackgroundImages();
    clearSquareIndicators();
    carouselAcctualImageIndex++;
    if (carouselAcctualImageIndex > imageBox.length) { carouselAcctualImageIndex = 1 }
    imageBox[carouselAcctualImageIndex - 1].style.display = "initial";
    squareIndicator[carouselAcctualImageIndex - 1].style.backgroundColor = "black";
    setTimeout(carousel, 8000);
  }
}

const getObject = (event) => event.target;

function getFocus() { getObject(event).style.border = "2px solid white"; }

function outOfFocus() {
  for (i = 0; i < squareIndicator.length; i++) {
    squareIndicator[i].style.border = "none";
  }
}
function goToSlide() {
  autoCarousel = false;
  let pressedSquareBox = getObject(event)
  let pressedSquareBoxId = parseInt(pressedSquareBox.id);
  clearSquareIndicators();
  pressedSquareBox.style.backgroundColor = "black";
  for (let index = 0; index < imageBox.length; index++) {
    if (imageBox[index] != imageBox[pressedSquareBoxId]) {
      imageBox[index].style.display = "none"
    } else imageBox[pressedSquareBoxId].style.display = "initial";
  }
  imageNumber = pressedSquareBoxId;
}

function eventListener() {
  for (let i = 0; i < imageBox.length; i++) {
    squareIndicator[i].addEventListener("mouseover", getFocus);
    squareIndicator[i].addEventListener("mouseout", outOfFocus);
    squareIndicator[i].addEventListener("click", goToSlide)
  }
  sectionHero.addEventListener("mouseleave", startAutoSlide)
}








