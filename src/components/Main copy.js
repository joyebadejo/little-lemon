import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';


export default function Main () {

    const updateTimes = (date) =>{
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    }
    
    const initializeTimes = () =>{
        return ["13:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    }
    
    // const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    // const initTimes = initializeTimes();
    
    const timeReducer = (timeState, action) => {
        if (action.type === 'update_times') return {updateTimes};
        if (action.type === 'initialize_times') return {initializeTimes};
        return timeState;
    }


    return (
        <main>
            <Routes> 
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/BookingPage" element={<BookingPage timeReducer={timeReducer} initializeTimes={ initializeTimes } updateTimes = { updateTimes }/>}></Route>
            </Routes>
        </main>
    )
}