import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  //fixed spacing issues when combining 
  let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird '];
  let action = ['ate ', 'peed ', 'crushed ', 'broke '];
  let what = ['my homework ', 'my phone ', 'the car '];
  let when = ['before class.', 'when i was sleeping.', 'while i was excercising.', 'during my lunch.'];

//updated the length coding
  let randomNumber1 = Math.floor(Math.random() * who.length);
  let randomNumber2 = Math.floor(Math.random() * action.length);
  let randomNumber3 = Math.floor(Math.random() * what.length);
  let randomNumber4 = Math.floor(Math.random() * when.length);

//removed hard coded excuse
  let excuse = who[randomNumber1] + action[randomNumber2] + what[randomNumber3] + when[randomNumber4];
//removed console.log
//console.log(excuse);


let htmlElement = document.querySelector('#excuse');
//removed console.log
//console.log(htmlElement);

//fixed link to index
htmlElement.innerHTML = excuse;


};
