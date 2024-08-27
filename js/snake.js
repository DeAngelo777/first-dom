import { header } from './header.js';
header('basketball');

const formDOM = document.forms[0];
const [widthDOM, heightDOM] = formDOM.querySelectorAll('input'); // [{}, {}]
const [widthNoteDOM, heightNoteDom] = formDOM.querySelectorAll('note'); // [{}, {}]
const worldDOM = document.getElementById('world');


const cellSize = 48;
const {clientHeight, clientWidth} = worldDOM;

const width = Math.floor(clientWidth / cellSize);
const height = Math.floor(clientHeight / cellSize);


// uzpildome forma su paskaiciuota informacija pagal ekrano dydi
widthDOM.value = width;
widthDOM.max = width;
widthNoteDOM.textContent = 'max plotis ' + width;


heightDOM.value = height;
heightDOM.max = height;
heightNoteDom.textContent = 'max aukstis ' + height;

let HTML = '';

for (let y = 0; y < height; y++){
let cellHTML;
    for (let x = 0; x < width; x++){

        cellHTML += `<div class="cell"></div>`;
    } 

}        HTML += `<div class="row">${cellHTML}</div>`;


// Uzpildome pasauli langeliais
worldDOM.innerHTML = `<div class="row">${'<div class="cell"> </div>'.repeat(width)}</div>`.repeat(height);



const snakeDOM = document.querySelector('.snake');
const chickenDOM = document.querySelector('.chicken');


const snakePosition = {
    x: 0,
    y: 0,
}

snakeDOM.style.top = (snakePosition.y * cellSize + 'px');
snakeDOM.style.left = (snakePosition.x * cellSize + 'px');

const chickenPosition = {
    x: 0,
    y: 0,
}

chickenDOM.style.top = (chickenPosition.y * cellSize + 'px');
chickenDOM.style.left = (chickenPosition.x * cellSize + 'px');













// const name = person.name;
// const age = person.age;

// const {name, age } = person;

// const marks = [10, 2];

// const first = marks [0];
// const second = marks[1];

// const [first, second] = marks;