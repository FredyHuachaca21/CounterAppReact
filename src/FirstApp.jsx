
export const FirstApp = () => {
  const nombre = 'Fredy'
  const ahora = new Date();

const opciones = {
  dateStyle: 'short',
  timeStyle: 'short',
};

const fechaYHora = ahora.toLocaleString(undefined, opciones);
console.log(fechaYHora);
  return (
    <>
    <h1>{nombre}</h1>
    <h2>Huachaca</h2>
    <h3>fecha y hora: {fechaYHora}</h3>
    </>
  )
}
