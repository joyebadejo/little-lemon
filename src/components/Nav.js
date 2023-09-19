import { Link } from "react-router-dom"
import Homepage from "./Homepage"
import BookingPage from "./BookingPage"


export default function Nav(){
    return (
        <nav>
            <img src="" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="">About</a></li>
                <li><Link to="/BookingPage">Reservations</Link></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </nav>
    )
}