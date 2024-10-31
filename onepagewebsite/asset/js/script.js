
// JavaScript
function switchToDark() {
    document.getElementById('themeStyle').setAttribute('href', '../asset/css/dark.css'); // Consistent path for dark mode
    document.getElementById('topWhite').src = '../asset/images/shape-top-black-80.png'; // Change to dark mode images
    document.getElementById('topGrey').src = '../asset/images/shape-top-dark-grey-80.png';
    document.getElementById('topGreyBottom').src = '../asset/images/shape-top-dark-grey-80.png';

    // Toggle visibility of the icons
    document.getElementById("moonIcon").style.display = "none";
    document.getElementById("sunIcon").style.display = "inline-block";
}

function switchToLight() {
    document.getElementById('themeStyle').setAttribute('href', '../asset/css/light.css'); // Consistent path for light mode
    document.getElementById('topWhite').src = '../asset/images/shape-top-white-80.png'; // Change to light mode images
    document.getElementById('topGrey').src = '../asset/images/shape-top-grey-80.png';
    document.getElementById('topGreyBottom').src = '../asset/images/shape-top-grey-80.png';

    // Toggle visibility of the icons
    document.getElementById("moonIcon").style.display = "inline-block";
    document.getElementById("sunIcon").style.display = "none";
}

// Scroll to the top button


// Show the button when the user scrolls down 100px
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   var scrollup = document.getElementById("scrollup");
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//     scrollup.style.display = "block";
//   } else {
//     scrollup.style.display = "none";
//   }
// }

// // Scroll to the top when the button is clicked
// document.getElementById("scrollup").addEventListener("click", function(e){
//   e.preventDefault(); // Prevent default anchor behavior
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth' // Smooth scroll effect
//   });
// });

