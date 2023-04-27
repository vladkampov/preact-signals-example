import React, { useCallback, useState } from 'react';
import { Counter } from './CounterWithSignals';
import './App.css';

function App() {
    return (
        <div className="App">
            <Counter />
        </div>
    );
}

export default App;


// React Context
// ...
// import {Counter, CounterContext} from './CounterWithContext';
// ...
// const [count, setCount] = useState(0);
//
// const doMinus = useCallback(() => {
//     setCount(prev => prev - 1);
// }, []);
//
// const doPlus = useCallback(() => {
//     setCount(prev => prev + 1);
// }, []);
// ...
// {/*<CounterContext.Provider value={{ count, doMinus, doPlus }}>*/}
// {/*    <Counter />*/}
// {/*</CounterContext.Provider>*/}

// Mobx
// ...
// import {Counter, CounterStoreContext, CounterStore} from './CounterWithMobx';
// ...
// <CounterStoreContext.Provider value={new CounterStore()}>
//     <Counter />
// </CounterStoreContext.Provider>
