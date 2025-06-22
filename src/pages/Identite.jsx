import Footer from "../components/Footer";
import Header from "../components/Header";
import '../styling/identite.css';
import { FaArrowRight } from 'react-icons/fa';
function Identite() {



    return (
        <div className="identite-container">

            <Header />
            <div className="identite-hero">

                <h1>Votre partenaire de confiance​ en <br />transformation digitale​</h1>
            </div>
            <div className="identite-content-container">
                <div className="identite-content">
                    <div className="who-we-are-text">
                        <h3>ACACIA, se distingue comme un leader en solutions de gestion Sage et bien plus encore.​</h3>
                        <p> Nous intégrons des systèmes de gestion avancés, offrons une expertise en cartographie des processus et mettons en œuvre des solutions adaptées à vos besoins spécifiques. Notre mission est de fournir les outils et stratégies nécessaires pour optimiser vos opérations et stimuler la croissance de votre entreprise.</p>
                        <button><span>Contactez-nous</span></button>
                    </div>
                    <div className="who-we-are-image">
                        <img src="/acacia-afrique/identite-image.png" alt="makhedamach" />

                    </div>
                </div>

            </div>
            <div className="identite-content-container">
                <div className="identite-vision">
                    <div className="vision-text">
                        <h3>Notre vision est ​ de propulser nos clients​ vers le succès​</h3>
                        <p>Nous nous engageons à accompagner nos clients à chaque étape de leur parcours vers l'excellence.</p>
                        <div className="vision-service" >
                            <FaArrowRight />
                            <h4>Consultation et Expertise</h4>
                        </div>
                        <div className="vision-service">
                            <FaArrowRight />
                            <h4>Formation Professionnelle</h4>
                        </div>
                        <div className="vision-service">
                            <FaArrowRight />
                            <h4>Solutions d'Intégration</h4>
                        </div>

                    </div>
                    <div className="vision-image">
                        <img src="/acacia-afrique/vision-image.jpg" alt="makhedamach" />

                    </div>
                </div>

            </div>
            <Footer />
        </div>

    )
}
export default Identite