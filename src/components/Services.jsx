import "../styling/services.css"
import Service from "./Service";

function Services() {
    

    return (
        <div className="services-div" id="service">
            <div className="services-container">

                <h2><span className="light-text">Les multiples facettes<br />​ de nos </span><span className="text-green">services</span></h2>

                <p>Explorez nos offres pour découvrir comment nous pouvons vous aider<br /> à atteindre vos objectifs avec confiance et succès.​</p>

                <div className="service-cards-container">
                    <Service bg_image="public/Consulting​-Expertise​.jpg" title="Consulting ​et Expertise​" text="Nous offrons des solutions sur mesure pour stimuler la croissance de votre entreprise." link="/expertise" />
                    <Service bg_image="public/service1.jpg" title='Formation​ Professionnelle​' text="Des programmes enrichissants dispensés par des formateurs qualifiés." link="/formation" />
                    <Service bg_image="public/Solutions-d'Intégration.jpg" title="Solutions​ d'Intégration" text="Simplification des processus opérationnels grâce à des solutions personnalisés." link="/integration" />

                </div>
                {/* i should change the image  */}

            </div>


        </div>
    )
}
export default Services;