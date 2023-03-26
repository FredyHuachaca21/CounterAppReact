import PropTypes from 'prop-types'

export const FirstApp = ({ 
  nombre = 'Edgar', 
  apellido = "Pezúa",
  cantPerros = 2, 
  danna = 'danna <3', 
  daenarys = 'daenarys <3' }) => {
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
  nombre: PropTypes.string,
  apellido: PropTypes.string.isRequired,
  cantPerros: PropTypes.number.isRequired,
  danna: PropTypes.string.isRequired,
  daenarys: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  nombre: 'No hay nombre',
  apellido: 'No hay apellido',
  cantPerros: 0,
  danna: 'No hay danna',
  daenarys: 'No hay daenarys',
}