export default function Footer() {

    const footer = document.createElement('footer');

    footer.style.backgroundImage = "url('../imagens/Footer.jpg')";

    footer.innerHTML = `
        <p>&copy; 2017 THE GREAT OUTDOORS. All rights reserved. | ABOUT EXPLORE JOURNAL SEARCH</p>
    `;
    return footer;
}