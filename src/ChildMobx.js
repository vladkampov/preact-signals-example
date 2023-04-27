import React from 'react';
import { observer } from "mobx-react-lite"
import {useCounterStoreContext} from "./CounterWithMobx";

export const Child = observer(() => {
    console.log('Rerender child component');

    const { count, doMinus, doPlus } = useCounterStoreContext();
  
    return <div>Child Component {count}</div>
})
