import { csrfFetch } from "./csrf";

const LOAD = 'listings/LOAD';

const load = list =>({
    type: LOAD,
    list
})

export const loadListings = () => async dispatch =>{
    const response = await csrfFetch(`/api/listings`);

    if (response.ok){
        const list = await response.json();
        dispatch(load(list));
        return list;
    }
}

const initialState = {
    list: []
}

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





        default:
            return state;




    }



}

export default listingsReducer;
