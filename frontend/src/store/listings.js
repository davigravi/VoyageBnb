import { csrfFetch } from "./csrf";

const LOAD = 'listings/LOAD';
const ADD_ONE = 'listings/ADD_ONE';
const DELETE_ONE = "listings/DELETE_ONE"
const UPDATE_LISTING = "listings/UPDATE_LISTING"

const load = list =>({
    type: LOAD,
    list,
});

const addListing = listing => ({
    type: ADD_ONE,
    listing,
});

const deleteListing = id => ({
    type: DELETE_ONE,
    id,
});

const editListing = (listing) =>({
    type: UPDATE_LISTING,
    listing
})

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

export const removeListing = (listingId) => async dispatch => {
    console.log(listingId, "listingId")
    const response = await csrfFetch(`/api/listings/${listingId}`,{
        method:'DELETE',
    })
    if (response.ok){
        console.log("checkpoint2")
        const id = await response.json();
        dispatch(deleteListing(+id));
        return id;
    }
}




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
        case DELETE_ONE: {
            const newState = {...state}
            const newList = newState.list.filter(listing => listing.id !== action.id)
            newState.list = newList;
            delete newState[action.id];
            return newState;
                // , list: state.list.filter(listing => listing.id !== action.id)}
            // return newState;
            // const newState = { ...state };
            // console.log(newState, "this is newState")
            // delete newState.list[action.id];
            // console.log(newState,"after deletion")
            // return newState;
        }
        default:
            return state;
    }
};

export default listingsReducer;
