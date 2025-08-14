import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird '];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before class.', 'when i was sleeping.', 'while i was excercising.', 'during my lunch.'];


  let randomNumber1 = Math.floor(Math.random() * 4)
  let randomNumber2 = Math.floor(Math.random() * 1)
  let randomNumber3 = Math.floor(Math.random() * 3)
  let randomNumber4 = Math.floor(Math.random() * 2)


let theWho = who[2];
let theAction = action[3];
let theWhat = what[1];
let theWhen = when[2];

let excuse = theWho + theAction + theWhat + theWhen;

console.log(excuse);


let htmlElement = document.querySelector('#excuse');

console.log(htmlElement);

enterHtml.innrHtml = excuse;


};
