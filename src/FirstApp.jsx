import PropTypes from 'prop-types'

export const FirstApp = ({ nombre, apellido,cantPerros, danna, daenarys }) => {
  return (
    <>
    <h1>Hola soy {nombre}</h1>
    <h2>y mi apellido es: {apellido} </h2>
    <h3>tengo {cantPerros} Mascotas</h3>
    <h3>se llaman {danna} y {daenarys}</h3>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  cantPerros: PropTypes.number.isRequired,
  danna: PropTypes.string.isRequired,
  daenarys: PropTypes.string.isRequired
}