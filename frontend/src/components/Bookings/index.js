import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBookings } from "../../store/bookings";
import {loadListings} from "../../store/listings";
import './Bookings.css';
import DeleteBookingModal from "../DeleteBookingModal";

function Bookings () {
    const dispatch = useDispatch();
    const bookings = useSelector(state=>state.bookings.bookings);
    // const listings = useSelector(state=>state.listings.list);
    const sessionUser = useSelector(state => state.session.user);
    console.log(sessionUser.id)
    // const myBookings = bookings.filter(booking=> booking.userId === sessionUser.id)


    // if (myBookings.length>0){
    //     const listIds = [];
    //     for (let i = 0; i < myBookings.length; i++){
    //         const id = myBookings[i].listId;
    //         listIds.push(id);
    //     }

    //     for(let i = 0; i < listIds.length; i++){
    //         const id = listIds[i];
    //         const myListings = listings.filter(listing=>listing.id === id);
    //     }

    // }



    useEffect(()=>{
        dispatch(loadBookings(sessionUser.id));
    }, [dispatch])



    return (
        <div className="bookings">
            <h2>My Bookings</h2>
            <div className="bookings-container">
                {bookings.map((booking)=>
                <div className="bookings-content" key={booking.id} id={booking.id}>
                    <h3>Your reservation is confirmed. You're going to {booking.city}.</h3>
                    <h3 className="bookings-name-header">{booking.name}</h3>
                    <img className="listings-page-img" src={`${booking.url}`}></img>
                    <ul>
                        <div className="location-label">Address</div>
                        <div className="location-box">
                            <li>{booking.address}</li>
                            <li>{booking.city}</li>
                            <li>{booking.state}</li>
                            <li>{booking.zipcode}</li>
                        </div>
                        <div className="price-label"> Amount</div>
                        <div className="price-box">
                            {/* <li>${booking.pricePerNight}.00</li> */}
                            <li>${((new Date(booking.startDate)-new Date(booking.endDate))/-(1000 * 60 * 60 * 24))*(booking.pricePerNight)}</li>
                        </div>
                        <div className="date-label"> Itinerary</div>
                        <div className="date-box">
                            <li>Check-in: {new Date(booking.startDate).toDateString()}</li>
                            <li>Check-out: {new Date(booking.endDate).toDateString()}</li>
                        </div>
                        <div>
                            <div>
                                <DeleteBookingModal id={booking.id}/>
                            </div>
                        </div>
                    </ul>

                </div>
                )}
            </div>
        </div>
    )

};


export default Bookings;
