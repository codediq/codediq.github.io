// Get the theme toggle elements
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');
const themeStyle = document.getElementById('themeStyle');

// Function to switch to dark mode
function switchToDark() {
  themeStyle.href = 'asset/css/dark.css';
  moonIcon.style.visibility = 'hidden';
  sunIcon.style.visibility = 'visible';
  localStorage.setItem('theme', 'dark');
}

// Function to switch to light mode
function switchToLight() {
  themeStyle.href = 'asset/css/light.css';
  moonIcon.style.visibility = 'visible';
  sunIcon.style.visibility = 'hidden';
  localStorage.setItem('theme', 'light');
}

// Check local storage for theme preference
if (localStorage.getItem('theme') === 'dark') {
  switchToDark();
} else {
  switchToLight();
}

// Countdown timer
const countdown = () => {
  const countDate = new Date('2024-12-31T00:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const textDays = Math.floor(gap / days);
  const textHours = Math.floor((gap % days) / hours);
  const textMinutes = Math.floor((gap % hours) / minutes);
  const textSeconds = Math.floor((gap % minutes) / seconds);

  document.getElementById('days').innerText = textDays;
  document.getElementById('hours').innerText = textHours;
  document.getElementById('minutes').innerText = textMinutes;
  document.getElementById('seconds').innerText = textSeconds;
};

// Update countdown every second
setInterval(countdown, 1000);
