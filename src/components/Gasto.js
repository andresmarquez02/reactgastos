import { useState } from "react";
import ModalReset from "./ModalReset";

const Gasto = ({setRestante,restante,setGastos,gastos}) => {
    const [gasto,setGasto] =useState(null);
    const [unidades,setUnidades] = useState(null);
    const [precio,setPrecio] =useState(null);
    const formSubmit = (e) =>{
        e.preventDefault();
        if(gasto !== "" && precio > 0 && ! isNaN(precio) && unidades > 0 && ! isNaN(unidades)){
            if(precio <= restante){
                if((precio * unidades) <= restante){
                    const resto = restante - precio * unidades;
                    const fecha = new Date();
                    let resumenGasto = [
                        ...gastos,
                        {"gasto":gasto,"precio":precio,"unidades":unidades, "restante":resto,"fecha": fecha.getDay()+"/"+fecha.getMonth()+"/"+fecha.getFullYear()}
                    ];
                    setGastos(resumenGasto)
                    localStorage.setItem("gastos", JSON.stringify(resumenGasto));
                    setRestante(resto);
                    localStorage.setItem("restante",resto);
                    setGasto(null)
                    setPrecio(null)
                    e.target.reset();
                }
            }
            else window.ohSnap('Prosupuesto insuficiente', {color: 'red', icon: 'icon-alert'});
        }
        else window.ohSnap('Los campos no pueden estar vacios', {color: 'red', icon: 'icon-alert'});

    }
    return (
        <>
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label className="form-label">Producto</label>
                    <input className="form-input"
                    type="text"
                    placeholder="nombre del producto"
                    name="presupuesto"
                    onChange={(e)=>setGasto(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Cantidad</label>
                    <input className="form-input"
                    type="text"
                    placeholder="nombre del producto"
                    name="presupuesto"
                    onChange={(e)=>setUnidades(parseInt(e.target.value))}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Precio (por unidad)</label>
                    <input className="form-input"
                    type="number"
                    placeholder="Costo"
                    name="presupuesto"
                    onChange={(e)=>setPrecio(parseInt(e.target.value))}
                    />
                </div>
                <div className="form-group d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">Guardar</button>
                    <a className="btn btn-error" href="#modal-id">Resetar App</a>
                </div>
            </form>
            <ModalReset/>
        </>
    );
}
export default Gasto;