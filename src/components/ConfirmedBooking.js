    import { useParams, useSearchParams } from "react-router-dom"
    
    export default function ConfirmedBooking () {

        const [queryParameters] = useSearchParams()
        const name = queryParameters.get("name")
        const date = queryParameters.get("date")
        const time = queryParameters.get("time")

        return (
            <section id="confirmation">
                <p>Sweet! Your reservation is confirmed, {name}.</p>
                <p>We'll see you {date} at {time}!</p>
            </section>
        )
    }