export default function HeroSection (){

    return (
        <div id="hero-section">
            <div>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ipsum</p>
                <button>Reserve a table</button>
            </div>
            <div>
                <img src={require('../../assets/restauranfood.jpg')}/>
            </div>
        </div>
    )
}