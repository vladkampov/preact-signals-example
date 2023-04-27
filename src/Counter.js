import React, { useState, useCallback, createContext, useContext } from "react";
import { Child } from './Child';

export const Counter = React.memo(() => {
  console.log('Rerender');
  const [count, setCount] = useState(0);

  const doMinus = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  const doPlus = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
        <p>Counter: <b>{count}</b></p>
        <div>
            <button onClick={doMinus}>-1</button>
            <button onClick={doPlus}>+1</button>
        </div>

        <Child count={count}/>
    </div>
  )
});