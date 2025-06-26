import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "../styling/footer.css"
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <Link to="/"><img src="/acacia-afrique/logo-acacia.png" alt="logo" id="big-device" /></Link>
                    <Link to="/"><img src="/acacia-afrique/ASS-LOGO---fond-couleur.png" alt="logo" id="small-device" />
                    </Link>
                </div>
                <div className="links-container">
                    <ul>
                        <li><a><Link to="/identite">Identité</Link></a></li>
                        <li><a><HashLink smooth to="/#service">Services</HashLink></a></li>
                        <li><a><HashLink smooth to="/#solution">Solutions</HashLink></a></li>
                        <li><a><Link to="/contact">Contactez-nous</Link></a></li>
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