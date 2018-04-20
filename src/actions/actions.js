import {API_BASE_URL} from '../config';

export const FETCH_CHEESE_REQUEST='FETCH_CHEESE_REQUEST'
export const fetchCheeseRequest=()=>({
    type:FETCH_CHEESE_REQUEST
});

export const FETCH_CHEESE_SUCCESS='FETCH_CHEESE_SUCCESS'
export const fetchCheeseSuccess=(cheeses)=>({
    type:FETCH_CHEESE_SUCCESS,
    cheeses
});

export const FETCH_CHEESE_ERROR='FETCH_CHEESE_ERROR'
export const fetchCheeseError=(error)=>({
    type:FETCH_CHEESE_ERROR,
    error
});


export const fetchCheeses =()=>{
    return(dispatch)=>{
        fetch(`${API_BASE_URL}/api/cheeses`)
        .then(()=>dispatch(fetchCheeseRequest()))
        .then(res=> res.json())
        .then(cheeses=> dispatch(fetchCheeseSuccess(cheeses)))
        .then(cheeses=> console.log(cheeses))
        .catch(err=> console.log(err))
    }
}