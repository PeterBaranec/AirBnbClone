import "../components/Navbar.css"
import logo from "../assets/airbnb-logo.png"

function Navbar() {
    return (
        <header>
            <nav className="nav"><img src={logo} alt="AirBnb logo" className="nav__logo"/></nav>
        </header>
    )
}

export default Navbar