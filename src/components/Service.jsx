import { useNavigate } from 'react-router-dom';
import "../styling/service.css"
function Service({ bg_image, title, text, link }) {
    const navigate = useNavigate();
    // Formation​ Professionnelle​
    return (
        <div className="service-card" onClick={() => navigate(`${link}`)}>
            <div className="image-container">
                <img src={bg_image} alt="Showcase" />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}
export default Service;