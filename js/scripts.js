/* Selecao global */
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".sidebar nav ul li");

/* Scroll */
window.onscroll = () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        
        // Verifica se a posição do scroll é maior ou igual ao topo da seção menos um offset
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    // Verifica se chegou ao final da página
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
        current = "contato";
    }

    // Update sidebar
    navLi.forEach((li) => {
        li.classList.remove("active");
        
        // Verifica se o link contém o ID da seção atual
        if (li.querySelector('a').getAttribute("href").includes(current)) {
            li.classList.add("active");
        }
    });
};