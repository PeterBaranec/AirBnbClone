import "../components/Navbar.css"
import logo from "../assets/airbnb-logo.png"
import photo from "../assets/photo-grid.png"

function Navbar() {
    return (
        <header>
            <nav className="nav"><img src={logo} alt="AirBnb logo" className="nav__logo"/></nav>
            <img src={photo} alt="photos" className="nav__image" />
            <h1 className="nav__title">Online Experiences</h1>
            <p className="nav__description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </header>
    )
}

export default Navbar