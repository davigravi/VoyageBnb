import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Listings.css';
import { loadListings } from "../../store/listings";
import { removeListing } from "../../store/listings";
import EditFormModal from "../EditFormModal";



function Listings () {
    const dispatch = useDispatch();

    // const listings = useSelector(state=>state.listings.list);
    const listings = useSelector(state=>state.listings.list);
    console.log(listings)

    const handleDelete = async (e) =>{
        const id = e.target.value
        e.preventDefault();
        dispatch(removeListing(e.target.value))
    }

    useEffect(()=>{
        dispatch(loadListings());
    }, [dispatch])


    return (
        <div>
            <h2> Listings</h2>
            <div className='listings-container'>
                {listings.map((listing)=>
                <div className="listing-content" key={listing.id} id={listing.id}>
                    <h3>{listing.name}</h3>
                    <ul>
                        <div className="description-label">Description</div>
                        <li className="description-box">{listing.description}</li>
                        <div className="location-label">Location</div>
                        <div className="location-box">
                            <li>{listing.address}</li>
                            <li>{listing.city}</li>
                            <li>{listing.state}</li>
                            <li>{listing.zipcode}</li>
                        </div>
                        <div className="price-label">Price</div>
                        <div className="price-box">
                            <li>{listing.pricePerNight}</li>
                        </div>
                        <div className="listings-buttons-container">
                            <div className="listings-buttons-box">
                                <button className="book-button">Book</button>
                                <button value={listing.id} onClick={handleDelete}>Delete</button>
                                <EditFormModal/>
                            </div>
                        </div>
                    </ul>
                    <img className="listings-page-img" src={`${listing.url}`}></img>
                </div>
                )}
            </div>
        </div>
    )

};


export default Listings;
