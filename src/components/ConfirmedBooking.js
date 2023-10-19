import { Fragment } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { Link, NavLink } from "react-router-dom"
    
    export default function ConfirmedBooking () {

        const [queryParameters] = useSearchParams()
        const name = queryParameters.get("name")
        const date = queryParameters.get("date")
        const time = queryParameters.get("time")

        return (
            <>
                <div id="confirmation">
                    <p>Sweet! Your reservation is confirmed, {name}.</p>
                    <p>We'll see you {date} at {time}!</p>
                </div>
                <div id="confirmationBtns">
                    <NavLink to="/"><button>Return Home</button></NavLink>
                </div>
            </>

        )
    }