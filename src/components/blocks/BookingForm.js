import { useState } from "react";
import { fetchAPI, submitAPI } from "../../mockAPI";
import React, { useEffect } from 'react'
import { useRef } from "react";




export default function BookingForm (props) {

    //console.log("Booking Form time props: " + props.times)

    
    let submitForm = props.submitFunc
    const dispatch = props.updateTimes;
    const dateElement = useRef();

    const [form, setForm] = useState({
        name: '',
        date: '',
        time: '',
        guests: 2,
        occasion: ''
    })

    const [touched, setTouched] = useState({
        name: false,
        date: false,
        time: false,
        guests: false
    })

    const getIsFormValid = () => {
        return (
            form.name &&
            form.date &&
            form.time &&
            form.guests>0 &&
            form.guests<11
          );
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        submitForm(form);
    }

    useEffect(() => {
        const fetchTimes = async () => {
            //console.log(dateElement.current.value)
            const data = await fetchAPI(dateElement.current.value);

            console.log("API fetched data: " + data)
            dispatch({type: 'update_times', payload: data});
        }
        fetchTimes()
            .catch(console.error);
    },[form.date])

    const [availableTimes, setAvailableTimes] = useState(props.times)

    const timeMenu = availableTimes.map((time)=>{
        return <option key={time}>{time}</option>
    })
    //console.log(form)
    //console.log(touched)
    useEffect(() => { 
        setAvailableTimes(props.times)
    },[props.times])


    const dateUpdate = (e) => {
        setForm({
            ...form,
            date: e.target.value
        });
        dispatch({type: 'update_times'}, {arg: e.target.value});
    }

  
    // return <>{submitReturn}</>

    return (
        <form id="bookingForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                data-testid="nameInput"
                required
                onChange={e => {
                    setForm({
                        ...form,
                        name: e.target.value
                    });
                }}
                onBlur={()=> setTouched({
                    ...touched,
                    name: true
                })}
            />
            {(touched.name && (form.name=='')) ? <p className="formError">Please enter your name.</p> : <p></p>}

        <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" data-testid="guestInput" required
                onChange={e => {
                    setForm({
                        ...form,
                        guests: e.target.value
                    });
                }}
                onBlur={()=> setTouched({
                    ...touched,
                    guests: true
                })}
            />
            {(touched.guests && (form.guests<0 || form.guests>11)) ? <p className="formError" data-testid="guestTest">Please enter a party size between 1 -10.</p> : <p data-testid="guestTest"></p>}


        <label htmlFor="date">Choose date</label>
            <input
                type="date"
                id="date"
                data-testid="dateInput"
                ref = {dateElement}
                required
                onChange={e => dateUpdate(e)}
                onBlur={()=> setTouched({
                    ...touched,
                    date: true
                })}
            />
            {(touched.date && (form.date=='')) ? <p className="formError">Please choose a date.</p> : <p></p>}
            
        <label htmlFor="time">Choose time</label>
            <select 
                id="time"
                required
                data-testid="timeInput"
                onChange={e => {
                    setForm({
                        ...form,
                        time: e.target.value
                    });
                }}
                onBlur={()=> setTouched({
                    ...touched,
                    time: true
                })}
            >
                {timeMenu}
            </select>
            {(touched.time && (form.time=='')) ? <p className="formError">Please choose a time.</p> : <p></p>}

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

            <input type="submit" value="Make Your reservation"  disabled={!getIsFormValid()} data-testid="submitBtn"/>
        </form>
    )
}