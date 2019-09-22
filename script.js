`use strict`;

const userInput = document.body.querySelector(`#inputUser`);
const button = document.body.querySelector(`button`);
const ul = document.body.querySelector(`ul`);
let li;

// TESTEUR
// userInput.addEventListener( `click`, () => alert(`ok Mélou`));
//element.addEventListener( "quoi" exemple "click", action an arrow fonction );

// déclarer les variables et les tester - ok
// créer les fonctions vides, nommer des verbes d'action - ok
// remplir mes fonctions et tester la sortie (console.log) - 
//  - tester les fonctions pour insérer une tâche à la fin de la liste - ok
// tester une fonction globale - ok
// cabler les fonctions (clavier/sourie) - ok
// finitions : option complémentaire
// - supprimer la tâche une fois valider - ok
// - Majuscule pour première lettre et tout en minuscule 
// - mise en forme

// Fonction créer un élément LI.
function createNewli() {
  li = document.createElement( `li` );
}

// Fonction récupérer l'input et copier dans le LI créé.
function copyInputValueIntoNewLi() {
li.append(document.createTextNode( userInput.value ));
}

// Fonction insérer le Li et son text à la fin de la liste.
function insertNewElementLiAtEnd() {
ul.insertAdjacentElement( "beforeend", li );
}


// Fonction globale pour activer les fonctions sauf s'il n'y a pas données.
function runMyTodolist() {
  if ( userInput.value.length > 0 ) {
  createNewli();
  copyInputValueIntoNewLi();
  insertNewElementLiAtEnd();
  removeInputValueValidated();
  capitalizeFLetter();
  }
}

// fonction pour cabler par un clic par nécessaire dans ce cas.
//function validateImputValueByClic() {
//}

// fonction pour cable par enter.
function validateImputValueByEnter(valid) {
  if (valid.keyCode === 13) {
    runMyTodolist();
  }
}

// Cabler le "button" et la touche enter aux fonctions.
button.addEventListener( `click`, runMyTodolist );
userInput.addEventListener( `keypress`, validateImputValueByEnter );

// FINITION

// Fonction pour supprimer les tâches saisies après validation par clic et enter.
function removeInputValueValidated() {
  userInput.value = "";
}

// Revoir la fonction lundi
//function capitalizeFLetter() { 
//userInput.innerHTML = userInput.value[0].toUpperCase() + string.slice(1);
//}
























