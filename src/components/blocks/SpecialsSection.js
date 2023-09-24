import Special from "./Special"

export default function SpecialsSection (){

    let currSpecials = [
        {
            name: "Greek Salad",
            price: 12.99,
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            photo: "greekSalad.jpg"
        },
        {
            name: "Bruschetta",
            price: 5.99,
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            photo: "bruchetta.svg"
        },
        {
            name: "Lemon Dessert",
            price: 5.00,
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            photo: "lemonDessert.jpg"
        },
    ]

    let specialsList = currSpecials.map((item)=>{
        return <Special special={item}/>
    })

    return (
        <div id="specials">
            <div id="specialsTop">
                <h3>Specials</h3>
                <button>Online Menu</button>
            </div>
            <div id="specialsRow">
                {specialsList}
            </div>
        </div>
    )
}