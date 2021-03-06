import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Listings.css';
import { loadListings } from "../../store/listings";
import { removeListing } from "../../store/listings";
import EditFormModal from "../EditFormModal";
import BookFormModal from "../BookFormModal";



function Listings () {
    const dispatch = useDispatch();

    // const listings = useSelector(state=>state.listings.list);
    const listings = useSelector(state=>state.listings.list);
    const sessionUser = useSelector(state => state.session.user);

    const handleDelete = async (e) =>{
        // const id = e.target.value
        e.preventDefault();
        dispatch(removeListing(e.target.value))
    }

    useEffect(()=>{
        dispatch(loadListings());
    }, [dispatch])


    return (
        <div className="listings">
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
                            <li>${listing.pricePerNight}</li>
                        </div>
                        <div className="listings-buttons-container">
                            <div className="listings-buttons-box">
                                {/* <button className="book-button">Book</button> */}

                                <BookFormModal id={listing.id}/>
                                {sessionUser.id === listing.userId && sessionUser.firstName !== "Hello" ?   <button className="listings-delete-button" value={listing.id} onClick={handleDelete}>Delete</button> : null }
                                {sessionUser.id === listing.userId && sessionUser.firstName !== "Hello" ?   <EditFormModal id={listing.id}/> : null }
                                {sessionUser.firstName === "Hello" ?   <button className="listings-delete-button" value={listing.id} onClick={handleDelete}>Delete</button> : null }
                                {sessionUser.lastName === "World" ?   <EditFormModal id={listing.id}/> : null }


                                {/* <button className="listings-delete-button" value={listing.id} onClick={handleDelete}>Delete</button>
                                <EditFormModal id={listing.id}/> */}
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
