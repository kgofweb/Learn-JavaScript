// const btn = document.querySelector('.btn');
// const increment = document.getElementById('increment');

// let justNumber = 10;

// increment.innerText = justNumber;

// btn.addEventListener('click', () => {
//   justNumber--;
//   increment.innerHTML = justNumber;
// });

// ======================================= //
const paragraph = document.querySelector('#info');
const time = document.querySelector('#time');

let numberOfSeasons = 7;
let numberOfEpisodes = 12;

let episodeTime = 52;
let commercialTime = 5;

let totalShowTime = ((numberOfSeasons * numberOfEpisodes) * (episodeTime + commercialTime));

paragraph.innerHTML = `<b>${numberOfSeasons}</b> seasons, <b>${numberOfEpisodes}</b> episodes per season`;

time.innerHTML = `Total viewing time: <b>${totalShowTime}</b> minutes`;

// ======================================= //
const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;

const dayInput = document.querySelector('#day-input');
const calculateButton = document.querySelector('#calculate-button');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

calculateButton.addEventListener('click', () => {
  let days = dayInput.value;
  let calcHours = days * hoursPerDay;
  let calcMinutes = calcHours * minutesPerHour;
  let calcSeconds = calcMinutes * secondsPerMinute;
  
  hours.innerHTML = `<b>${calcHours}</b> hours`;
  minutes.innerHTML = `<b>${calcMinutes}</b> minutes`;
  seconds.innerHTML = `<b>${calcSeconds}</b> seconds`;
});