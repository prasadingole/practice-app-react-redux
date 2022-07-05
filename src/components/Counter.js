import { useSelector , useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { INCREMENT, DECREMENT, TOGGLE, INCREASEBY5 } from '../store/actionConstants';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  
  const toggleCounterHandler = () => {
    dispatch({type: TOGGLE})
  };
  
  const incrementHandler= ()=> {
    dispatch({type :  INCREMENT})
  };

  const decrementHandler= ()=> {
    dispatch({type : DECREMENT })
  };

  const incrementHandlerBy5 = () => {
    dispatch({type : INCREASEBY5,amount : 5})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={incrementHandlerBy5}>Increment By 5</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
