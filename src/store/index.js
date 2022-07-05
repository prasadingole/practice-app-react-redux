import { createStore } from 'redux';
import { INCREMENT, DECREMENT, TOGGLE, INCREASEBY5 } from './actionConstants';
const initialState = {counter : 0, showCounter : true} ;

// Create reducer
const counterReducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return {...state, counter: state.counter + 1}
    } else if ( action.type === DECREMENT ) {
        return {...state, counter : state.counter - 1}
    } else if ( action.type === TOGGLE) {
        return {...state, showCounter : !state.showCounter}

    } else if ( action.type ===  INCREASEBY5){
        return { ...state , counter : state.counter + action.amount};
    }
    return state;
}

// Create redux store and attach reducer
const store = createStore(counterReducer);
export default store;