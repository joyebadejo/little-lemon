import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import { fetchAPI, submitAPI } from "../mockAPI";
import ConfirmedBooking from './ConfirmedBooking';


export default function Main () {


    return (
        <main>
            <Routes> 
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/BookingPage" element={<BookingPage />}></Route>
                <Route path="/ConfirmedBooking" element={<ConfirmedBooking/>}></Route>
            </Routes>
        </main>
    )
}

