import React, { useState, useCallback, createContext, useContext } from "react"
import {Child} from "./Child";

export const CounterContext = createContext(null);

export const useCounter = () => useContext(CounterContext);

export const Counter = React.memo(({ c}) => {
  console.log('Rerender Counter');
  const { count, doMinus, doPlus} = useCounter();

  return (
    <div>
        <p>Counter: <b>{count}</b></p>
        <div>
            <button onClick={doMinus}>-1</button>
            <button onClick={doPlus}>+1</button>
        </div>

        <Child count={count} />
    </div>
  )
})

