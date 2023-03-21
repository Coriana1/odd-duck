'use strict';

const state = []; //this is the state or important data to this app
let roundsOfVoting = 29;

function Image(name, source) {
  this.name = name;
  this.timesClicked = 0;
  this.timesShown = 0;
  this.source = source;
}

state.push(new Image('bag', 'images/bag.jpg'));
state.push(new Image('pen', 'images/pen.jpeg'));
state.push(new Image('banana', 'images/banana.jpeg'));
state.push(new Image('bathroom', 'images/bathroom.jpeg'));
state.push(new Image('boots', 'images/boots.jpeg'));
state.push(new Image('breakfast', 'images/breakfast.jpeg'));
state.push(new Image('bubblegum', 'images/bubblegum.jpeg'));
state.push(new Image('chair', 'images/chair.jpeg'));
state.push(new Image('cthulhu', 'images/cthulhu.jpeg'));
state.push(new Image('dog duck', 'images/dog-duck.jpeg'));
state.push(new Image('dragon', 'images/dragon.jpeg'));
state.push(new Image('pet sweep', 'images/pet-sweep.jpeg'));
state.push(new Image('scissors', 'images/scissors.jpeg'));
state.push(new Image('shark', 'images/shark.jpeg'));
state.push(new Image('sweep', 'images/sweep.jpeg'));
state.push(new Image('tauntaun', 'images/tauntaun.jpeg'));
state.push(new Image('unicorn', 'images/unicorn.jpeg'));
state.push(new Image('water can', 'images/water-can.jpeg'));
state.push(new Image('wine glass', 'images/wine-glass.jpeg'));

let imgEls = document.querySelectorAll('img'); //array like thing  filled with all the img elements in my html
let voteTrackerEl = document.getElementById('vote-tracker');


console.log('currently rendered images', imgEls);

console.log('current state', state); //looking for current state here

// renedering our first duck image
imgEls[0].src = state[0].source;
imgEls[0].src = state[0].name;
imgEls[1].src = state[1].source;
imgEls[1].src = state[1].name;
imgEls[2].src = state[2].source;
imgEls[2].src = state[2].name;
renderDucks();

function generateRandomDucks() {
  return Math.floor(Math.random() * state.length);
}

function renderDucks() {
  //find some ducks from state
  let duck1 = generateRandomDucks();
  let duck2 = generateRandomDucks();
  let duck3 = generateRandomDucks();
  console.log('goats to re-render', imgEls, duck1, duck2, duck3);
  while (duck1.name === duck2.name === duck3.name) {
    duck3 = state[generateRandomDucks()];
  }


  //fresh goats here 
  imgEls[0].src = duck1.source;
  imgEls[0].src = duck1.name;
  duck1.timesShown += 1;
  imgEls[1].src = duck2.source;
  imgEls[1].src = duck2.name;
  duck2.timesShown += 1;
  imgEls[2].src = duck3.source;
  imgEls[2].src = duck3.name;
  duck3.timesShown += 1;
}

let eventId = voteTrackerEl.addEventListener('click', function(event) {
  console.log(event.target); //event.target always represents the exact element where event occured


  //identify which image was clicked
  let duckThatWasClicked = event.target.id;
  state.forEach(image => {
    if (image.name === duckThatWasClicked) {
      image.timesClicked += 1;
    }
  });
  console.log('updated state', state);

  //re-render ducks
  if (roundsOfVoting) {
    renderDucks();
    roundsOfVoting--;
  } else {
    voteTrackerEl.removeEventListener();
  }
});








/*const allDuckPics = []; //this is the state or important data to this app

function Image(name, source) {
  this.timesClicked = 0;
  this.source = source;
}

allDuckPics.push(new Image('pen', '/img/pen.jpeg'));
allDuckPics.push(new Image('banana', '/img/banana.jpeg'));
allDuckPics.push(new Image('bathroom', '/img/bathroom.jpeg'));
allDuckPics.push(new Image('boots', '/img/boots.jpeg'));
allDuckPics.push(new Image('breakfast', '/img/breakfast.jpeg'));
allDuckPics.push(new Image('bubblegum', '/img/bubblegum.jpeg'));
allDuckPics.push(new Image('chair', '/img/chair.jpeg'));
allDuckPics.push(new Image('cthulhu', '/img/cthulhu.jpeg'));
allDuckPics.push(new Image('dog duck', '/img/dog-duck.jpeg'));
allDuckPics.push(new Image('dragon', '/img/dragon.jpeg'));
allDuckPics.push(new Image('pet sweep', '/img/pet-sweep.jpeg'));
allDuckPics.push(new Image('scissors', '/img/scissors.jpeg'));
allDuckPics.push(new Image('shark', '/img/shark.jpeg'));
allDuckPics.push(new Image('sweep', '/img/sweep.jpeg'));
allDuckPics.push(new Image('tauntaun', '/img/tauntaun.jpeg'));
allDuckPics.push(new Image('unicorn', '/img/unicorn.jpeg'));
allDuckPics.push(new Image('water can', '/img/water-can.jpeg'));
allDuckPics.push(new Image('wine glass', '/img/wine-glass.jpeg'));

let imgEls = document.querySelectorAll('img'); //array like thing  filled with all the img elements in my html
console.log('currently rendered images', imgEls);

console.log('current allDuckPics', allDuckPics); //looking for current state here

imgEls[0].src = allDuckPics[0].source;
imgEls[1].src = allDuckPics[1].source;
imgEls[2].src = allDuckPics[2].source;*/
