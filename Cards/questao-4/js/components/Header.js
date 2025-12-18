export default function Header() {
    const header = document.createElement('header');
    
    //pin
    const pinIcon = `
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
        </svg>
    `;

    // lupa 
    const searchIcon = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="margin-right:5px; vertical-align: middle;">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    `;

    header.innerHTML = `
        <nav class="nav-left">
            <a href="#">About</a>
            <a href="#">Explore</a>
        </nav>
        
        <div class="header-icon">
            ${pinIcon}
        </div>

        <nav class="nav-right">
            <a href="#">Journal</a>
            <a href="#">${searchIcon} Search</a>
        </nav>
    `;
    return header;
}