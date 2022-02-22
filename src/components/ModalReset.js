const ModalReset = () =>{
    const resetApp = () => {
        localStorage.removeItem("gastos");
        localStorage.removeItem("presupuesto");
        localStorage.removeItem("restante");
        window.location.href = "/";
    }
    return (
        <>
            <div className="modal modal-sm" id="modal-id">
                <a href="#close" className="modal-overlay" aria-label="Close"></a>
                <div className="modal-container">
                    <div className="modal-header">
                    <a href="#close" className="float-right btn btn-clear" aria-label="Close"></a>
                    <div className="modal-title h5">Resetar la App</div>
                    </div>
                    <div className="modal-body">
                    <div className="content">
                        ¿Esta seguro de resetear la aplicacion?
                    </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={()=> {resetApp()}} class="btn btn-error">Resetear</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ModalReset;