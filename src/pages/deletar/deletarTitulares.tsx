
export default function DeletarTitulares(props: any){
    let tema = props.tema
    let red = "#fc6464"
    return(
        <div className="container-fluid background">
            <div className="list-group">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                                titular 1
                            </button>
                        </h2>
                        <div id="collapseOne1" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className="list-unstyled">
                                    <li>Nome: nome do titular</li>
                                    <li>CPF: CPF do titular</li>
                                    <li>dependentes: 
                                        <ul>
                                            <li className="list-inline-item">dependente 1</li>
                                            <li className="list-inline-item">dependente 2</li>
                                            <li className="list-inline-item">dependente 3</li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="input-group mb-3">
                                    <button className="input-group-text" style={{ background: red}} disabled >Deletar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
                                titular 2
                            </button>
                        </h2>
                        <div id="collapseOne2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className="list-unstyled">
                                    <li>Nome: nome do titular</li>
                                    <li>CPF: CPF do titular</li>
                                    <li>dependentes: 
                                        <ul>
                                            <li className="list-inline-item">dependente 1</li>
                                            <li className="list-inline-item">dependente 2</li>
                                            <li className="list-inline-item">dependente 3</li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="input-group mb-3">
                                    <button className="input-group-text" style={{ background: red}} disabled >Deletar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3">
                                titular 3
                            </button>
                        </h2>
                        <div id="collapseOne3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className="list-unstyled">
                                    <li>Nome: nome do titular</li>
                                    <li>CPF: CPF do titular</li>
                                    <li>dependentes: 
                                        <ul>
                                            <li className="list-inline-item">dependente 1</li>
                                            <li className="list-inline-item">dependente 2</li>
                                            <li className="list-inline-item">dependente 3</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne4" aria-expanded="true" aria-controls="collapseOne4">
                                titular 4
                            </button>
                        </h2>
                        <div id="collapseOne4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className="list-unstyled">
                                    <li>Nome: nome do titular</li>
                                    <li>CPF: CPF do titular</li>
                                    <li>dependentes: 
                                        <ul>
                                            <li className="list-inline-item">dependente 1</li>
                                            <li className="list-inline-item">dependente 2</li>
                                            <li className="list-inline-item">dependente 3</li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="input-group mb-3">
                                    <button className="input-group-text" style={{ background: red}} disabled >Deletar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true" aria-controls="collapseOne5">
                                titular 5
                            </button>
                        </h2>
                        <div id="collapseOne5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <ul className="list-unstyled">
                                    <li>Nome: nome do titular</li>
                                    <li>CPF: CPF do titular</li>
                                    <li>dependentes: 
                                        <ul>
                                            <li className="list-inline-item">dependente 1</li>
                                            <li className="list-inline-item">dependente 2</li>
                                            <li className="list-inline-item">dependente 3</li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="input-group mb-3">
                                    <button className="input-group-text" style={{ background: red}} disabled >Deletar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
