import "../../static/pages.css"
import { useEffect, useState } from "react"
import axios from 'axios';
export default function ListarDependentes(props: any){
    let tema = props.tema
    const[Dependentes, setDependentes] = useState<Array<{id: number, nome: string, nomeSocial: string, CPF: string, telefone:string, titular: string}>>([])

    useEffect(()=>{
        axios.get('http://localhost:3001/listar-dependentes')
         .then((response) =>{
            setDependentes(response.data)
         })
         .catch((error)=>{
            console.error(error)
         })
    }, [])

    return(
        <div className="container-fluid background">
            <div className="list-group">
                {Dependentes.map((Dependente, index)=>(
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target={`#collapseOne${index}`}  
                            ria-expanded="true" 
                            aria-controls={`collapseOne${index}`}>
                                {Dependente.nome}
                            </button>
                        </h2>
                            <div id={`collapseOne${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul className="list-unstyled">
                                        <li>Nome: {Dependente.nome}</li>
                                        <li>CPF: {Dependente.CPF}</li>
                                        <li>Telefone: {Dependente.telefone}</li>
                                        <li>Titular: {Dependente.titular}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    );
}
