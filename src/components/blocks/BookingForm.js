import { useState } from "react";

export default function BookingForm (props) {

    const [form, setForm] = useState({
        resDate: '',
        resTime: '',
        guests: 1,
        occasion: ''
    })
    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    const timeMenu = availableTimes.map((time)=>{
        return <option key={time}>{time}</option>
    })
    console.log(form)

    return (
        <>
            Booking Page
            <form id="bookingForm">
                <label htmlFor="resDate">Choose date</label>
                <input
                    type="date"
                    id="resDate"
                    // value={form.firstName}
                    onChange={e => {
                        setForm({
                            ...form,
                            resDate: e.target.value
                        });
                    }}
                />
                <label htmlFor="resTime">Choose time</label>
                <select 
                    id="resTime"
                    onChange={e => {
                        setForm({
                            ...form,
                            resTime: e.target.value
                        });
                    }}
                >
                    {timeMenu}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" 
                    onChange={e => {
                        setForm({
                            ...form,
                            guests: e.target.value
                        });
                    }}
                />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion"
                    onChange={e => {
                        setForm({
                            ...form,
                            occasion: e.target.value
                        });
                    }}
                >
                    <option>Just Because</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </>
    )
}