import { useState, useEffect } from "react";
import { ObjectId } from 'mongodb';
import axios from "axios";


export default function DeletarTitulares(props: any){
    let tema = props.tema
    let red = "#fc6464"
    const[titulares, setTitulares] = useState<Array<{_id: ObjectId, nome: string, nomeSocial: string, CPF: string, RG: string, telefone:string, acomodacao: string}>>([])

    useEffect(()=>{
        axios.get('http://localhost:3001/listar-titulares')
         .then((response) =>{
            setTitulares(response.data)
         })
         .catch((error)=>{
            console.error(error)
         })
    }, [])

    function deletar(id:string){
        axios.delete(`http://localhost:3001/deletar-titular/${id}`)
        .then((response)=>{
            atualizar();
            console.log(response);
        })
        .catch((error)=>{
            console.error(error);
        })
    }

    const atualizar = () =>{
        axios.get('http://localhost:3001/listar-titulares')
        .then((response) => {
          setTitulares(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

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
                                    </ul>
                                </div>
                                <div>
                                        <button className="input-group-text" onClick={()=>deletar(titular._id.toString())} style={{ background: red }}>Editar</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    );
}
