// rfce
import React from 'react'

function Compra({cambioCompra}: {cambioCompra: number}) {
    const [dolares, setDolares] = React.useState(1)
  return (
    <div>
        <h5>Compra de Dólares</h5>

        <label htmlFor="">Cantidad de Dólares </label>
        <input type="number" value={dolares} 
        onChange={(ev) => setDolares(ev.target.valueAsNumber)} />

        <p>Monto en Colones por la compra: {dolares * cambioCompra}</p>
    </div>
  )
}

export default Compra