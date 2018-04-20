import {FETCH_CHEESE_SUCCESS} from '../actions/actions';


const initialState={
  cheeses:[],
  loading: false,
  error: null
};

export default (state=initialState, action) =>{
  if(action.type === FETCH_CHEESE_SUCCESS){
    return Object.assign({}, state, {
      cheeses: action.cheeses
    })
  }
    return state;
}