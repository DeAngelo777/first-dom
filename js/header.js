// export function header2(currentHref) {
//     const navData = [
//         {
//             href: 'first-dom',
//             text: 'Pagrindinis',
//         },
//         {
//             href: 'first-dom/services',
//             text: 'Paslaugos',
//         },
//         {
//             href: 'first-dom/team',
//             text: 'Komanda',
//         },
//         {
//             href: 'first-dom/basketball',
//             text: 'Krepšinis',
//         },
//     ];

//     let navHTML = '';

//     for (const link of navData) {
//         let classes = '';

//         if (currentHref === link.href) {
//             classes = 'link active';
//         } else {
//             classes = 'link';
//         }

//         navHTML += `<a class="${classes}" href="/${link.href}">${link.text}</a>`;
//     }

//     const headerHTML = `
//         <header class="header">
//             <img class="logo" src="/first-dom/images/logo.png" alt="logo">
//             <nav class="nav">${navHTML}</nav>
//         </header>`;

//     document.body.insertAdjacentHTML('afterbegin', headerHTML);
// }

export function header(currentHref) {
    const data = [
        { href: '', text: 'Pagrindinis' },
        { href: 'first-dom/services', text: 'Paslaugos' },
        { href: 'first-dom/team', text: 'Komanda' },
        { href: 'first-dom/basketball', text: 'Krepšinis' },
        { href: 'first-dom/snake', text: 'Gyvatele' },


    ];

    const linkHTML = [];

    for (const { href, text } of data) {
        linkHTML.push(
            `<a class="link ${currentHref === href ? 'active' : ''}" href="../${href}">${text}</a>`
        );
    }

    const HTML = `<header class="header">
            <img class="logo" src="/first-dom/images/logo.png" alt="logo">
            <nav class="nav">${linkHTML.join('')}</nav>
        </header>`;

    document.body.insertAdjacentHTML('afterbegin', HTML);
}