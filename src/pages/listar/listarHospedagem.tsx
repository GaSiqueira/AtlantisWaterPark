export default function ListarHospedagem(props:any){
    return(
        <div className="container-fluid background">
            <div className="list-group">

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                                Casal Simples
                            </button>
                        </h2>
                        <div id="collapseOne1" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className="list-unstyled">
                                    <li>Cama solteiro: 0 </li>
                                    <li>Cama casal: 1 </li>
                                    <li>Suite: 1</li>
                                    <li>Climatização: Sim </li>
                                    <li>Garagem: 1 </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
                                Família Mais
                            </button>
                        </h2>
                        <div id="collapseOne2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className="list-unstyled">
                                    <li>Cama solteiro: 5 </li>
                                    <li>Cama casal: 1 </li>
                                    <li>Suite: 2</li>
                                    <li>Climatização: Sim </li>
                                    <li>Garagem: 2 </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3">
                                Família Simples
                            </button>
                        </h2>
                        <div id="collapseOne3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className="list-unstyled">
                                    <li>Cama solteiro: 2 </li>
                                    <li>Cama casal: 1 </li>
                                    <li>Suite: 1</li>
                                    <li>Climatização: Sim </li>
                                    <li>Garagem: 1 </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne4" aria-expanded="true" aria-controls="collapseOne4">
                                Família Super
                            </button>
                        </h2>
                        <div id="collapseOne4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className="list-unstyled">
                                    <li>Cama solteiro: 6 </li>
                                    <li>Cama casal: 2 </li>
                                    <li>Suite: 3</li>
                                    <li>Climatização: Sim </li>
                                    <li>Garagem: 2 </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true" aria-controls="collapseOne5">
                                Solteiro Mais
                            </button>
                        </h2>
                        <div id="collapseOne5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className="list-unstyled">
                                    <li>Cama solteiro: 0 </li>
                                    <li>Cama casal: 1 </li>
                                    <li>Suite: 1</li>
                                    <li>Climatização: Sim </li>
                                    <li>Garagem: 1 </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne6" aria-expanded="true" aria-controls="collapseOne6">
                                Solteiro Simples
                            </button>
                        </h2>
                        <div id="collapseOne6" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className="list-unstyled">
                                    <li>Cama solteiro: 0 </li>
                                    <li>Cama casal: 1 </li>
                                    <li>Suite: 1</li>
                                    <li>Climatização: Sim </li>
                                    <li>Garagem: 0 </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}