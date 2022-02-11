import { csrfFetch } from "./csrf";

const LOAD = 'bookings/LOAD';
const ADD_ONE = "bookings/ADD_ONE";
const DELETE_ONE = "bookings/DELETE_ONE"

const load = (bookings) =>({
    type: LOAD,
    bookings,
});

const addBooking = (booking) => ({
    type: ADD_ONE,
    booking,
});

const deleteBooking = (id) => ({
    type: DELETE_ONE,
    id,
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

export const removeBooking = (bookingId, userId) => async dispatch => {
    console.log("second")
    const response = await csrfFetch(`/api/bookings/${userId}/${bookingId}`, {
        method: 'DELETE',
    })

    if (response.ok){
        const id = await response.json();
        dispatch(deleteBooking(+id));
        return id;
    }
}

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
        case DELETE_ONE: {
            const newState = {...state}
            const newBookings = newState.bookings.filter(booking => booking.id !== action.id)
            newState.bookings = newBookings;
            delete newState[action.id];
            return newState;
        }
        default:
            return state;
    }
};

export default bookingsReducer;
