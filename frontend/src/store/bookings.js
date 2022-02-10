import { csrfFetch } from "./csrf";

const LOAD = 'bookings/LOAD';

const load = bookings =>({
    type: LOAD,
    bookings,
});

export const loadBookings = () => async dispatch =>{
    const response = await csrfFetch(`/api/bookings`);

    if (response.ok){
        const bookings = await response.json();
        dispatch(load(bookings));
        return bookings;
    }
};

const initialState = {
    bookings: []
};


const bookingsReducer = (state = initialState, action)=> {
    switch (action.type) {
        case LOAD: {
            const allBookings = {};
            action.bookings.forEach(booking=>{
                allBookings[booking.id] = booking;
            });
            return {
                ...allBookings,
                ...state,
                bookings: action.bookings,
            }
        }
        // case ADD_ONE: {
        //     return {
        //         ...state,
        //         [action.listing.id]: action.listing,
        //     };
        // }
        default:
            return state;
    }
};

export default bookingsReducer;
