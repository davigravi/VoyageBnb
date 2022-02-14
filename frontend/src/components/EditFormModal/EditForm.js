import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import './EditForm.css'
import {useParams} from 'react-router-dom';
import { updateListing } from "../../store/listings";

function EditForm({id, hideForm}) {
    const dispatch = useDispatch();

    const listings = useSelector(state=>state.listings.list);
    const propId= id.id;


    const sessionUser = useSelector(state => state.session.user);

    const listing = listings.find(listing=> listing.id === +propId);

    const [name, setName] = useState(listing.name);
    const [address, setAddress] = useState(listing.address);
    const [city, setCity] = useState(listing.city);
    const [state, setState] = useState(listing.state);
    const [zipcode, setZipcode] = useState(listing.zipcode);
    const [description, setDescription] = useState(listing.description);
    const [pricePerNight, setPricePerNight] = useState(listing.pricePerNight);
    const [url, setUrl] = useState(listing.url);
    const [errors, setErrors] = useState([]);

    const updateName = (e) => setName(e.target.value);
    const updateAddress = (e) => setAddress(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateZipcode = (e) => setZipcode(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updatePricePerNight = (e) => setPricePerNight(e.target.value);
    const updateUrl = (e) => setUrl(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            userId: sessionUser.id,
            name,
            address,
            city,
            state,
            zipcode,
            description,
            pricePerNight,
            url,
        }

        setErrors([]);
        let updatedListing = await dispatch(updateListing(payload,propId))
        .catch(async(res)=>{
            const data = await res.json();
            if(data && data.errors) return setErrors(data.errors)
        })
        if(updatedListing){
            hideForm();
        }

    }



    const handleCancelClick = async (e) => {
        e.preventDefault();
        hideForm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="edit-form-container">
                <h1>Update Your Listing</h1>
                <ul className="e-errors-edit-modal">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={updateName}
                        required
                    />
                </label>
                <label>
                    Address:
                    <input
                        type="text"
                        value={address}
                        onChange={updateAddress}
                        required
                    />
                </label>
                <label>
                    City:
                    <input
                        type="text"
                        value={city}
                        onChange={updateCity}
                        required
                    />
                </label>
                <label>
                    State:
                    <input
                        type="text"
                        value={state}
                        onChange={updateState}
                        required
                    />
                </label>
                <label>
                    Zipcode:
                    <input
                        type="text"
                        value={zipcode}
                        onChange={updateZipcode}
                        required
                    />
                </label>
                <label>
                    Description:
                    <textarea
                        rows="5"
                        cols="45"
                        placeholder="Description"
                        value={description}
                        onChange={updateDescription}
                        required
                    />
                </label>
                <label>
                    Price:
                    <input
                        type="number"
                        value={pricePerNight}
                        placeholder="pricePerNight"
                        step="5"
                        min="0"
                        onChange={updatePricePerNight}
                        required
                    />
                </label>
                <label>
                    Photo URL:
                    <input
                        type="text"
                        value={url}
                        onChange={updateUrl}
                        required
                    />
                </label>
                <button className="edit-form-second-yes" type="submit">Update Listing</button>
                <button className="edit-form-second-no" type="button" onClick={handleCancelClick}>Cancel</button>
            </div>

        </form>
    )
};

export default EditForm;
