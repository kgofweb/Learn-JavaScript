// Ordre d'execution du code
// => Ordonné
// => Répété
// => Ignoré

// DOM Elements
const spaceMessage = document.getElementById("message");
const btn = document.getElementById("button");
const ageInput = document.getElementById("age");

// Initialiser la variable age
let age;
// Fixer l'age majeur
let ageMajority = 18;

// Ecouter l'évenement click sur le btn
btn.addEventListener('click', onConfirm);

function onConfirm(){
  // Récupérer la saisie de l'age et transformer le texte en nombre entier
  age = parseInt(ageInput.value);

  // Si la saisie n'est pas un nombre, on affiche un message d'erreur
  if(isNaN(age)){
    alert("Vueillez entrer un nombre s'il vous plait !");
    return;
  }
  
  if (age < ageMajority) {
    refuser();
  } else {
    valider();
  }

  // On vide le champ de saisie
  ageInput.value = "";
}

// Message de validation
function valider() {
  spaceMessage.innerText = "Vous êtes autorisé à entrer !";
  // Styliser le message
  spaceMessage.className = 'success';
  spaceMessage.classList.add('success');
}

// Message d'erreur
function refuser() {
  spaceMessage.innerText = 'Espace iterdit au personnes mineurs';
  spaceMessage.className = 'danger';
}