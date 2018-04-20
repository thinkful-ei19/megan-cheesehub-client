import {FETCH_CHEESE_SUCCESS} from './actions';


const initialState={
  cheeses:[]
};

export default (state=initialState, action) =>{
  if(action.type === FETCH_CHEESE_SUCCESS){
    return Object.assign({}, state, {
      cheeses: action.cheeses
    })
  }
    return state;
}