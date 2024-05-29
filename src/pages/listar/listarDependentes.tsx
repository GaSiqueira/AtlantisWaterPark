import "../../static/pages.css"
export default function ListarDependentes(props: any){
    let tema = props.tema
    return(
        <div className="container-fluid background">
            <div className="list-group">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                                dependente 1
                            </button>
                        </h2>
                        <div id="collapseOne1" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className="list-unstyled">
                                    <li>Nome: nome do dependente</li>
                                    <li>CPF: CPF do dependente</li>
                                    <li>titular: nome do titular</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
                                dependente 2
                            </button>
                        </h2>
                        <div id="collapseOne2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className="list-unstyled">
                                    <li>Nome: nome do dependente</li>
                                    <li>CPF: CPF do dependente</li>
                                    <li>titular: nome do titular</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3">
                                dependente 3
                            </button>
                        </h2>
                        <div id="collapseOne3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className="list-unstyled">
                                    <li>Nome: nome do dependente</li>
                                    <li>CPF: CPF do dependente</li>
                                    <li>titular: nome do titular</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne4" aria-expanded="true" aria-controls="collapseOne4">
                                dependente 4
                            </button>
                        </h2>
                        <div id="collapseOne4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className="list-unstyled">
                                    <li>Nome: nome do dependente</li>
                                    <li>CPF: CPF do dependente</li>
                                    <li>titular: nome do titular</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true" aria-controls="collapseOne5">
                                dependente 5
                            </button>
                        </h2>
                        <div id="collapseOne5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className="list-unstyled">
                                    <li>Nome: nome do dependente</li>
                                    <li>CPF: CPF do dependente</li>
                                    <li>titular: nome do titular</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
