import "bootstrap/dist/css/bootstrap.css";
import jokes from "./jokes";

let allJokes = jokes.getJokes().map(joke => "<li>" + joke + "</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");
const inputJoke = document.querySelector("#inputJokeId");
const buttonJoke = document.querySelector("#buttonJokeId");
const pJoke = document.querySelector("#pJokeId");
const inputNewJoke = document.querySelector("#inputNewJokeId");
const buttonNewJoke = document.querySelector("#buttonNewJokeId");
function showJokeById() {
  const jokeId = inputJoke.value;
  if (allJokes[jokeId]) {
    pJoke.innerHTML = allJokes[jokeId];
  } else {
    pJoke.innerHTML = `No joke with that id try between 0 and ${allJokes.length -
      1}`;
  }
}
function addNewJoke() {
  let newJoke = inputNewJoke.value;

  if (newJoke.length > 0) {
    newJoke = `<li> ${newJoke} </li>`;
    allJokes.push(newJoke);
    document.getElementById("jokes").innerHTML = allJokes.join("");
    inputNewJoke.value = "";
  }
}
buttonJoke.addEventListener("click", showJokeById);
buttonNewJoke.addEventListener("click", addNewJoke);

const qouteDiv = document.querySelector("#qouteIdDiv");
const qouteBtn = document.querySelector("#qouteIdBtn");

qouteBtn.addEventListener("click", getQoute);

function getQoute() {
  fetch("https://studypoints.info/jokes/api/jokes/period/hour")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      qouteDiv.innerHTML = data.joke;
    });
}

setInterval(getQoute, 360.0);

const svg = document.querySelector("svg");
const svgOutput = document.querySelector("#svgId");
function printIdFromSVG(e) {
  svgOutput.innerHTML = e.target.parentElement.id;
}

svg.addEventListener("click", printIdFromSVG);
