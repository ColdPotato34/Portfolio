/* Selecao global */
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".sidebar nav ul li");

/* Scroll */
window.onscroll = () => {
    let current = "";

    // Lógica para detectar seção visível
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Compensação para ativar a seção um pouco antes do topo (1/3 da altura)
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    // update sidebar
    navLi.forEach((li) => {
        li.classList.remove("active");
        
        // cerificar link e secao atual
        if (li.querySelector('a').getAttribute("href").includes(current)) {
            li.classList.add("active");
        }
    });
};