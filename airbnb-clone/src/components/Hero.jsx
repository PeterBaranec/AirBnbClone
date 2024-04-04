import "../components/Hero.css"
import photo from "../assets/photo-grid.png"

function Hero() {
    return ( 
        <section className="hero">
            <img src={photo} alt="photos" className="hero__image" />
            <h1 className="hero__title">Online Experiences</h1>
            <p className="hero__description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero