'use strict';

const state = []; //this is the state or important data to this app
let roundsOfVoting = 25;
let chartObj = null;

function Image(name, source) {
  this.name = name;
  this.source = source;
  this.timesClicked = 0;
  this.timesShown = 0;
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
state.push(new Image('dog-duck', 'images/dog-duck.jpeg'));
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
let trackVotesEl = document.getElementById('track-votes');


// console.log('currently rendered images', imgEls);

console.log('current state', state); //looking for current state here


function generateRandomDucks() {
  return Math.floor(Math.random() * state.length);
}


// function renderDucks() { //find some ducks from state
//  let duck1, duck2, duck3;
//  do {
//   let duck1 = state[generateRandomDucks()];
//   let duck2 = state[generateRandomDucks()];
//   let duck3 = state[generateRandomDucks()];
//  } while (
//   otherDucks.includes(duck1) || 
//   otherDucks.includes(duck2) || 
//   otherDucks.includes(duck3) || 
//   duck1 === duck2 || 
//   duck1 === duck3 || 
//   duck2 === duck3 
//   };

//   otherDucks = [duck1, duck2, duck3];


function renderDucks() {
  let duck1 = state[generateRandomDucks()];
  let duck2 = state[generateRandomDucks()];
  let duck3 = state[generateRandomDucks()];
  // console.log('Products to Render ', imgEls, product1, product2, product3);
  while (duck1.name === duck2.name || duck1.name === duck3.name || duck2.name === duck3.name){
    duck2 = state[generateRandomDucks()];
    duck3 = state[generateRandomDucks()];
  }
  // console.log('RENDERED IMAGES ', imgEls);
  // console.log('FUTURE IMAGES ', product1.name, product2.name, product3.name);
  while (imgEls[0].id === duck1.name || imgEls[0].id === duck2.name || imgEls[0].id === duck3.name || imgEls[1].id === duck1.name || imgEls[1].id === duck2.name || imgEls[1].id === duck3.name || imgEls[2].id === duck1.name || imgEls[2].id === duck2.name || imgEls[2].id === duck3.name){
    duck1 = state[generateRandomDucks()];
    duck2 = state[generateRandomDucks()];
    duck3 = state[generateRandomDucks()];
    while (duck1.name === duck2.name || duck1.name === duck3.name || duck2.name === duck3.name){
      duck2 = state[generateRandomDucks()];
      duck3 = state[generateRandomDucks()];
    }
  }
  //fresh goats here
  imgEls[0].src = duck1.source;
  imgEls[0].id = duck1.name;
  duck1.timesShown += 1;
  imgEls[1].src = duck2.source;
  imgEls[1].id = duck2.name;
  duck2.timesShown += 1;
  imgEls[2].src = duck3.source;
  imgEls[2].id = duck3.name;
  duck3.timesShown += 1;
}

function handleClick(event){
  let imgClicked = event.target.id;
  state.forEach(image => {
    if(image.name === imgClicked){
      image.timesClicked += 1;
    }
  });
  // console.log('Updated Products: ', productsList);
  if(roundsOfVoting > 1){
    renderDucks();
    roundsOfVoting--;
  } else {
    trackVotesEl.removeEventListener('click', handleClick);
    chartObj = drawChart();
    roundsOfVoting--;
    writeData('products', state);
  }
}

trackVotesEl.addEventListener('click', handleClick);

if (readData('products') === null){
  '';
} else {
  readData('products');
}

renderDucks();

function writeData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function readData(key){
  return JSON.parse(localStorage.getItem(key));
}

console.log('PRODUCTS LIST AFTER CLICKS', state);
console.log('LOCAL STORAGE AFTER CLICKS', localStorage);



// const canvasEl = document.getElementById('chart');



// function handleClick(event){
//   let imgClicked = event.target.id;
//   state.forEach(image => {
//     if(image.name === imgClicked){
//       image.timesClicked += 1;
//     }
//   });
//   console.log('Updated State', state);
//   if(roundsOfVoting){
//     renderDucks();
//     roundsOfVoting--;
//   } else {
//     voteTrackerEl.removeEventListener('click', handleClick);
//     let buttonEl = document.getElementById('viewResultsButton');
//     console.log('Button Here', buttonEl);
//     buttonEl.addEventListener('click', generateResults);
//     alert('All votes reached, thank you!');
//     activeButton.style.backgroundColor = 'purple';
//     activeButton.style.cursor = 'pointer';
//   }
// }

// voteTrackerEl.addEventListener('click', handleImageClick);



// function generateResults(event) {


  // // Prepare chart data
  // const productLabels = state.map(product => product.name);
  // const votesData = state.map(product => product.timesClicked);
  // const viewsData = state.map(product => product.timesShown);


const canvasEL = document.getElementById('chart');

function drawChart() {
  let labels = [];
  let timesShown = [];
  let timesClicked = [];
  state.forEach(product => {
    labels.push(product.name);
    timesShown.push(product.timesShown);
    timesClicked.push(product.timesClicked);
  });

  // // Get canvas context
  // const ctx = document.getElementById('results-chart').getContext('2d');

  // Create the bar chart
  return new Chart(canvasEL, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Times Shown',
        data: timesShown,
        borderWidth: 1,
      }, {
        label: 'Times Clicked',
        data: timesClicked,
        borderWidth: 1,
      }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}











// voteTrackerEl.addEventListener('click', handleClick);



//CLASS REVIEW STARTS HERE
// function drawChart() {
//   let labels = [];
//   let timesShown = [];
//   let timesClicked = [];
//   state.forEach(product =>{
//     labels.push(product.name);
//     timesShown.push(product.timesShown);
//     timesClicked.push(product.timesClicked);
//   });
//   return new Chart(canvasEl, {
//     type: 'bar',
//     data: {
//       labels: labels, //how can we name our ducks 
//       datasets: [{
//         label: 'Times Shown',
//         data: timesShown,
//       }, {
//         label: 'Times Clicked',
//         data: timesClicked,
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true 
//         }
//       }
//     }

//   });
// }

// const canvasEl = document.getElementById('chart');







// new Chart(canvasEl, {
//   type:
//   data: {
//     labels: [], //how can we name our ducks 
//     datasets: [{
//       label: 'Times Shown',
//       data: []
//     }, {
//       label: 'Times Clicked',
//       data: [],
//       borderWidth: 1
//     }]
//   },
//  options: {
//   scales: {
//     y: {
//       beginAtZero: true 
//     }
//   }
//  }



// //declare what context we want to draw
// const drawingContext = canvasEl.getContext('2d');

// //first 2 arugments, location on canvas for 1st pixel
// // 2nd 3 arguements, (height and width)
// drawingContext.strokeRect(0, 0, 20, 20);
// drawingContext.strokeRect(20, 0, 20, 20);
// drawingContext.clearRect(0, 0, canvasEl.width, canvasEl.height); //erases previous growing squares

// // //will make 10 rectangles that get gradually bigger

// let scale = 1;
// function drawRectangle() {
//   let x =40;
//   let y = 0;
//   let height = 20;
//   let width = 20;
//   drawingContext.strokeRect(x, y, height, width);
// }

// setInterval(() => {
//   drawRectangle(scale +1);
// }, 1000);



// //chart.js input
// let chartObj = new Chart(drawingContext, {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });


//   // look at all object inside of state
//   state.forEach(duck => {
// }


// let buttonEl = document.getElementById
// buttonEl.addEventListener('click', function(){
//   updateChart([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
// }; 


// function updateChart(){
//   console.log('CHART OBJECT UPDATE', chartObj.data)
//   chartObj.data.datasets[0].data =data; 
//   chartObj.update();
// }







/*let eventId = voteTrackerEl.addEventListener('click', function(event) {
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
});*/








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
