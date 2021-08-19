// Il ya 3 type de variable en JavaScript
// ==> Number, ==> String, ==> boolean

// DOM Elements
const paragraph = document.querySelector('#info');
const time = document.querySelector('#time');
const episodeInfo = document.querySelector('#episode-info');

// Episodes infos
let episodeTitle = 'Une vie pour une vie';
let episodeDuration = 52;
let hasBeenWatched = true;

// Next episode
episodeTitle = 'Réconciliation';
episodeDuration = 45;
hasBeenWatched = false;

// Variables
const numberOfSeasons = 7;
const numberOfEpisodes = 12;
const episodeTime = 52;
const commercialTime = 5;

// Watch time
const totalShowTime = ((numberOfSeasons * numberOfEpisodes) * (episodeTime + commercialTime));

paragraph.innerHTML = `<b>${numberOfSeasons}</b> seasons, <b>${numberOfEpisodes}</b> episodes per season`;

time.innerHTML = `Total viewing time: <b>${totalShowTime}</b> minutes`;

episodeInfo.innerHTML = `Episode:<b> ${episodeTitle}</b> <br>
Duration: <b>${episodeDuration} min</b> <br>
<b>${hasBeenWatched ? 'Already watched' : 'Not yet watched'}</b>`;