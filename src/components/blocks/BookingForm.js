import { useState } from "react";
import { fetchAPI, submitAPI } from "../../mockAPI";
import React, { useEffect } from 'react'
import { useRef } from "react";


export default function BookingForm (props) {

    let submitForm = props.submitFunc
    const dispatch = props.updateTimes;
    const dateElement = useRef();

    const [form, setForm] = useState({
        name: '',
        email:'',
        date: '',
        time: '',
        guests: 0,
        occasion: ''
    })

    const [touched, setTouched] = useState({
        name: false,
        email:'',
        date: false,
        time: false,
        guests: false
    })

    const getIsFormValid = () => {
        return (
            form.name &&
            form.email &&
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

    return (
        <form id="bookingForm" className="rounded" onSubmit={handleSubmit}>
            <img src={require('../../assets/Logo.png')} alt="Little Lemon Logo"/>
            <section id="formContent">

                <h3>Select a table</h3>

                    <label htmlFor="date">Date:<span>*</span></label>
                        <input
                            type="date"
                            id="date"
                            className="rounded"
                            data-testid="dateInput"
                            ref = {dateElement}
                            required
                            onChange={e => dateUpdate(e)}
                            onBlur={()=> setTouched({
                                ...touched,
                                date: true
                            })}
                        />
                    {(touched.date && (form.date=='')) ? <p className="formError">Please choose a date.</p> : <p className="formError"></p>}

                    <label htmlFor="time">Time:<span>*</span></label>
                        <select 
                            id="time"
                            className="rounded"
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
                    {(touched.time && (form.time=='')) ? <p className="formError">Please choose a time.</p> : <p className="formError"></p>}

                    <label htmlFor="guests">Number of Guests:<span>*</span></label>
                        <input type="number" placeholder="" min="1" max="10" id="guests" className="rounded" data-testid="guestInput" required
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
                    {(touched.guests && (form.guests<1 || form.guests>10)) ? <p className="formError" data-testid="guestTest">Please enter a party size between 1 -10.</p> : <p className="formError" data-testid="guestTest"></p>}

                    <label htmlFor="occasion">Occasion:</label>
                        <select id="occasion"
                            className="rounded"
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

                <h3 id="contact">Contact Info</h3>
                    <label htmlFor="name" id="labelName">Name:<span>*</span></label>
                        <input
                            id="name"
                            type="text"
                            className="rounded"
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
                    {(touched.name && (form.name=='')) ? <p className="formError">Please enter your name.</p> : <p className="formError"></p>}

                    <label htmlFor="email" id="labelEmail">E-mail:<span>*</span></label>
                        <input
                            id="email"
                            type="email"
                            className="rounded"
                            data-testid="emailInput"
                            required
                            onChange={e => {
                                setForm({
                                    ...form,
                                    email: e.target.value
                                });
                            }}
                            onBlur={()=> setTouched({
                                ...touched,
                                email: true
                            })}
                        />
                    {(touched.email && (form.email=='')) ? <p className="formError">Please enter your e-mail address.</p> : <p className="formError"></p>}
            </section>
            <section id="formButtons">
                <button type="submit" value="SUBMIT" id="submit" className="rounded" disabled={!getIsFormValid()} data-testid="submitBtn">Submit</button>
                <button type="reset">Clear Form</button>
            </section>
            <section id="required">
                <span>* = required field</span>
            </section>
        </form>
    )
}