
import '../styling/identite.css';
import "../styling/expertise.css"
import Header from '../components/Header';
import Footer from '../components/Footer';
function Expertise() {

    return (
        <>
            <Header />
            <div className="identite-hero">

                <h1>Votre partenaire de confiance​ en <br />transformation digitale​</h1>
            </div>
            <div className="identite-content-container">
                <div className="identite-content">
                    <div className="who-we-are-text  expertise-text ">
                        <h3>Expertise & Conseil​</h3>
                        <p> Chez Acacia, nous vous offrons bien plus que des solutions techniques ; nous vous guidons à travers les complexités de la transformation numérique avec des conseils sur mesure. Notre équipe d'experts analyse en profondeur vos processus d'affaires pour identifier les opportunités d'amélioration et vous propose des stratégies personnalisées qui correspondent à vos objectifs spécifiques.</p>
                        <button><span>Contactez-nous</span></button>
                    </div>
                    <div className="who-we-are-image expertise-image">
                        <img src="public\expertise.jpg" alt="makhedamach" />
                        {/* <div class="image-gradient"></div> */}

                    </div>
                </div>

            </div>
            <div className='separator'></div>
            <Footer />
        </>)
}
export default Expertise;