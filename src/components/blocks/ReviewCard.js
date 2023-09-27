export default function ReviewCard (props){

    let star = "*";
    let starArray = []
    for (let i=0;i<props.review.stars;i++){
        starArray.push(star);
    }
    return (
        <div id='reviewCard' className="rounded">
            <section>{starArray}</section>
            <section>
                <img src={require(('../../assets/'+props.review.photo))}/>
                <span>{props.review.name}</span>
            </section>
            <section><a href="">{"Review >"}</a></section>
            
        </div>
    )
}