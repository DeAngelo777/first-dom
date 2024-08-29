import { header } from './header.js';
header('snake');

const formDOM = document.forms[0];
const [widthDOM, heightDOM] = formDOM.querySelectorAll('input');
const [widthNoteDOM, heightNoteDOM] = formDOM.querySelectorAll('.note');
const worldDOM = document.getElementById('world');
const cellSize = 48;

let snakeDOM = null;
let chickenDOM = null;

const snakePosition = {
    x: 0,
    y: 0,
};
const chickenPosition = {
    x: 2,
    y: 2,
};
const world = {
    width: 2,
    height: 2,
};

function renderWorld() {
    worldDOM.innerHTML = `<div class="row">${'<div class="cell"></div>'.repeat(world.width)}</div>`.repeat(world.height)
        + '<img class="chicken" style="top: 96px; left: 96px;" src="./chicken.png" alt="Chicken">'
        + '<img class="snake" style="top: 0px; left: 0px;" src="./snake-round.png" alt="Snake">';

    snakeDOM = document.querySelector('.snake');
    chickenDOM = document.querySelector('.chicken');

    snakeDOM.style.top = (snakePosition.y * cellSize) + 'px';
    snakeDOM.style.left = (snakePosition.x * cellSize) + 'px';

    chickenDOM.style.top = (chickenPosition.y * cellSize) + 'px';
    chickenDOM.style.left = (chickenPosition.x * cellSize) + 'px';
}

// function randomChickenPosition() {
//     const newX = Math.floor(Math.random() * world.width);
//     const newY = Math.floor(Math.random() * world.height);

//     if (newX !== snakePosition.x && newY !== snakePosition.y) {
//         chickenPosition.x = newX
//         chickenPosition.y = newY;
//     } else {
//         randomChickenPosition();
//     }
// }

function randomChickenPosition() {
    let foundPair = false;

    while (!foundPair) {
        const newX = Math.floor(Math.random() * world.width);
        const newY = Math.floor(Math.random() * world.height);

        if (newX !== snakePosition.x || newY !== snakePosition.y) {
            chickenPosition.x = newX
            chickenPosition.y = newY;
            foundPair = true;
        }
    }

}

function gameOfSnakeAndChicken() {
    const { clientHeight, clientWidth } = worldDOM;

    const width = Math.floor(clientWidth / cellSize);
    const height = Math.floor(clientHeight / cellSize);

    world.width = width;
    world.height = height;

    // uzpildome forma su perskaiciuota informacija pagal ekrano dydi
    widthDOM.value = width;
    widthDOM.max = width;
    widthNoteDOM.textContent = 'max plotis: ' + width;

    heightDOM.value = height;
    heightDOM.max = height;
    heightNoteDOM.textContent = 'max aukštis: ' + height;

    snakePosition.x = Math.floor(world.width / 2);
    snakePosition.y = Math.floor(world.height / 2);

    randomChickenPosition();
    renderWorld();
}

gameOfSnakeAndChicken();

window.addEventListener('resize', gameOfSnakeAndChicken);

window.addEventListener('keyup', event => {
    if (event.key === 'w') {
        if (snakePosition.y > 0) {
            snakePosition.y--;
        }
    }
    if (event.key === 'a') {
        if (snakePosition.x > 0) {
            snakePosition.x--;
        }
    }
    if (event.key === 's') {
        if (snakePosition.y + 1 < world.height) {
            snakePosition.y++;
        }
    }
    if (event.key === 'd') {
        if (snakePosition.x + 1 < world.width) {
            snakePosition.x++;
        }
    }

    snakeDOM.style.top = (snakePosition.y * cellSize) + 'px';
    snakeDOM.style.left = (snakePosition.x * cellSize) + 'px';

    if (snakePosition.x === chickenPosition.x
        && snakePosition.y === chickenPosition.y) {
        console.log('PAGAVAU!!!');

        randomChickenPosition();

        chickenDOM.style.top = (chickenPosition.y * cellSize) + 'px';
        chickenDOM.style.left = (chickenPosition.x * cellSize) + 'px';
    }
});

formDOM.addEventListener('submit', event => {
    event.preventDefault();

    world.width = +widthDOM.value;
    world.height = +heightDOM.value;

    renderWorld();
});