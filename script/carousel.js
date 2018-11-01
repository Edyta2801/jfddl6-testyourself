
let index = 0;
let autoCarousel = true;
const squareIndicator = document.body.querySelectorAll('.section-hero__slide-indicator');
const imageBox = document.body.querySelectorAll('.section-hero__background');

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
function carousel() {
  if (autoCarousel == true) {
    hideBackgroundImages();
    clearSquareIndicators();
    index++;
    if (index > imageBox.length) { index = 1 }
    imageBox[index - 1].style.display = "initial";
    squareIndicator[index - 1].style.backgroundColor = "black";
    setTimeout(carousel, 5000);
  } else {

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
  clearSquareIndicators();
  let obj =getObject(event)
  obj.style.backgroundColor = "black";
  
  
  
  
}



function eventListener() {
  for (let i = 0; i < imageBox.length; i++) {
    squareIndicator[i].addEventListener("mouseover", getFocus);
    squareIndicator[i].addEventListener("mouseout", outOfFocus);
    squareIndicator[i].addEventListener("click", goToSlide)
  }
}








