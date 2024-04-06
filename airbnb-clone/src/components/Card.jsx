import "../components/Card.css";
import star from "../assets/star.png";

function Card(props) {
  console.log(props);
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card__badge">{badgeText}</div>}
      <img
        src={`../images/${props.item.coverImg}`}
        alt=""
        className="card__image"
      />
      <div className="card__stats">
        <img src={star} alt="" className="card__star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <h2 className="card__description">{props.item.title}</h2>
      <p className="card__price">
        <span className="bold">From {props.item.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
