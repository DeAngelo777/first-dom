import { header } from "./header.js";
header('services');

const sectionListDOM = document.getElementsByTagName('section');

if (sectionListDOM.length === 0) {
    console.error('Nepavyko rasti "section" elemento');
} else {
    const sectionDOM = sectionListDOM[0];
    const listHTML = `
        <ul>
            <li>Design</li>
            <li>UX</li>
            <li>Programming</li>
            <li>Management</li>
        </ul>`;

    sectionDOM.innerHTML = listHTML;
}

const emptySectionDOM = sectionListDOM[1];
emptySectionDOM.innerHTML = '<div style="color: green; font-size: 30px;">Labas rytas, Lietuva!</div>';