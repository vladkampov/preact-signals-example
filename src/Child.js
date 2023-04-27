import React from 'react';
import { count } from './CounterWithSignals';

export const Child = React.memo(() => {
    console.log('Rerender child component');
  
    return <div>Child Component {count}</div>
})
