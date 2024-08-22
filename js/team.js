const teamSectionDom = document.getElementById('team');

const teamMembers = ['Jonas', "Marytė", "Aldona", "Juozapas"];

let membersHTML = '';

for (const name of teamMembers){
    membersHTML += `<li class="member">${name}</li>`;
}


teamSectionDom.innerHTML = `<ul>${membersHTML}</ul>`;


const membersListDOM = document.getElementsByClassName('member');
console.log(membersListDOM);

for (const memberDOM of membersListDOM) {
        memberDOM.innerText = `----- ` + memberDOM.innerText;
    }

// Failas: header.js
// - jis iskvieciamas kiekvienam puslapyje
// - jame yra funkcija Headers()
// - ji sugenuoroja normalu headeri

{/* 
<header>
    <img>
        <nav>
            <a></a>
            <a></a>
            <a></a>
        </nav>
    </img>
</header> */}

// - istatome i HTML ir isitikiname, jog galime naviguoti po projekto puslapius