import BookingForm from "./blocks/BookingForm"
import { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "../mockAPI";

let today = new Date();

const updateTimes = (date) =>{
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
}

const initializeTimes = () =>{
    return ["13:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
}

// const initializeTimes = () =>{
//     // return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
//     const fetchTimes = async () => {
//         const data = await fetchAPI('2023-10-07');
//         // const json = await response.json();
//         console.log(data)
//         return data;
//     }
//     fetchTimes()
//         .catch(console.error);
// }

// const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
// const initTimes = initializeTimes();

const timeReducer = (timeState, action) => {
    if (action.type === 'update_times') return {updateTimes};
    if (action.type === 'initialize_times') return {initializeTimes};
    return timeState;
}

export default function BookingPage (){

    const [date, setDate] = useState(today);
    const [timesArray, setTimesArray] = useState([]);

    const [availableTimes, dispatch] = useReducer(timeReducer, initializeTimes());

    // useEffect(() => {
    //     fetchAPI("2023-10-02")
    //         .then((response) => response.json())
    //         .then((jsonData) => setTimesArray(jsonData))
    //         .catch((error) => console.log(error)); 
    // }, [date]);
    // console.log(fetchAPI("2023-10-02"))
    // useEffect(() => {
    //     const fetchTimes = async () => {
    //         const data = await fetchAPI('2023-10-07');
    //         // const json = await response.json();
    //         console.log(data)
    //     }
    //     fetchTimes()
    //         .catch(console.error);
    // },[])
    console.log(typeof(availableTimes), typeof(availableTimes)==undefined)
    if (typeof(availableTimes)=="undefined"){
        return <p>Loading</p>
    } else {
        return (
            <>
                {/* <BookingForm times={availableTimes} setTimes={setAvailableTimes}/> */}
                <h2 role="heading">Reserve a table!</h2>
                <BookingForm times={availableTimes} updateTimes={dispatch}/>
            </>
        )
    }
}

export {timeReducer, initializeTimes} 
export { updateTimes }