
let index=0;

carousel();

function carousel() {
let i;
const imageBox = document.body.querySelectorAll('.section-hero__background');
const squareIndicator=document.body.querySelectorAll('.section-hero__slide-indicator');
for (i = 0; i < imageBox.length; i++) {
  imageBox[i].style.display = "none";
} 
 index++;
if(index>imageBox.length){index=1}
imageBox[index-1].style.display="initial";

setTimeout(carousel,5000);
}







