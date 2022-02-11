import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import './BookForm.css'
import { createBooking } from "../../store/bookings";
import { useHistory } from "react-router-dom";

function BookForm ({id, hideForm}){
    const dispatch = useDispatch();
    const history = useHistory();

    const listings = useSelector(state=>state.listings.list);
    const propId= id.id;

    const sessionUser = useSelector(state => state.session.user);

    const listing = listings.find(listing=> listing.id === +propId);

    const name = listing.name;
    const address = listing.address;
    const city = listing.city;
    const state = listing.state;
    const zipcode = listing.zipcode;
    const pricePerNight = listing.pricePerNight;
    const url = listing.url;


    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            userId: sessionUser.id,
            listId:propId,
            name,
            address,
            city,
            state,
            zipcode,
            pricePerNight,
            url,
            startDate,
            endDate,
        }
        console.log(id)
        let newBooking = await dispatch(createBooking(payload, sessionUser.id))

        if(newBooking){
            hideForm();
            history.push(`/bookings/${sessionUser.id}`)
        }


    };

    const handleCancelClick = async (e) => {
        e.preventDefault();
        hideForm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="edit-form-container">
                <h1>Make Your Reservation</h1>
                <ul className="e-errors">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>
                    Check In
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e)=>setStartDate(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Check Out
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e)=>setEndDate(e.target.value)}
                    />
                </label>
                <button type="submit">Book</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </div>
        </form>
    )

}


export default BookForm;
