import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import './HostFormPage.css'
import { useHistory } from "react-router-dom";
import { createListing } from "../../store/listings";
import { restoreCSRF } from "../../store/csrf";



function HostFormPage() {

    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector((state) => state.session.user);

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [description, setDescription] = useState("");
    const [pricePerNight, setPricePerNight] = useState(0);
    const [url, setUrl] = useState("");
    const [errors, setErrors] = useState([]);


    // const handleSubmit = async (e) => {
    //     e.preventDefault();


    //     const payload = {
    //         userId: sessionUser.id,
    //         name,
    //         address,
    //         city,
    //         state,
    //         zipcode,
    //         description,
    //         pricePerNight,
    //         url,
    //     }

    //     let newListing = await dispatch(createListing(payload));

    //     if (newListing) {
    //         history.push("/listings")
    //     }






    // }

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

        setErrors([])
        let newListing = await dispatch(createListing(payload))
        .catch(async(res)=>{
            const data = await res.json();
            if(data && data.errors) return setErrors(data.errors)
        })

        if (newListing) {
            history.push("/listings")
        }






    }



    return (
        <form onSubmit={handleSubmit}>
            <div className="host-form-container">

                <ul className="host-errors">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <h2 className="host-form-header">Tell Us About Your Place</h2>
                <label>
                    <input
                        type="text"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <input
                        type="text"
                        value={address}
                        placeholder="Address"
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <input
                        type="text"
                        value={city}
                        placeholder="City"
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <input
                        type="text"
                        value={state}
                        placeholder="State"
                        onChange={(e) => setState(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="Zipcode"
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                        required
                    />
                </label>
                <textarea
                    rows="5"
                    cols="45"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label>
                    <input
                        type="number"
                        value={pricePerNight}
                        placeholder="pricePerNight"
                        step="5"
                        min="0"
                        onChange={(e) => setPricePerNight(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <input
                        type="text"
                        value={url}
                        placeholder="photo URL"
                        onChange={(e) => setUrl(e.target.value)}
                        required
                    />
                </label>
                <button className="host-listing-button" type="submit">Host</button>

            </div>
        </form>
    )

}


export default HostFormPage;
