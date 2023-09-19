export default function About (){

    return (
        <div id="about-section">
            <div>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Lorem ipsum</p>
            </div>
            <div id="about-images">
                <img src={require('../../assets/MarioAndAdrianA.jpg')}/>
                <img src={require('../../assets/restaurantChefB.jpg')}/>
            </div>
        </div>
    )
}