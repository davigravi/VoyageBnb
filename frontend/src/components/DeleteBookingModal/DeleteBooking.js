import React, { useState } from "react";
import './DeleteBooking.css';
import { useDispatch } from "react-redux";
import { removeBooking } from "../../store/bookings";
import { useSelector } from "react-redux";

function DeleteBooking ({id, hideForm}){

    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    const bookingId = id.id;


    const handleYesClick = async (e) =>{
        e.preventDefault();
        console.log("first")
        dispatch(removeBooking(bookingId, sessionUser.id))
    }

    const handleNoClick = async (e) => {
        e.preventDefault();
        hideForm();
    };


    return (
        <div className="delete-booking-modal-container">
            <h2>Are you sure you want to cancel?</h2>
            <div className="delete-booking-modal-buttons">
                <button type="button" onClick={handleYesClick}>Yes</button>
                <button type="button" onClick={handleNoClick}>No</button>
            </div>

        </div>
    )


}

export default DeleteBooking;
