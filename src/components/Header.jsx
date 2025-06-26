
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "../styling/header.css"

function Header() {
    const headerRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY >= 100;
            setIsScrolled(scrolled);

            if (headerRef.current) {
                if (scrolled) {
                    headerRef.current.classList.add("scrolled_header");
                    headerRef.current.classList.remove("default_header");
                } else {
                    headerRef.current.classList.remove("scrolled_header");
                    headerRef.current.classList.add("default_header");
                }
            }
        };


        // Set initial class
        if (headerRef.current) {
            headerRef.current.classList.add("default_header");
        }

        window.addEventListener("scroll", handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSolutionClick = (e) => {
        if (location.pathname !== '/') {
            e.preventDefault();
            navigate('/', { replace: true });
            // Small delay to ensure navigation completes before scrolling
            setTimeout(() => {
                const element = document.getElementById('solution');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
        // If already on home page, let the default anchor behavior work
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header ref={headerRef}>
            <div className="headerContainer">
                <div className="logo-header">
                    <Link to="/"><img src="/acacia-afrique/logo-acacia.png" alt="logo acacia afrique" /></Link>
                </div>
                <nav className="navbar desktop-nav">
                    <ul>
                        <li><a onClick={closeMenu}><Link to="/">Accueil</Link></a></li>
                        <li><a onClick={closeMenu}><Link to="/identite">Identité</Link></a></li>
                        <li><a onClick={closeMenu}><HashLink smooth to="/#service">Services</HashLink></a></li>
                        <li><a onClick={() => { closeMenu(); handleSolutionClick() }}><HashLink smooth to="/#solution">Solutions</HashLink></a></li>
                        <li><a onClick={closeMenu}><Link to="/contact">Contactez-nous</Link></a></li>
                    </ul>
                </nav>
                <button
                    className="hamburger-btn"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <div className={`mobile-nav-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

            {/* Mobile Navigation Menu */}
            <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><a onClick={closeMenu}><Link to="/">Accueil</Link></a></li>
                    <li><a onClick={closeMenu}><Link to="/identite">Identité</Link></a></li>
                    <li><a onClick={closeMenu}><HashLink smooth to="/#service">Services</HashLink></a></li>
                    <li><a onClick={() => { closeMenu(); handleSolutionClick() }}><HashLink smooth to="/#solution">Solutions</HashLink></a></li>
                    <li><a onClick={closeMenu}><Link to="/contact">Contactez-nous</Link></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;