export default function Footer (){
    return (
        <footer>
            <img src={require('../assets/restaurant.jpg')} alt="Little Lemon back patio dining area"/>
            <ul>    
                <li>Doormat Navigation</li>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Reservations</a></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Login</a></li>
            </ul>
            <ul>
                <li>Contact</li>
                <li>Address</li>
                <li>Phone Number</li>
                <li>E-mail</li>
            </ul>
            <ul>
                <li>Social Media Links</li>
                <li><a href="">Instagram</a></li>
                <li><a href="">TikTok</a></li>
                <li><a href="">Facebook</a></li>
                <li><a href="">Twitter</a></li>
            </ul>
        </footer>
    )
}