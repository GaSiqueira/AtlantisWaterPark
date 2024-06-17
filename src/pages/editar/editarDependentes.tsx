import "../../static/pages.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { ObjectId } from "mongodb"

export default function EditarDependentes(props:any){
    let green = "#00ff00"
    let tema = props.tema
    const[dependentes, setDependentes] = useState<Array<{_id: ObjectId, nome: string, nomeSocial: string, CPF: string, telefone:string, nomeTitular: string}>>([])

    const[nome, setNome] = useState('');
    const[nomeSocial, setNomeSocial] = useState('');
    const[telefone, setTelefone] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:3001/listar-dependentes')
         .then((response) =>{
            setDependentes(response.data)
         })
         .catch((error)=>{
            console.error(error)
         })
    }, [])

    const atualizar = () =>{
        axios.get('http://localhost:3001/listar-dependentes')
        .then((response) => {
          setDependentes(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    function editar(id: string){
        if (nome && nomeSocial && telefone) {
            const atualizacao = {
                nome: nome,
                nomeSocial: nomeSocial,
                telefone: telefone
            };
            if (nome) atualizacao['nome'] = nome;
            if (nomeSocial) atualizacao['nomeSocial'] = nomeSocial;
            if (telefone) atualizacao['telefone'] = telefone;

            axios.put(`http://localhost:3001/editar-dependente/${id}`, atualizacao)
                .then((response) => {
                    console.log(response);
                    setNome('');
                    setNomeSocial('');
                    setTelefone('');
                    atualizar();
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        else{
            alert("Caso não for editar algum campo, deixe com o valor anterior!")
        }      
    }

    return(
            <div className="container-fluid background">
            <div className="list-group">
                {dependentes.map((dependente, index)=>(
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target={`#collapseOne${index}`}  
                                ria-expanded="true" 
                                aria-controls={`collapseOne${index}`}>
                                    {dependente.nome}
                                </button>
                            </h2>
                            <div id={`collapseOne${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="input-group-3">
                                        <label className="input-group mb-1">Nome: </label>
                                        <input type="text" className="form-control" value={nome} onChange={(e)=>setNome(e.target.value)} placeholder={dependente.nome} aria-label="Nome dependente" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group-3">
                                        <label className="input-group mb-1">Nome social: </label>
                                        <input type="text" className="form-control" value={nomeSocial} onChange={(e)=>setNomeSocial(e.target.value)} placeholder={dependente.nomeSocial} aria-label="Nome dependente" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group-3">
                                        <label className="input-group mb-1">CPF: </label>
                                        <input type="text" className="form-control" placeholder={dependente.CPF} aria-label="CPF dependente" aria-describedby="basic-addon1" disabled/>
                                    </div>
                                    <div className="input-group-3">
                                        <label className="input-group mb-1">Telefone: </label>
                                        <input type="text" className="form-control" value={telefone} onChange={(e)=>setTelefone(e.target.value)} placeholder={dependente.telefone} aria-label="Telefone dependente" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div className="input-group-3">
                                        <label className="input-group mb-1">Titular: </label>
                                        <input type="text" className="form-control" placeholder={dependente.nomeTitular} aria-label="Telefone dependente" aria-describedby="basic-addon1" disabled/>
                                    </div>
                                    <div>
                                        <button className="input-group-text" onClick={()=>editar(dependente._id.toString())} style={{ background: green }}>Editar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        ))}
            </div>
        </div>
    )
}
