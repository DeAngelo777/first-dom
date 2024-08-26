import { header } from './header.js';
header('basketball');

const calcSectionDOM = document.getElementById('calc');
const minusDOM = calcSectionDOM.querySelector('button');
const plusDOM = calcSectionDOM.querySelector('button:last-child');
const numberDOM = calcSectionDOM.querySelector('.number');

let count = 0;

function up() {
    numberDOM.textContent = ++count;
}

function down() {
    numberDOM.textContent = --count;
}

minusDOM.addEventListener('click', down);
plusDOM.addEventListener('click', up);