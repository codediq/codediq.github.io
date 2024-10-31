// // document.getElementById('modeToggle').addEventListener('click', function() {
// //     var body = document.body;
// //     var button = this;
  
// //     if (body.classList.contains('light-mode')) {
// //       body.classList.remove('light-mode');
// //       body.classList.add('dark-mode');
// //       button.textContent = '';
// //     } else {
// //       body.classList.remove('dark-mode');
// //       body.classList.add('light-mode');
// //       button.textContent = '';
// //     }
// //   });



// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//       loop: true,
//       margin: 10,
//       nav: false,
//       items: 1,
//       // animateOut: 'fadeOut',          // Exit animation
//       // animateIn: 'fadeIn',             // Entry animation
//       autoplay: true,                  // Enable auto-play
//       autoplayTimeout: 3000,           // Time between transitions
//       autoplayHoverPause: true,        // Pause on hover
//       // smartSpeed: 800                  // Speed of transitions
//   });
// });

// // Get the theme toggle elements
// const moonIcon = document.getElementById('moonIcon');
// const sunIcon = document.getElementById('sunIcon');
// const themeStyle = document.getElementById('themeStyle');

// // Function to switch to dark mode
// const switchToDark = () => {
//   themeStyle.href = 'asset/css/dark.css';
//   moonIcon.style.visibility = 'hidden';
//   sunIcon.style.visibility = 'visible';
//   document.body.classList.add('dark-mode');
//   document.body.classList.remove('light-mode');
//   localStorage.setItem('theme', 'dark');
// }

// // Function to switch to light mode
// const switchToLight = () => {
//   themeStyle.href = 'asset/css/light.css';
//   moonIcon.style.visibility = 'visible';
//   sunIcon.style.visibility = 'hidden';
//   document.body.classList.add('light-mode');
//   document.body.classList.remove('dark-mode');
//   localStorage.setItem('theme', 'light');
// }

// // Check local storage for theme preference
// const loadTheme = () => {
//   if (localStorage.getItem('theme') === 'dark') {
//     switchToDark();
//   } else {
//     switchToLight();
//   }
// }

// loadTheme();

// // Toggle theme on click
// moonIcon.addEventListener('click', () => {
//   if (localStorage.getItem('theme') === 'dark') {
//     switchToLight();
//   } else {
//     switchToDark();
//   }
// });

// sunIcon.addEventListener('click', () => {
//   if (localStorage.getItem('theme') === 'dark') {
//     switchToLight();
//   } else {
//     switchToDark();
//   }
// });

// // Countdown timer
// const countdown = () => {
//   const countDate = new Date('2024-12-31T00:00:00').getTime();
//   const now = new Date().getTime();
//   const gap = countDate - now;

//   const seconds = 1000;
//   const minutes = seconds * 60;
//   const hours = minutes * 60;
//   const days = hours * 24;

//   const textDays = Math.floor(gap / days);
//   const textHours = Math.floor((gap % days) / hours);
//   const textMinutes = Math.floor((gap % hours) / minutes);
//   const textSeconds = Math.floor((gap % minutes) / seconds);

//   document.getElementById('days').innerText = textDays;
//   document.getElementById('hours').innerText = textHours;
//   document.getElementById('minutes').innerText = textMinutes;
//   document.getElementById('seconds').innerText = textSeconds;
// };

// // Update countdown every second
// setInterval(countdown, 1000);




// Countdown Timer Functionality
function initializeCountdown(hours) {
  const endTime = new Date(Date.now() + hours * 60 * 60 * 1000);

  function updateCountdown() {
      const now = new Date();
      const remainingTime = endTime - now;

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = String(hours).padStart(2, '0');
      document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
      document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

      if (remainingTime < 0) {
          clearInterval(countdownInterval);
          document.querySelector('.countdown').innerHTML = "<h2>Enrolment time has elapsed!</h2>";
      }
  }

  updateCountdown(); // Initial call to display countdown immediately
  const countdownInterval = setInterval(updateCountdown, 1000);
}

// Initialize countdown for 18 hours
initializeCountdown(18);

// Light/Dark Mode Functionality
const modeToggle = document.getElementById("modeToggle");
const body = document.body;
const themeStyle = document.getElementById("themeStyle");

modeToggle.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      themeStyle.setAttribute("href", "asset/css/dark.css"); // Path to dark mode CSS
  } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      themeStyle.setAttribute("href", "asset/css/light.css"); // Path to light mode CSS
  }
});

