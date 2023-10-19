export default function ReviewCard (props){

    let star = "*";
    let starArray = []
    for (let i=0;i<props.review.stars;i++){
        starArray.push(<img src={require(('../../assets/star.png'))} key={i}/>)
    }
    let ariaLabel = "Read "+props.review.name+"'s Review";
    return (
        <div id='reviewCard' className="rounded">
            <section id="reviewStars">{starArray}</section>
            <section>
                <img src={require(('../../assets/'+props.review.photo))}/>
                <span>{props.review.name}</span>
            </section>
            <section><a href="" aria-label={ariaLabel}>{"Review >"}</a></section>
            
        </div>
    )
}