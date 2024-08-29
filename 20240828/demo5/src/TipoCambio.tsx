import { useState } from "react"
import Compra from './Compra'

function TipoCambio() {
    const [colones, setColones] = useState(520)
  return (
    <div>
        <h3>Tipo Cambio</h3>
        <p>Compra: {colones}</p>

        <label htmlFor="">Colones por cada dólar </label>
        <input type="number" defaultValue={colones} 
        onChange={
            (ev) => {
                setColones(ev.target.valueAsNumber)
            }} />

        <Compra cambioCompra={colones}></Compra>
    </div>
  )
}

export default TipoCambio