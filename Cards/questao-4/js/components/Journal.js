export default function Journal() {
    const section = document.createElement('section');
    section.className = 'journal-section';
    
    const container = document.createElement('div');
    container.className = 'container';

    // texto inicio
    container.innerHTML = `
        <div class="text-center">
            <h2 style="font-family:'Times New Roman', serif; font-size:2.5em; margin-bottom: 20px;">The Journal</h2>
            <p style="color:#a0a0a0; margin: 0 auto 40px auto; max-width: 600px; line-height: 1.6;">
                Our favorite stories about public lands and opportunities for you to get involved in protecting your outdoor experiences.
            </p>
        </div>
    `;

    // notícias
    const news = [
        {
            date: "May 30, 2017",
            title: "An Unforgettable",
            description: "If you only have one day to visit Yosemite National Park and you want to make the most out of it.",
            image: "../Imagens/Journal1.jpg"
        },
        {
            date: "May 28, 2017",
            title: "Symphonies in Steel",
            description: "Crossing the Golden Gate Bridge from San Francisco, you arrive in Marin even before landing on solid ground.",
            image: "../Imagens/Journal2.jpg"
        }
    ];

    const grid = document.createElement('div');
    grid.className = 'journal-grid';

    function createNewsCard(item) {
        const card = document.createElement('div');
        card.className = 'journal-card';
        
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="journal-img">
            <span class="journal-date" style="color: #007bff; font-weight:bold; font-size:0.7em; letter-spacing:1px; margin-bottom:10px; display:block;">
                ${item.date.toUpperCase()}
            </span>
            <h3 class="journal-title">${item.title}</h3>
            <p class="journal-desc">${item.description}</p>
        `;
        return card;
    }

    news.forEach(item => {
        grid.appendChild(createNewsCard(item));
    });

    container.appendChild(grid);
    
    // all posts
    const allPosts = document.createElement('div');
    allPosts.className = 'text-center';
    allPosts.innerHTML = `
        <a href="#" style="color: #007bff; text-decoration: none; font-size: 0.8em; font-weight: bold; letter-spacing: 1px; display: block; margin-top: 40px;">
            ALL POSTS >
        </a>
    `;
    container.appendChild(allPosts);

    section.appendChild(container);
    return section;
}