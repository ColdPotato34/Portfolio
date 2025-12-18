export default function Outdoor() {
    const section = document.createElement('section');
    section.className = 'outdoor-section';
    
    section.style.backgroundImage = "url('../imagens/Outdoor.webp')";

    section.innerHTML = `
        <h1 class="outdoor-title">The Great Outdoors</h1>
        <p class="outdoor-subtitle">Wander often. Wonder always.</p>
        <div style="margin-top: 30px; font-size: 30px;">▶</div> `;
    
    return section;
}