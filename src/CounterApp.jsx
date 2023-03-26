import PropTypes from 'prop-types'
import {useState} from 'react';

export const CounterApp = ({value}) => {
 
  const [counter, setCounter] = useState(value);
  const menos = (event) => {
  //  console.log(event)
  setCounter(counter -1)
  }
  const reset = () => {
  setCounter(0)
  }
  const mas = () => {
  setCounter(counter +1)
  }
  const aleatorio = () => {
  setCounter(()=>{
    return Math.round(Math.random() * 100);
  });
  }

  return (
    <>
    <h1>CounterApp</h1>
    <h2>{counter}</h2>
    <button type="button" className="p-3 m-2 btn btn-outline-primary text-uppercase fw-bold"
    onClick={menos}>-</button>
    <button type="button" className="p-3 m-2 btn btn-outline-secondary text-uppercase fw-bold"
    onClick={reset}>Reset</button>
    <button type="button" className="p-3 m-2 btn btn-outline-success text-uppercase fw-bold"
    onClick={mas}>+</button>
    <button type="button" className="p-3 m-2 btn btn-outline-info text-uppercase fw-bold"
    onClick={aleatorio}>random</button>

    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}