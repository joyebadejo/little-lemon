import ReviewCard from "./ReviewCard"

export default function CustomersSay (){

    let latestReviews = [
        {
            name: "Mark",
            stars: 4,
            review: "",
            photo:"mark.jpeg"
        },
        {
            name: "Jasmine",
            stars: 5,
            review: "",
            photo:"jasmine.jpeg"
        },
        {
            name: "Phillipe",
            stars: 5,
            description: "",
            review: "",
            photo:"phillipe.jpeg"
        },
        {
            name: "Miriam",
            stars: 4,
            description: "",
            review: "",
            photo:"miriam.jpeg"
        },
    ]

    let reviewList = latestReviews.map((review)=>{
        return <ReviewCard review={review} key={review.name}/>
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