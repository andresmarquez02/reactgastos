import { useState } from "react";

const Pregunta = ({setPresupuesto,setRestante}) => {
    const [cantidad,setCantidad] = useState(0);
    const formSubmit = (e) => {
        e.preventDefault();
        if(cantidad > 0 && ! isNaN(cantidad)){
            setPresupuesto(cantidad);
            setRestante(cantidad);
            localStorage.setItem("presupuesto",cantidad);
            localStorage.setItem("restante",cantidad);
            setCantidad(0);
            e.target.reset();
        }
        else window.ohSnap('Ingresa un monto de presupuesto', {color: 'red', icon: 'icon-alert'});
    }
    return(
        <>
            <form onSubmit={formSubmit}>                
                <div className="form-group">
                    <label className="form-label">Ingresa tu presupuesto</label>
                    <input className="form-input"
                    type="number"
                    placeholder="Coloca tu presupuesto"
                    name="presupuesto"
                    onChange={(e)=>setCantidad(parseInt(e.target.value))}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
            </form>
        </>
    );
}
export default Pregunta;