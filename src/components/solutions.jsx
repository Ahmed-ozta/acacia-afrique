import '../styling/solutions.css'
import Solution from './solution'
function Solutions() {
    return (
        <div className="solutions-div">
            <div className="solutions-container" id="solution">

                <h2><span className='light-text'>Accélérez votre entreprise avec <br />​ nos </span> solutions innovantes</h2>
                <p>Une gamme d'outils innovants qui vous offrent une gestion d'entreprise optimale.<br />De la comptabilité à l'analyse des données, notre suite complète vous permet<br />d'atteindre vos objectifs avec efficacité.​</p>

                <div className="solutions-grid">
                    <Solution />
                    <Solution />
                    <Solution />
                    <Solution />

                </div>

            </div>


        </div>
    )
}
export default Solutions