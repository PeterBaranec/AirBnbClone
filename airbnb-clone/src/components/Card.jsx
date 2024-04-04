import "../components/Card.css"
import photo from "../assets/katie-zaferes.png"
import star from "../assets/star.png"

function Card() {
    return (
        <div className="card">
            <img src={photo} alt="" className="card__image"/>
            <div className="card__stats">
                <img src={star} alt="" className="card__star"/>
                <span>5.0</span>
                <span className="gray">(6)</span>
                <span className="gray">USA</span>
            </div>
            <p className="card__description">Life lessons with Katie Zaferes</p>
            <p className="card__price"><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card