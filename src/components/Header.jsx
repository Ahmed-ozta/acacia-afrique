import "../styling/header.css"

function Header() {
    return (
        <header>
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

        </header>
    )
}

export default Header;