import "../../static/pages.css"
import { useEffect, useState } from "react"
import axios from "axios"

export default function ListarTitulares(){

    const[titulares, setTitulares] = useState<Array<{id: number, nome: string, nomeSocial: string, CPF: string, RG: string, telefone:string, acomodacao: string, dependetes: Array<dependente>}>>([])
    type dependente ={
        nome: string,
        CPF: string
    }

    useEffect(()=>{
        axios.get('http://localhost:3001/listar-titulares')
         .then((response) =>{
            setTitulares(response.data)
         })
         .catch((error)=>{
            console.error(error)
         })
    }, [])

    return(
        <div className="container-fluid background">
            <div className="list-group">
                {titulares.map((titular, index)=>(
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target={`#collapseOne${index}`}  
                            ria-expanded="true" 
                            aria-controls={`collapseOne${index}`}>
                                {titular.nome}
                            </button>
                        </h2>
                            <div id={`collapseOne${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <ul className="list-unstyled">
                                        <li>Nome: {titular.nome}</li>
                                        <li>CPF: {titular.CPF}</li>
                                        <li>RG: {titular.RG}</li>
                                        <li>Telefone: {titular.telefone}</li>
                                        <li>Acomodação: {titular.acomodacao}</li>
                                        <li>Dependentes:
                                            <ul>
                                                <li className="list-inline-item">dependente</li>
                                            </ul>
                                        </li>
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
