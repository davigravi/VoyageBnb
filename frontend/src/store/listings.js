import { csrfFetch } from "./csrf";

const LOAD = 'listings/LOAD';
const ADD_ONE = 'listings/ADD_ONE';

const load = list =>({
    type: LOAD,
    list,
});

const addListing = listing => ({
    type: ADD_ONE,
    listing,
});

export const loadListings = () => async dispatch =>{
    const response = await csrfFetch(`/api/listings`);

    if (response.ok){
        const list = await response.json();
        dispatch(load(list));
        return list;
    }
};

export const createListing = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/listings`,{
        method: `POST`,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })

    if (response.ok){
        const listing = await response.json();
        dispatch(addListing(listing));
        return listing;
    }
};

const initialState = {
    list: []
};

const listingsReducer = (state = initialState, action)=> {
    switch (action.type) {
        case LOAD: {
            const allListings = {};
            action.list.forEach(listing=>{
                allListings[listing.id] = listing;
            });
            return {
                ...allListings,
                ...state,
                list: action.list,
            }
        }
        case ADD_ONE: {
            return {
                ...state,
                [action.listing.id]: action.listing,
            };
        }
        default:
            return state;
    }
};

export default listingsReducer;
