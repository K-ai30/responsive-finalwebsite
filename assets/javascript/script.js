// Get the button
let scrollBtn = $(".scrollUp");


$(document).ready(function() {
    scrollBtn.on("click", function(event) {
        topFunction(event);
    })
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }