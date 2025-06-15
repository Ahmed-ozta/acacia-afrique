import "../styling/footer.css"
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <img src="public/logo-acacia.png" alt="logo" />
                </div>
                <div className="links-container">
                    <ul>
                        <li><a href="">identité</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Solutions</a></li>
                        <li><a href="">Contactez-nous</a></li>
            
                    </ul>
                </div>
                <div className="social-media">
                    <h3>Contactez-nous</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>
                </div>



            </div>

        </footer>
    )
}
export default Footer;

{/* <ul>
                            <li><a href="">Solution ERP complète</a></li>
                            <li><a href="">Gestion Comptable et Commerciale</a></li>
                            <li><a href="">Ressources Humaines</a></li>
                            <li><a href="">BI et Reporting</a></li>
                        </ul> */}
{/* <ul>
                            <li><a href="">Consultation et Expertise</a></li>
                            <li><a href="">Formation Professionnelle</a></li>
                            <li><a href=
                            
                            {/* <ul>
                            <li><a href="">Qui sommes-nous ?</a></li>
                            <li><a href="">Notre Vision</a></li>
                        </ul> */}