import { Link, NavLink } from "react-router-dom"
import Homepage from "./Homepage"
import BookingPage from "./BookingPage"


export default function Nav(){
    return (
        <nav>
            <img src={require('../assets/Logo.png')} alt="Little Lemon Logo"/>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><a href="/">About</a></li>
                <li><NavLink to="/BookingPage" data-testid="bookingsLink">Reservations</NavLink></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </nav>
    )
}