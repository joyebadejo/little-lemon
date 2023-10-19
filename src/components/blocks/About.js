export default function About (){

    return (
        <div id="about-section">
            <div className='left'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div id="about-images">
            <img src={require('../../assets/restaurantChefB.jpg')} alt="Chef Mario adding finishing touches to a dish"/>
                <img src={require('../../assets/MarioAndAdrianA.jpg')} alt="Chef Mario and Adrian discussing new menu options"/>

            </div>
        </div>
    )
}