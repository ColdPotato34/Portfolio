const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".sidebar nav ul li");
const hackerTitles = document.querySelectorAll(".hacker-title");
const typingElement = document.querySelector(".typing-effect");

// Lista de caracteres para o efeito Matrix
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?";

/* Função Glitch Contínuo */
const startContinuousGlitch = (target, originalText, restoreHTML) => {
    // Verifica se é o título da home 
    const isHomeTitle = !!restoreHTML;
    if (!restoreHTML) restoreHTML = originalText;

    setInterval(() => {
        let textArray = originalText.split('');
        
        // Loop para trocar 2 caracteres aleatórios
        for (let i = 0; i < 2; i++) {
             const randomIndex = Math.floor(Math.random() * originalText.length);
             // Evita trocar espaços em branco
             if (textArray[randomIndex] === ' ') continue;
             const randomChar = letters[Math.floor(Math.random() * letters.length)];
             textArray[randomIndex] = randomChar;
        }
        
        // Se for o título da Home, aplica a classe verde durante o glitch
        if (isHomeTitle) {
            target.classList.add('typing-highlight');
        }

        // Aplica o glitch
        target.innerText = textArray.join('');
        
        // Volta ao normal restaurando o HTML e removendo a classe temporária
        setTimeout(() => { 
             if (isHomeTitle) {
                 target.classList.remove('typing-highlight');
             }
             target.innerHTML = restoreHTML; 
        }, 150);
    }, 3000); 
}

/* Digitação Home */
function typeWriter(element) {
    if (!element) return;
    const text = element.getAttribute('data-text');
    let i = 0; 
    let highlightStarted = false; 
    element.innerHTML = ""; 

    function typing() {
        if (i < text.length) {
            let char = text.charAt(i);
            
            if (text.substring(i).startsWith("Caio José")) { 
                highlightStarted = true; 
                element.innerHTML += '<span class="typing-highlight">'; 
            }
            
            if (highlightStarted && element.lastElementChild) { 
                element.lastElementChild.innerHTML += char; 
            } else { 
                element.innerHTML += char; 
            }
            
            // Fecha a tag verde
            if (highlightStarted && (char === ',' || i === text.length - 1)) { 
                 highlightStarted = false; 
                 if(char === ',') { element.innerHTML += '</span>'; } 
            }

            i++; 
            setTimeout(typing, Math.random() * 100 + 50); 
        } else {
            // Passa o innerHTML atual para ser restaurado depois do glitch
            setTimeout(() => {
                startContinuousGlitch(element, text, element.innerHTML);
            }, 1000);
        }
    }
    setTimeout(typing, 1000); 
}
typeWriter(typingElement);

/* Matrix nos Títulos */
const decodeEffect = (event) => {
    const target = event.target; 
    let iterations = 0; 
    const originalText = target.dataset.value;

    const interval = setInterval(() => {
        target.innerText = originalText.split("").map((letter, index) => {
            if(index < iterations) { return originalText[index]; } 
            return letters[Math.floor(Math.random() * letters.length)];
        }).join("");
        
        if(iterations >= originalText.length){ 
            clearInterval(interval); 
            // Títulos comuns não precisam de restoreHTML especial
            startContinuousGlitch(target, originalText); 
        }
        iterations += 1 / 3; 
    }, 30);
}

const titleObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => { 
        if (entry.isIntersecting) { 
            decodeEffect(entry); 
            observer.unobserve(entry.target); 
        } 
    });
}, { threshold: 0.5 });

hackerTitles.forEach(title => { titleObserver.observe(title); });

/* Reveal das Seções (Fade In) */
const sectionRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { 
            entry.target.classList.add('section-visible'); 
        } else if (entry.target.id !== 'home') { 
            entry.target.classList.remove('section-visible'); 
        }
    });
}, { root: null, threshold: 0.1 });

sections.forEach(section => { sectionRevealObserver.observe(section); });

/* Sidebar Ativa (Scroll Spy) */
window.onscroll = () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) { 
            current = section.getAttribute("id"); 
        }
    });
    
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) { 
        current = "contato"; 
    }
    
    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.querySelector('a').getAttribute("href").includes(current)) { 
            li.classList.add("active"); 
        }
    });
};