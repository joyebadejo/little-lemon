export default function Special (props){

    return (
        <div className="specialCard rounded">
            <img src={require(('../../assets/'+props.special.photo))} alt={props.special.name}/>
            <section id="titleRow">
                <span>{props.special.name}</span>
                <span>${props.special.price}</span>
            </section>
            <p>
                {props.special.description}
            </p>
            <p id="orderLink">
                <a href="">Order a delivery</a>
            </p>
        </div>
    )
}