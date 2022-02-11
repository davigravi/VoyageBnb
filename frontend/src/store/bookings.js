import { csrfFetch } from "./csrf";

const LOAD = 'bookings/LOAD';
const ADD_ONE = "bookings/ADD_ONE";

const load = (bookings) =>({
    type: LOAD,
    bookings,
});

const addBooking = (booking) => ({
    type: ADD_ONE,
    booking,
})

export const loadBookings = (userId) => async dispatch =>{
    const response = await csrfFetch(`/api/bookings/${userId}`);

    if (response.ok){
        const bookings = await response.json();
        dispatch(load(bookings));
        return bookings;
    }
};

export const createBooking = (payload, userId) => async dispatch => {
    console.log("here")
    const response = await csrfFetch(`/api/bookings/${userId}`, {
        method:`POST`,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })

    if(response.ok){
        const booking = await response.json();
        dispatch(addBooking(booking));
        return booking;
    }
};

const initialState = {
    bookings: [],
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
        case ADD_ONE: {
            return {
                ...state,
                [action.booking.id]: action.booking,
            };
        }
        default:
            return state;
    }
};

export default bookingsReducer;
