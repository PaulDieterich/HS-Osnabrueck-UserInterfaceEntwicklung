let slideIndex = 0;
const slides = $(".mySlides");
const dots = $(".dot");
showSlides();
showSlidesUser(slideIndex);

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  slideIndex > slides.length ? slideIndex = 1 : null;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}
function showSlidesUser(n) {
  n > slides.length ? slideIndex = 1 : null;
  n < 1 ? slideIndex = slides.length : null;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}


function plusSlides(n) {
  showSlidesUser(slideIndex += n);
}

function currentSlide(n) {
  showSlidesUser(slideIndex = n);
}
