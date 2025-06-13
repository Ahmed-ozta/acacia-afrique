import "../styling/services.css"
import Service from "./Service";
function Services() {

    return (
        <div className="services-div">
            <div className="services-container">

                <h2><span className="light-text">Les multiples facettes<br />​ de nos </span><span className="text-green">services</span></h2>

                <p>Explorez nos offres pour découvrir comment nous pouvons vous aider<br /> à atteindre vos objectifs avec confiance et succès.​</p>

                <div className="service-cards-container">
                    <Service />
                    <Service />
                    <Service />

                </div>

            </div>


        </div>
    )
}
export default Services;