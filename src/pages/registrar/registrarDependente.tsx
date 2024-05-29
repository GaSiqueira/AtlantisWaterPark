import { useState } from "react";
import "../../static/pages.css"

export default function RegistrarDependentes(props:any){
    let tema = props.tema
    const [mesmoEndereco, setMesmoEndereco] = useState<boolean>(true);

    const enderecoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMesmoEndereco(event.target.value === 'sim');
      };

    return(
        
        <div className="container-fluid background">
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome do dependente" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="CPF dependente" aria-label="CPF" aria-describedby="basic-addon1" maxLength={11} pattern="[0-9]{11}" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Telefone dependente" aria-label="Telefone" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome do titular" aria-label="Nome do titular" aria-describedby="basic-addon1"/>
                </div>
                <div className="form-floating input-group mb-3">
                    <select className="form-selec td-flex justify-content-center" id="floatingSelect" aria-label="Floating label select example" onChange={enderecoChange}>
                        <option selected value="sim">Copiar endereço titular?</option>
                        <option value="sim">Sim</option>
                        <option value="nao">Não</option>
                    </select>
                </div>
                {!mesmoEndereco &&(
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
                )}
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>REGISTRAR</button>
                </div>
            </form>
        </div>
    )
}
