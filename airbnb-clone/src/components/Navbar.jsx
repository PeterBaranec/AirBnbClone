import "../components/Navbar.css"
import logo from "../assets/airbnb-logo.png"
import photo from "../assets/photo-grid.png"

function Navbar() {
    return (
        <header>
            <nav className="nav"><img src={logo} alt="" className="nav-logo"/></nav>
            <img src={photo} alt="" className="nav-image" />
            <h1 className="nav-title">Online Experiences</h1>
            <p className="description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </header>
    )
}

export default Navbar