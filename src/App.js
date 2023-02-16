import React from 'react';
import { Increament, Decreament } from './Action';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.ChangeNumber);
  return (
    <div>
      <button onClick={() => dispatch(Increament())}>+</button>
      {count}
      <button onClick={() => dispatch(Decreament())}>-</button>
    </div>
  );
}
