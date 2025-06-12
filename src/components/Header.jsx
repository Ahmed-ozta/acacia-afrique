import { useEffect, useRef } from "react";
import "../styling/header.css"

function Header() {

    const headerRef = useRef(null);

    useEffect(() => {
        headerRef.current.classList.add("default_header");
        // window.addEventListener("scroll", () => {

        //     if (window.scrollY >= 100) {
        //         headerRef.current.classList.add("scrolled_header");
        //         headerRef.current.classList.remove("default_header");
        //         console.log("hello world")
        //     } else {
        //         headerRef.current.classList.remove("scrolled_header");
        //         headerRef.current.classList.add("default_header");
        //     }
        // })
    })

    return (

        < header ref={headerRef} >
            <div className="headerContainer">
                <div className="logo-header">
                    <img src="logo-acacia.png" alt="logo acacia afrique" />
                </div>
                <nav className="navbar">
                    <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">Identité</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Solutions</a></li>
                        <li><a href="#">Contactez-nous​</a></li>
                    </ul>
                </nav>
            </div>

        </header >
        
    )
}

export default Header;