
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"
import {Child} from "./ChildMobx";
import {createContext, useContext} from "react";

export class CounterStore {
    count = 0

    constructor() {
        makeAutoObservable(this);
    }

    doMinus = () => {
        this.count -= 1;
    }

    doPlus = () => {
        this.count += 1;
    }
}


export const CounterStoreContext = createContext();

export const useCounterStoreContext = () => useContext(CounterStoreContext);

export const Counter = observer(() => {
    console.log('Rerender');

    const { count, doMinus, doPlus } = useCounterStoreContext();

    return (
        <div>
            <p>Counter: <b>{count}</b></p>
            <div>
                <button onClick={doMinus}>-1</button>
                <button onClick={doPlus}>+1</button>
            </div>

            <Child />
        </div>
    )
});
