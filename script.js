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
//  - tester les 3ére fonctions pour insérer une tâche à la fin de la liste.
// tester une fonction globale
// cabler les fonctions (clavier/sourie)
// finitions : option complémentaire

// fonction créer un élément LI.
function createNewli() {
  li = document.createElement( `li` );
}

// fonction récupérer l'input et copier dans le LI créé.
function copyInputValueIntoNewLi() {
li.append(document.createTextNode( userInput.value ));
}

// fonction insérer le Li et son text à la fin de la liste.
function insertNewElementLiAtEnd() {
ul.insertAdjacentElement( "beforeend", li );
}

//function validateImputValueByClic() {
//  button.addEventlistener( `click` );
//}

//function validateImputValueByEnter() {
//  input.addEventListener ( `keypress` );
//}



//function pasteImputValueToLi() {}

//function removeImputValueValidated() {}

//function RunMyTodolist() {
//  function createNewli();
//  function copyInputValueIntoNewLi();
//  function insertNewElementLiAtEnd();
//}























