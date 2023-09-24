import ReviewCard from "./ReviewCard"

export default function CustomersSay (){

    let latestReviews = [
        {
            name: "Mark",
            stars: 4,
            review: "",
            photo:"greekSalad.jpg"
        },
        {
            name: "Jasmine",
            stars: 5,
            review: "",
            photo:"bruchetta.svg"
        },
        {
            name: "Phillipe",
            stars: 5,
            description: "",
            review: "",
            photo:"bruchetta.svg"
        },
        {
            name: "Miriam",
            stars: 4,
            description: "",
            review: "",
            photo:"bruchetta.svg"
        },
    ]

    let reviewList = latestReviews.map((review)=>{
        return <ReviewCard review={review}/>
    })

    return (
        <div id="testimonials">
            <div>
                <h3>Testimonials</h3>
            </div>
            <div id="reviewRow">
                {reviewList}
            </div>
        </div>
    )
}