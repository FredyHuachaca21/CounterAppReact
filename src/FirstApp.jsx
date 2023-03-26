
export const FirstApp = ({ nombre, apellido,cantPerros, danna, daenarys }) => {

  console.log(nombre)
  console.log(apellido)

  return (
    <>
    <h1>Hola soy {nombre}</h1>
    <h2>y mi apellido es: {apellido} </h2>
    <h3>tengo {cantPerros} Mascotas</h3>
    <h3>se llaman {danna} y {daenarys}</h3>
    </>
  )
}
