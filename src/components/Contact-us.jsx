import '../styling/contact.css'
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div className="Contact-component">
            <div className="Contact-container">
                <div className='contact-div'>
                    <h3>Prêt à avancer ? Passez​ à la prochaine étape​</h3>
                    <p>Profitez d'un service exceptionnel, d'une technologie de pointe <br /> et d'un soutien personnalisé. Commencez votre parcours dès aujourd'hui.</p>
                    <button><span><Link to="/contact">Contactez-nous</Link></span></button>
                </div>
            </div>

        </div>

    )
}

export default Contact;