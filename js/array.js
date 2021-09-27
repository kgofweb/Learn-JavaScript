/* 
  Les arrays permettent de creer une liste de valeurs ou d'objets

  C'est aussi une liste ordonnée qui conserve l'ordre des elements. 
  
  Chaque element a un index. On compte a partir de 0.
*/

const body = document.querySelector('body');

// Create class Episode
class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

// Create new Instance of class Episode
const firstEpisode = new Episode('Dark Beginnings', 45, true);

const secondEpisode = new Episode('The Mystery Continues', 45, false);

const thirdEpisode = new Episode('An Unexpected Climax', 60, false);

// Group all variables in an array
// const episodes = [ firstEpisode, secondEpisode, thirdEpisode ];

const episodes = [];

episodes.push(firstEpisode, secondEpisode, thirdEpisode, thirdEpisode);

// Supprime le dernier element
episodes.pop();

episodes.forEach(episode => {
  // Create a new div
  const newDiv = document.createElement('div');
  // Add class
  newDiv.classList.add('series-frame');
  // Create title
  const newTitle = document.createElement('h2');
  // Insert to HTML
  newTitle.innerText = 'City Of Angels';
  // Create a paragraphe
  const newParagraph = document.createElement('p');
  // Insert to HTML
  newParagraph.innerHTML = `${episode.title} <br> ${episode.duration} <br> ${episode.hasBeenWatched ? 'Already been watched' : 'Not yet watched !'}`;

  // Append child
  newDiv.append(newTitle);
  newDiv.append(newParagraph);
  body.append(newDiv);
});

const person = {
  name: 'Jonh',
  age: 20,
  profession: 'Developper Web'
}

// const array = [person];
// const newName = person.name = 'Cholé';

// console.log(array);
// console.log(newName);


// Work with array
const artistList = ['Ava Max', 'Selena Gomez', 'Drake', 'Halsey', 'Pop Smoke'];
console.log(artistList);

// Ajouter au debut du tableau
artistList.unshift('Dua Lipa');

// Ajout d'element a la fin d'un tableau
artistList.push('DaBaby');

// Supprimer le dernier element du tableau
artistList.pop();