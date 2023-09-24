export default function Special (props){

    return (
        <div className="specialCard rounded">
            <img src={require(('../../assets/'+props.special.photo))}/>
            <div id="titleRow">
                <span>{props.special.name}</span>
                <span>${props.special.price}</span>
            </div>
            <p>
                {props.special.description}
            </p>
            <div id="orderLink">
                <a link="">Order a delivery</a>
                <img src=""></img>
            </div>
        </div>
    )
}