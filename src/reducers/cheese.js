import {FETCH_CHEESE_SUCCESS, FETCH_CHEESE_REQUEST, FETCH_CHEESE_ERROR} from '../actions/actions';


const initialState={
  cheeses:[],
  loading: false,
  error: null
};

export default (state=initialState, action) =>{
  if(action.type === FETCH_CHEESE_SUCCESS){
    return Object.assign({}, state, {
      cheeses: action.cheeses,
      loading: false,
      error: null
    })
  }
  else if(action.type === FETCH_CHEESE_REQUEST){
    return Object.assign({}, state, {
      loading: true
    })
  }
  else if(action.type === FETCH_CHEESE_ERROR){
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  }
  else if(action.type === FETCH_CHEESE_ERROR){
    return Object.assign({}, state, {
      cheeses:[...state.cheeses, action.cheese],
      error: null,
      loading: false
    })
  }
    return state;
}