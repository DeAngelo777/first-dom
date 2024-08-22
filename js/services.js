const sectionListDOM = document.getElementsByTagName('section');


if (sectionListDOM.length === 0) {
    console.error('Nepavayko rasti "section elemento');

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

const emptySectionDom = sectionListDOM[1];
emptySectionDom.innerHTML = '<div style="color: green; font-size: 25px;">Labas rytas, Lietuva</div>'