import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import './HostFormPage.css'
import { useHistory } from "react-router-dom";



function HostFormPage(){

    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [description, setDescription] = useState("");
    const [pricePerNight, setPricePerNight] = useState(0);
    const [url, setUrl] = useState("");
    const [errors, setErrors] = useState([]);

    return (
        <form>
            <ul className="host-errors">
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <div className="host-form-container">
                <h1 className="host-form-header">Tell Us About Your Place</h1>
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
                    <input
                    className="host-page-description"
                    type="text"
                    value={description}
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    required
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
                <button type="submit">Host</button>
            </div>
        </form>
    )

}


export default HostFormPage;
