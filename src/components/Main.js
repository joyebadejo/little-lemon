import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

export default function Main () {
    return (
        <main>
            <Routes> 
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/BookingPage" element={<BookingPage />}></Route>
            </Routes>
        </main>
    )
}