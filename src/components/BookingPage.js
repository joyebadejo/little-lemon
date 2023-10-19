import BookingForm from "./blocks/BookingForm"
import { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "../mockAPI";
import ConfirmedBooking from "./ConfirmedBooking";
import { useNavigate } from "react-router-dom";

let today = new Date();

const updateTimes = (data) =>{
    let newTimes = ((data == undefined) ?  [] : (data.map(x => x)));
    newTimes.unshift("")
    return (newTimes)
}

const initializeTimes = (times) =>{
        let newTimes = ((times == undefined) ?  ["14:00", "15:00", "16:00"] : (times.map(x => x)));
        return newTimes;
}

const timeReducer = (timeState, action) => {
    if (action.type === 'update_times') return updateTimes(action.payload);
    if (action.type === 'initialize_times') return initializeTimes(action.payload);
    return timeState;
}



export default function BookingPage (props){

    const navigate = useNavigate();
    const submitForm = async (formData) => { 
        submitAPI(formData);
        try {
            navigate("/ConfirmedBooking?name="+formData.name+"&date="+formData.date+"&time="+formData.time, {replace: true});
        } catch (e) {
        }
    };

useEffect(() => {
    const fetchTimes = async () => {
        let today = new Date();
        today = today.toLocaleDateString("en-US", {year: "numeric", month: "2-digit",day: "2-digit"})
        let todayArray = today.split("/")
        let todayString = `${todayArray[2]}`+"-"+`${todayArray[0]}`+"-"+`${todayArray[1]}`
        const data = await fetchAPI(todayString);
       dispatch({type: 'update_times', payload: data});
    }
    fetchTimes()
        .catch(console.error);
},[])


    const [availableTimes, dispatch] = useReducer(timeReducer, initializeTimes([]));

    if (typeof(availableTimes)=="undefined"){
        return <p>Loading</p>
    } else {
        return (
            <div id="bookingPage">
                <h2 data-testid="bookingsHeader" role="banner">Join us for a meal!</h2>
                <p>Select a date to find available times</p>
                <BookingForm times={availableTimes} updateTimes={dispatch} submitFunc={submitForm}/>
            </div>
      )
    }
}

export {timeReducer, initializeTimes} 
export { updateTimes }