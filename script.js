`use strict`;

const userInput = document.body.querySelector(`#inputUser`);
const button = document.body.querySelector(`button`);
const ul = document.body.querySelector(`ul`);

//TESTEUR
userInput.addEventListener( `click`, () => alert(`ok Mélou`));
//element.addEventListener( "quoi" exemple "click", action an arrow fonction );

// déclarer les variables et les tester - ok
// créer les fonctions vides, nommer des verbes d'action - ok
// remplir mes fonctions et tester la sortie (console.log) - 
// tester une fonction globale
// cabler les fonctions (clavier/sourie)
// finitions : option complémentaire


function validateImputValueByClic() {
  button.addEventlistener( `click` );
}

function validateImputValueByEnter() {
  input.addEventListener ( `keypress` );
}

function createNewElementLiAtEnd() {
  ul.createElement(`li`);
}

function pasteImputValueToLi() {}

function removeImputValueValidated() {}

function RunMyTodolist() {}



































// constante chaque élément de l'HTML
//const userInput = document.body.querySelector("#imputUser");
//const button = document.body.querySelector("button");
//const ul = document.body.querySelector("ul");
//
// let li;

//input.addEventlistener( "click", () => alert('ok Melou')); // tester
//button.addEventlistener( "click", addItemToToDoList) // tester

// déclarer les variables
// créer les fonctions vides, nommer des verbes d'action
// - get input value
// - validation (Enter, click button)
// remplir mes fonctions et tester la sortie (console.log)
// tester une fonction globale
// cabler les fonctions (clavier/sourie)
// finitions : option complémentaire

//faire des console.log régulièrement.

//function getInputValueClic() {
//    button.addEventlistener( "click", function () {
//        if (key.keycode === 13) {
//    addItemToToDoList();
//    }
//
//}

//function getInputValueEnter() {
//    input.addEventlistener( "keypress", addItemToToDoList)
//}

//function createElementLi() {
//    li = document.createElement("li");
//}

//function addImputValueInLi() {
//    li.append(document.createTextNode(input.Value));
//}

//function insertNewLiInDom() {
//    ul.insertAdjacentElement('beforeend', li);
//}
 
//function clearInput() {
  //  input.value.childNode.remove();
//    input.value = "";
//}



//function addItemToToDoList() {
//    if (input.value.length > 0) {
//    createElementLi();
//    addImputValueInLi();
//    insertNewLiInDom();
//    clearInput()
//    }
//}
