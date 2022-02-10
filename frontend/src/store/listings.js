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

const editListing = (listing, id) =>({
    type: UPDATE_LISTING,
    listing,
    id,
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
    const response = await csrfFetch(`/api/listings/${listingId}`,{
        method:'DELETE',
    })
    if (response.ok){
        const id = await response.json();
        dispatch(deleteListing(+id));
        return id;
    }
};

export const updateListing = (payload, listId) => async dispatch => {
    const response = await csrfFetch(`/api/listings/${listId}`, {
        method: 'PUT',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(payload)
    })

    if(response.ok){
        const updatedListing = await response.json();
        dispatch(editListing(updatedListing, listId));
        return updatedListing;
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
        }
        case UPDATE_LISTING: {
            const newState = {...state};
            const index = newState.list.findIndex(listing=>listing.id === action.id);

            const newListArray = [...newState.list];
            newListArray[index] = action.listing;
            newState.list = newListArray;

            return newState;
          }
        default:
            return state;
    }
};

export default listingsReducer;
