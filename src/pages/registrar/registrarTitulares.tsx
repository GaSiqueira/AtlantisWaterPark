import "../../static/pages.css"


export default function RegistrarTitulares(props: any){
    let tema = props.tema
    return(
        <div className="container-fluid background">
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome do titular" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="CPF do titular" aria-label="CPF" aria-describedby="basic-addon1" maxLength={11} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="RG do titular" aria-label="RG" aria-describedby="basic-addon1" maxLength={9} />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Telefone do titular" aria-label="Telefone" aria-describedby="basic-addon1" maxLength={9} />
                </div>
                <div className="list-group input-group mb-3">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                                    Endereço
                                </button>
                            </h2>
                            <div id="collapseOne1" className="accordion-collapse collapse input-group mb-3" data-bs-parent="#accordionExample">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Rua" aria-label="Rua" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Bairro" aria-label="Bairro" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Cidade" aria-label="Cidade" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Estado" aria-label="Estado" aria-describedby="basic-addon1" maxLength={2} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="País" aria-label="Pais" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-floating input-group mb-3">
                    <select className="form-selec d-flex justify-content-center" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Acomodação</option>
                        <option value="casal simples">Casal Simples</option>
                        <option value="familia mais">Família Mais</option>
                        <option value="familia simples">Família Simples</option>
                        <option value="familia super">Família Super</option>
                        <option value="solteiro simples">Solteiro Simples</option>
                        <option value="solteiro mais">Solteiro Mais</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>REGISTRAR</button>
                </div>
            </form>
        </div>
    )
}
