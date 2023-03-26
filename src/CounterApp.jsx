import PropTypes from 'prop-types'

export const CounterApp = ({value}) => {
  return (
    <>
    <h1>CounterApp</h1>
    <h2>{value}</h2>
    <button type="button" className="p-3 m-2 btn btn-outline-primary">-</button>
    <button type="button" className="p-3 m-2 btn btn-outline-secondary">Reset</button>
    <button type="button" className="p-3 m-2 btn btn-outline-success">+</button>

    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}