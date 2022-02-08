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
        <div className='listings-container'>
            <h2> Listings</h2>
                {listings.map((listing)=>
                <div key={listing.id} id={listing.id}>
                    <h3>{listing.name}</h3>
                    <ul>
                        <li>{listing.description}</li>
                        <li>{listing.address}</li>
                        <li>{listing.city}</li>
                        <li>{listing.state}</li>
                        <li>{listing.zipcode}</li>
                        <li>{listing.pricePerNight}</li>
                    </ul>
                    <img  src={`${listing.url}`}></img>
                </div>
                )}
        </div>
    )

}


export default Listings;
