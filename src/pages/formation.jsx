
import '../styling/identite.css';
import "../styling/expertise.css"
import Header from '../components/Header';
import Footer from '../components/Footer';
function Formation() {

    return (
        <>
            <Header />
            <div className="identite-hero">

                <h1>Votre partenaire de confiance​ en <br />transformation digitale​</h1>
            </div>
            <div className="identite-content-container">
                <div className="identite-content">
                    <div className="who-we-are-text  expertise-text ">
                        <h3>Formation​</h3>
                        <p> Pour assurer une transition fluide et efficace vers de nouveaux systèmes, Acacia propose des programmes de formation adaptés à tous les niveaux de compétence au sein de votre organisation. Nos formateurs spécialisés vous aident à maîtriser les solutions Sage et autres outils de gestion, assurant ainsi une utilisation optimale et une autonomie accrue de votre équipe.</p>
                        <button><span>Contactez-nous</span></button>
                    </div>
                    <div className="who-we-are-image expertise-image">
                        <img src="public/formation.jpg" alt="makhedamach" />
                        {/* <div class="image-gradient"></div> */}

                    </div>
                </div>

            </div>
            <div className='separator'></div>
            <Footer />
        </>)
}
export default Formation;