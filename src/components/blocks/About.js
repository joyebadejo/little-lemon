export default function About (){

    return (
        <div id="about-section">
            <div className='left'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div id="about-images">
            <img src={require('../../assets/restaurantChefB.jpg')}/>
                <img src={require('../../assets/MarioAndAdrianA.jpg')}/>

            </div>
        </div>
    )
}