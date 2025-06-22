
import '../styling/solution.css'
function Solution({ title,text }) {


    return (<div className='box' >
        <div className='box-content'>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
        <div className='box-image'>
            <img src="/acacia-afrique/box-image.jpg" alt="solution image" />
        </div>

    </div>);
}
export default Solution;