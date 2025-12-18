import Header from './Header.js';
import Outdoor from './Outdoor.js';
import Explore from './Explore.js';
import Journal from './Journal.js';
import Footer from './Footer.js';

export default function Page() {
    const wrapper = document.createElement('div');
    
    wrapper.appendChild(Header());
    wrapper.appendChild(Outdoor());
    wrapper.appendChild(Explore());
    wrapper.appendChild(Journal());
    wrapper.appendChild(Footer());

    return wrapper;
}