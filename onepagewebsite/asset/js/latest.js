

// Get the theme toggle elements
const modeToggle = document.getElementById('modeToggle');
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');
const themeStyle = document.getElementById('themeStyle');

// Function to switch to dark mode
const switchToDark = () => {
  themeStyle.href = 'asset/css/dark.css';
  moonIcon.style.visibility = 'hidden';
  sunIcon.style.visibility = 'visible';
  document.body.classList.add('dark-mode');
  document.body.classList.remove('light-mode');
  localStorage.setItem('theme', 'dark');
}

// Function to switch to light mode
const switchToLight = () => {
  themeStyle.href = 'asset/css/light.css';
  moonIcon.style.visibility = 'visible';
  sunIcon.style.visibility = 'hidden';
  document.body.classList.add('light-mode');
  document.body.classList.remove('dark-mode');
  localStorage.setItem('theme', 'light');
}

// Check local storage for theme preference
const loadTheme = () => {
  if (localStorage.getItem('theme') === 'dark') {
    switchToDark();
  } else {
    switchToLight();
  }
}

loadTheme();

// Toggle theme on click
modeToggle.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    switchToLight();
  } else {
    switchToDark();
  }
});

// Countdown timer
const countdown = () => {
  const countDate = new Date('2024-10-31T23:59:00').getTime();
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
  
  // Check if countdown is over
  if (gap <= 0) {
    document.getElementById('days').innerText = 0;
    document.getElementById('hours').innerText = 0;
    document.getElementById('minutes').innerText = 0;
    document.getElementById('seconds').innerText = 0;
  }
};

// Update countdown every second
setInterval(countdown, 1000);
