import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBookings } from "../../store/bookings";
import {loadListings} from "../../store/listings";

function Bookings () {
    const dispatch = useDispatch();
    const bookings = useSelector(state=>state.bookings.bookings);
    const listings = useSelector(state=>state.listings.list);
    const sessionUser = useSelector(state => state.session.user);

    const myBookings = bookings.filter(booking=> booking.userId === sessionUser.id)


    if (myBookings.length>0){
        const listIds = [];
        for (let i = 0; i < myBookings.length; i++){
            const id = myBookings[i].listId;
            listIds.push(id);
        }

        for(let i = 0; i < listIds.length; i++){
            const id = listIds[i];
            const myListings = listings.filter(listing=>listing.id === id);
        }

    }




    useEffect(()=>{
        dispatch(loadListings());
        dispatch(loadBookings(sessionUser.id));
    }, [dispatch])

    return (
        <div>
            <h2>My Bookings</h2>
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
                        <div className="info-label">Booking Info</div>
                        <div className="info-box">
                            <li>{sessionUser.firstName} {sessionUser.lastName}</li>
                        </div>
                        <div className="listings-buttons-container">
                            <div className="listings-buttons-box">
                                <button className="book-button">Buttons go here</button>
                            </div>
                        </div>
                    </ul>
                    <img className="listings-page-img" src={`${listing.url}`}></img>
                </div>
                )}
                {bookings.map((booking)=>
                <div>
                    <h3>{booking.startDate}</h3>
                </div>
                )}
            </div>
        </div>
    )

};


export default Bookings;
