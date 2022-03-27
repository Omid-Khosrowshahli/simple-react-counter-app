import { useState } from 'react';
import Button from '../Button/Button';
import './CounterContainer.css';

const CounterContainer = () => {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(10);

  const setColor = () => {
    if (count > 5) {
      return ("green");
    } else if (count <= 5 && count > 0) {
        return ("red");
    } else if (count === 0) {
        return ("white");
    }
  }

  const limitHandler = (value) => {
    setLimit(value);
  }

  const increase = () => {
    if (count < limit) {
      setCount(count + 1);
    }
    }
  const decrease = () => {
    setCount(count - 1);
    if (count === 0) {
      setCount(0);
    }
  }

  return (
    <>
      <label>Limit: </label>
      <input type="number" onChange={(event) => limitHandler(event.target.value)}/>
      <div className="container" style={{backgroundColor: setColor()}}>
        <Button fontSize="50px" bgcolor="#777" clicked={decrease}>-</Button>
        <span>{count}</span>
        <Button fontSize="50px" bgcolor="#777" clicked={increase}>+</Button>
      </div>
    </>
  );
}

export default CounterContainer;