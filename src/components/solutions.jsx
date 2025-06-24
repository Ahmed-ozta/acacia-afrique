import '../styling/solutions.css'
import Solution from './Solution.jsx'
function Solutions() {
    return (
        <div className="solutions-div">
            <div className="solutions-container" id="solution">

                <h2><span className='light-text'>Accélérez votre entreprise avec <br />​ nos </span> solutions innovantes</h2>
                <p>Une gamme d'outils innovants qui vous offrent une gestion d'entreprise optimale.<br />De la comptabilité à l'analyse des données, notre suite complète vous permet<br />d'atteindre vos objectifs avec efficacité.​</p>

                <div className="solutions-grid">
                    <Solution title="Solution ERP complète" text="Acacia Afrique propose Sage X3, un système ERP flexible et évolutif pour les entreprises de taille moyenne et grande, offrant une visibilité complète sur toutes les fonctions de l'entreprise." img='/acacia-afrique/box-image.jpg' />
                    <Solution title="Gestion Comptable et Commerciale" text="Optez pour Sage 100C, une solution complète de gestion comptable et commerciale qui simplifie vos opérations financières et améliore votre productivité." img='/acacia-afrique/gestion.jpg' />
                    <Solution title="Ressources Humaines" text="Acacia Afrique propose Sage X3, un système ERP flexible et évolutif pour les entreprises de taille moyenne et grande, offrant une visibilité complète sur toutes les fonctions de l'entreprise." img='/acacia-afrique/resource.jpg' />
                    <Solution title="Business Intelligence et Reporting" text="Acacia Afrique propose Sage X3, un système ERP flexible et évolutif pour les entreprises de taille moyenne et grande, offrant une visibilité complète sur toutes les fonctions de l'entreprise." img='/acacia-afrique/int.jpg' />

                </div>

            </div>


        </div>
    )
}
export default Solutions