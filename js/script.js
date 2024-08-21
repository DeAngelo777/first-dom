import {capitalize} from "./capitalize.js"

// 1. susirandi DOMinanti elementa 
// 2. perskaitai jame esancia informacija

// 1. susirandi DOMinanti elementa 
// 2. susikonstruoji nauja HTML (string)
// 3. HTML istatai i norima vieta, gauni nauja DOMinanti elementa

// 1. susirandi DOMinanti elementa 
// 2. ji, arba jame esanti turimi-pasalini/modifikuoji

// CRUD
// create 
// read
// update
// delete

const mainDOM= document.getElementById('home');
console.log(mainDOM);

const footerDOM= document.getElementById('main-footer');
console.log(footerDOM);

const linkDOM = document.getElementsByTagName('a');
console.log(linkDOM);

const h1 = document.getElementsByTagName('h1');
console.log(h1);

const h2 = document.getElementsByTagName('h2');
console.log(h2);

console.log(h2[4]);

console.log(document.getElementsByClassName('red'));

console.log(document.getElementsByClassName('section-title'));

console.clear();

const sectionTitleDOM = document.getElementsByClassName('section-title');
console.log(sectionTitleDOM);
console.log(sectionTitleDOM.length);

const text1 = sectionTitleDOM[0].textContent;
const text2 = sectionTitleDOM[0].textContent;

console.log(text1);
console.log(text2);

console.log(text1 === text2);
console.log(text1.trim() === text2);



// for (let i = 0; i < sectionTitleDOM.length; i++) {
//     console.log(i, sectionTitleDOM[i]);
// }

// for (const titleDOM of sectionTitleDOM){
//     console.log(titleDOM);
// }

const lowerTexts = [];

for (const titleDOM of sectionTitleDOM) {
    lowerTexts.push(titleDOM.textContent.toLowerCase());
    titleDOM.textContent = capitalize(titleDOM.textContent);
}

console.log(lowerTexts);


// capitalize(true);
// capitalize(148562);
// capitalize([]);
// capitalize({});
// capitalize();