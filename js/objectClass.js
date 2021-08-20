/*
  Object => type complexe qui contient plusieurs valeurs de type differents

  Clé => chaine de caractère qui explique la valeur correspondante

  Classe => plan qui permet de creer des objets (ressemble a un formilaire)
  La classe contient des champs qui correspondent aux clé de l'objet final
*/

const episodeInfo = document.querySelector('#episode-info');

const episode = {
  title: 'Dark Beginnings',
  duration: 45,
  hasBeenWatched: false
}

const episodeTitle = episode.title;
const episodeDuration = episode.duration;
const episodeHasBeenWatched = episode.hasBeenWatched;

episodeInfo.innerHTML = `Episode: <b>${episodeTitle}</b> <br>
Duration: <b>${episodeDuration}</b> min <br>
<b>${episodeHasBeenWatched ? 'Already watched' : 'Not yet watched'}</b>`;


// =============== //
class Player {
  constructor(name, club, age, position) {
    this.name = name;
    this.club = club;
    this.age = age;
    this.position = position;
  }
}

const fcBarcelonaPlayer = new Player('De Jong', 'FC Barcelona', 23, 'Milieu Relayeur');

console.log(fcBarcelonaPlayer);

class Artist {
  constructor(name, age, country, typeOfMusic) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.typeOfMusic = typeOfMusic;
  }
}

// On creer une nouvelle instance de la class Artist
const singer = new Artist('Ava Max', 22, 'USA', 'R&B');

const singer2 = new Artist('Dua Lipa', 23, 'USA', 'R&B');

const singer3 = new Artist('DaBaby', 23, 'USA', 'RAP');

console.log(singer);
console.log(singer2);
console.log(singer3);

class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

const firstEpisode = new Episode('Life for a Life', 45, true);

const secondEpisode = new Episode('Dangerous Woman', 50, false);

const thirdEpisode = new Episode('The End', 52, false);

document.querySelector('#first-episode-info').innerText = `Episode: ${firstEpisode.title}
Duration: ${firstEpisode.duration} min
${firstEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#second-episode-info').innerText = `Episode: ${secondEpisode.title}
Duration: ${secondEpisode.duration} min
${secondEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#third-episode-info').innerText = `Episode: ${thirdEpisode.title}
Duration: ${thirdEpisode.duration} min
${thirdEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;