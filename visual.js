 // Modal Image Gallery
 function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";   
}
// SCROLLREVEAL
ScrollReveal().reveal('.w3-bar', {delay: 400});
ScrollReveal().reveal('.w3-row-padding', {delay: 400});
ScrollReveal().reveal('.w3-quarter', {delay: 400});
ScrollReveal().reveal('.w3-card', {delay: 400});
ScrollReveal().reveal('.w3-col', {delay: 400});
ScrollReveal().reveal('.footer', {delay: 400});
ScrollReveal().reveal('.w3-display-left', {delay: 400});
ScrollReveal().reveal('.w3-display-bottomleft', {delay: 400});
ScrollReveal().reveal('.social', {delay: 500});
ScrollReveal().reveal('.footer', {delay: 500});
ScrollReveal().reveal('.w3-black', {delay: 500});
ScrollReveal().reveal('.w3-jumbo', {delay: 500});
ScrollReveal().reveal('.w3-large', {delay: 500});