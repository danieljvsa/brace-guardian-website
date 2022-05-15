let slideIndex = 0;
let clicks = 0;
showSlides();
showMenu()
sendEmail()

function showSlides() {
  let i;
  let slides = document.querySelectorAll(".mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function showMenu() {
  clicks++
  var x = document.querySelector(".menu");
  var y = document.querySelector(".slideshow-container");
  console.log(clicks)
  if (clicks % 2 == 1) {
    x.setAttribute('style', 'height: auto !important;')
   
  } else {
    x.setAttribute('style', 'height: 0 !important;')
    
  }
}

function sendEmail() {
  let name = document.getElementById("name")
  let sender = document.getElementById("email")
  let content = document.getElementById("message")
  console.log(name.innerHTML)
  var link = "mailto:bracegiuardian@gmail.com"
             + "?cc=" + sender.value +".com"
             + "&subject=" + encodeURIComponent(name.value)
             + "&body=" + encodeURIComponent(content.value)
    ;
    
    window.location.href = link;
}