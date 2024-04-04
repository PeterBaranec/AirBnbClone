import "../components/Card.css";
import star from "../assets/star.png";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="" className="card__image" />
      <div className="card__stats">
        <img src={star} alt="" className="card__star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <h2 className="card__description">{props.title}</h2>
      <p className="card__price">
        <span className="bold">From {props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
