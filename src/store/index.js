import { createStore } from 'redux'
const initialState = {counter : 0, showCounter : true} ;

// Create reducer
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter : state.showCounter
        }
    } else if ( action.type === 'decrement' ) {
        return {
            counter : state.counter - 1,
            showCounter : state.showCounter
        }
    } else if ( action.type === 'toggle') {
        return {
            counter : state.counter,
            showCounter : !state.showCounter 
        };

    } else if ( action.type === 'incrementby5'){
        /*return {
            counter : state.counter + action.amount,
            showCounter : !state.showCounter 
        };*/

        return { ...state , counter : state.counter + action.amount};
    }
    return state;
}

// Create redux store and attach reducer
const store = createStore(counterReducer);
export default store;