import '../styling/contact.css'
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className="Contact-component">
            <div className="Contact-container">
                <div className='contact-div'>
                    <h3>Prêt à avancer ? Passez​ à la prochaine étape​</h3>
                    <p>Profitez d'un service exceptionnel, d'une technologie de pointe <br /> et d'un soutien personnalisé. Commencez votre parcours dès aujourd'hui.</p>
                    <Link to="/contact"><button><span>Contactez-nous</span></button></Link>
                </div>
            </div>

        </div>

    )
}

export default Contact;