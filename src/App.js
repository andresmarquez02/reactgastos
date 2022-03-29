
import { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta'
import Gasto from './components/Gasto'
import Lista from './components/Lista'

const App = () => {
    const [presupuesto,setPresupuesto] = useState(localStorage.getItem("presupuesto") || 0);
    const [restante,setRestante] = useState(localStorage.getItem("restante") || 0);
    const [gastos,setGastos] = useState(JSON.parse(localStorage.getItem("gastos")) || []);
    const [restanteClass,setRestanteClass] = useState();
    useEffect(()=>{
        if(restante === presupuesto) setRestanteClass("text-success");
        else if(restante > (presupuesto * 50) / 100) setRestanteClass("text-primary");
        else if(restante < (presupuesto * 50) / 100 && restante > (presupuesto * 10) / 100) setRestanteClass("text-warning");
        else setRestanteClass("text-error");
    },[restante]);
    return(
        <>
            <div className="pt-2 vh-100 w-100 bg-font d-flex">
                <div 
                    className={
                        presupuesto === 0 ? ("mt-2 w-95 p-centered w-md-50 w-sm-75") : ("mt-2 w-95 p-centered w-md-80 w-sm-95")
                    }
                >
                    <header className="mb-2 navbar">
                        <section className="navbar-section">
                        
                            <a href="https://andresmarquez.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-link">Portafolio</a>
                            <a href="https://www.linkedin.com/in/andres-marquez-02/" target="_blank" rel="noopener noreferrer" className="btn btn-link">Linkedin</a>
                        </section>
                        <section className="text-secondary navbar-center">
                            Aplicacion de Gastos
                        </section>
                        <section className="navbar-section">
                            <a href="https://api.whatsapp.com/send/?phone=%2B584129298833&text&app_absent=0" target="_blank" rel="noopener noreferrer" className="btn btn-link">Whatsapp</a>
                            <a href="https://github.com/andresmarquez02" target="_blank" rel="noopener noreferrer" className="btn btn-link">GitHub</a>
                        </section>
                    </header>
                    <br/>
                    <div>
                        <div className="container grid-lg">
                            <div className="columns">
                                {
                                    presupuesto === 0 ? (
                                        <div className="column col-12">
                                            <div className="p-2 bg-white s-rounded">
                                                <Pregunta setPresupuesto={setPresupuesto} setRestante={setRestante}
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="mb-2 column col-md-12 col-lg-2 col-sm-12">
                                            <div className="p-2 bg-white s-rounded">
                                                <Gasto setGastos={setGastos} gastos={gastos} setRestante={setRestante} restante={restante}
                                                />
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    presupuesto > 0 ? (
                                        <div className="mb-2 column col-md-12 col-lg-auto col-sm-12">
                                            <div className="p-2 mb-2 bg-white s-rounded box-gastos">
                                                <Lista presupuesto={presupuesto} restante={restante} restanteClass={restanteClass} gastos={gastos}/>
                                            </div>
                                        </div>
                                    ) :
                                    ("")
                                }
                            </div>
                        </div>
                    </div>
                    <div id="ohsnap"></div>
                </div>
            </div>
        </>
    );
}
export default App;