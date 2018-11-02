
let index = 0;
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
  autoCarousel = true;
  // carousel()
  console.log('startAutoSlide',autoCarousel)
  // carousel()
}

function carousel() {
  
  console.log('inside carousel',autoCarousel)
  if (autoCarousel == true) {
    hideBackgroundImages();
    clearSquareIndicators();
    index++;
    if (index > imageBox.length) { index = 1 }
    imageBox[index - 1].style.display = "initial";
    squareIndicator[index - 1].style.backgroundColor = "black";
    setTimeout(carousel, 3000);
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
}





function eventListener() {
  for (let i = 0; i < imageBox.length; i++) {
    squareIndicator[i].addEventListener("mouseover", getFocus);
    squareIndicator[i].addEventListener("mouseout", outOfFocus);
    squareIndicator[i].addEventListener("click", goToSlide)

  }
  console.log(sectionHero)
  sectionHero.addEventListener("mouseleave", startAutoSlide)
}








