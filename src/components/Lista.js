const Lista = ({presupuesto,restante,gastos,restanteClass}) => {
    return(
        <>
            <div>
                <h5 className="mt-0 text-center">Gastos Realizados</h5>
                <div className="container grid-lg">
                    <div className="columns">
                        <div className="column col-md-6">
                            <span>Saldo Inicial: {presupuesto}</span>
                        </div>
                        <div className="column col-md-6">
                            {restante > 0 ? (<span className={restanteClass}>Restante: {restante}</span>) : (<span className="red-text">Restante: Sin dinero</span>)}
                        </div>
                    </div>
                </div>
                <div className="my-2">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Unidades</th>
                                <th>Precio</th>
                                <th>Saldo</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            gastos !== "" ?
                            (
                                gastos.map((el,i) =>
                                    <tr key={i}>
                                        <td>{el.gasto}</td>
                                        <td>{el.unidades}</td>
                                        <td>{el.precio}</td>
                                        <td>{el.restante}</td>
                                        <td>{el.fecha}</td>
                                    </tr>
                                )
                            ) :
                            ("")
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default Lista;