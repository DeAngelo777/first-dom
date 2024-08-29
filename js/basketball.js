import { header } from './header.js';
header('basketball');

const calcSectionDOM = document.getElementById('calc');
const minusDOM = calcSectionDOM.querySelector('.minus');
const plusDOM = calcSectionDOM.querySelector('.plus');
const numberDOM = calcSectionDOM.querySelector('.number');

let count = 0;
let countSveciai = 0;
let countNamai = 0;


function up() {
    numberDOM.textContent = ++count;
}

function down() {
    numberDOM.textContent = --count;
}

minusDOM.addEventListener('click', down);
plusDOM.addEventListener('click', up);


//  Home Guests

const namaiSectionDOM = document.getElementById('leaderboard');


function addOne() {
    namaiSumaDOM.textContent = ++countNamai;
}

function addTwo() {
    namaiSumaDOM.textContent = countNamai = countNamai +2;
}

function addThree() {
    namaiSumaDOM.textContent = countNamai = countNamai +3;
}

function addOneG() {
    sveciaiSumaDOM.textContent = ++countSveciai;
}

function addTwoG() {
    sveciaiSumaDOM.textContent = countSveciai = countSveciai +2;
}

function addThreeG() {
    sveciaiSumaDOM.textContent = countSveciai = countSveciai +3;
}



const addDOM = namaiSectionDOM.querySelector('.plusvienas');
const addTwoDOM = namaiSectionDOM.querySelector('.plusdu');
const addThreeDOM = namaiSectionDOM.querySelector('.plustrys');

const namaiSumaDOM = namaiSectionDOM.querySelector('.sveciai');
const sveciaiSumaDOM = namaiSectionDOM.querySelector('.namai');


addDOM.addEventListener('click', addOne);
addTwoDOM.addEventListener('click', addTwo);
addThreeDOM.addEventListener('click', addThree);
// Guests
const addGuestsOneDOM = namaiSectionDOM.querySelector('.guests:first-child');
const addGuestsTwoDOM = namaiSectionDOM.querySelector('.guests:nth-child(2)');
const addGuestsThreeDOM = namaiSectionDOM.querySelector('.guests:last-child');

addGuestsOneDOM.addEventListener('click', addOneG);
addGuestsTwoDOM.addEventListener('click', addTwoG);
addGuestsThreeDOM.addEventListener('click', addThreeG);