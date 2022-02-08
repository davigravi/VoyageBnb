import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Listings.css';
import { loadListings } from "../../store/listings";




function Listings (){
    const dispatch = useDispatch();

    const listings = useSelector(state=>state.listings.list);



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
                        <div>Description</div>
                        <li className="description-box">{listing.description}</li>
                        <div>Location</div>
                        <div className="location-box">
                            <li>{listing.address}</li>
                            <li>{listing.city}</li>
                            <li>{listing.state}</li>
                            <li>{listing.zipcode}</li>
                        </div>
                        <div>Price</div>
                        <div className="price-box">
                            <li>${listing.pricePerNight}</li>
                        </div>
                    </ul>
                    <img  src={`${listing.url}`}></img>
                </div>
                )}
            </div>
        </div>
    )

}


export default Listings;
