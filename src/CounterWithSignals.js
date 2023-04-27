import React, { useCallback } from "react";
import { Child } from './Child';
import {batch, effect, signal, computed } from "@preact/signals-react";

export const count = signal(0);
const double = signal(0);

export const Counter = React.memo(() => {
    console.log('Rerender Counter');

    const doMinus = useCallback(() => {
        batch(() => {
            count.value -= 1;
        })
    }, [count]);

    const doPlus = useCallback(() => {
        batch(() => {
            count.value += 1;
            double.value = count.value * 2;
        });
    }, [count]);

    effect(() => {console.log(count.value)});

    const countPlusDouble = computed(() => count.value + double.value);

    return (
        <div>
            <p>Counter: <b>{count}</b></p>
            <p>Double: <b>{double}</b></p>
            <div>
                <button onClick={doMinus}>-1</button>
                <button onClick={doPlus}>+1</button>
            </div>

            <Child />
        </div>
    )
});