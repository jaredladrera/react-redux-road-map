import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset, incrementByAmount } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;
  return (
    <section>
        <p>{ count }</p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>

        <input type='text' value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value) }/>
        <div>
            <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
        </div>
    </section>
  )
}

export default Counter