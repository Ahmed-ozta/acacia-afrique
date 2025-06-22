
import '../styling/identite.css';
import "../styling/expertise.css"
import Header from '../components/Header';
import Footer from '../components/Footer';
function Integration() {

    return (
        <>
            <Header />
            <div className="identite-hero">

                <h1>Votre partenaire de confiance​ en <br />transformation digitale​</h1>
            </div>
            <div className="identite-content-container">
                <div className="identite-content">
                    <div className="who-we-are-text  expertise-text ">
                        <h3>Intégration</h3>
                        <p>Notre service d'intégration garantit une mise en place efficace des solutions choisies. De l'intégration de Sage à la configuration de solutions complémentaires, notre équipe technique assure une transition sans heurts, avec une attention particulière portée à la sécurité des données et à l'alignement avec vos processus existants.</p>
                        <button><span>Contactez-nous</span></button>
                    </div>
                    <div className="who-we-are-image expertise-image">
                        <img src="/acacia-afrique/integration.jpg" alt="makhedamach" />
                        {/* <div class="image-gradient"></div> */}

                    </div>
                </div>

            </div>
            <div className='separator'></div>
            <Footer />
        </>)
}
export default Integration;