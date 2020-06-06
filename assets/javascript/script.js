// Get the button
let scrollBtn = $(".scrollUp");
// scrollBtn = document.getElementsByClassName("scrollUp");

// $(document).ready(function() {
//     scrollBtn.on("click", function(event) {
//         topFunction(event);
//     })
// }

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}