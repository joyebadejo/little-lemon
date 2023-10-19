import { Link } from "react-router-dom"

export default function HeroSection (){

    return (
        <div id="hero-section">
            <div>
                <div>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/BookingPage"><button>Reserve a table</button></Link>
                </div>
                <div>
                    <img src={require('../../assets/restauranfood.jpg')}/>
                </div>
            </div>
        </div>
    )
}