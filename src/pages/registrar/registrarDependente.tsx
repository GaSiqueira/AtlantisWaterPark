import { useState } from "react";
import "../../static/pages.css"
import axios from "axios";

export default function RegistrarDependentes(props:any){
    let tema = props.tema
    const[nome, setNome] = useState('');
    const[nomeSocial, setNomeSocial] = useState('');
    const[CPF, setCpf] = useState('');
    const[telefone, setTelefone] = useState('');
    const[endereco, setEndereco] = useState({
        rua: '',
        bairro: '',
        cidade: '',
        estado: '',
        pais: ''
    })
    const [nomeTitular, setNomeTitular] = useState('');
    const [copiarEndereco, setCopiarEndereco] = useState<boolean>(true);
    const [titular, setTitular] = useState(JSON);
    const [mesmoEndereco, setMesmoEndereco] = useState('');

    const enderecoSet = (event: any) => {
        const { name, value } = event.target;
        setEndereco((prevEndereco) => ({
          ...prevEndereco,
          [name]: value,
        }));
      };

    const enderecoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCopiarEndereco(event.target.value === 'sim');
      };
    function buscarTitular(nome: string){
        axios.get(`http://localhost:3001/buscar-titular/${nome}`)
        .then((response)=>{
            setTitular(response.data);
        })
        if(titular){
            return true;
        }
        else{
            alert("Titular não encontrado")
            return false
        }
    }
    const adicionarDependente = () => {
        const dependente = {
          nome: nome,
          CPF: CPF
        };
    
        axios.put(`http://localhost:3000/adicionar-dependente/${nomeTitular}`, dependente)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
      };  

    function registrar(){
        let responsavel = buscarTitular(nomeTitular);
        if(responsavel){
            if(nome && nomeSocial && telefone && CPF && endereco &&  !copiarEndereco){
                adicionarDependente()
                setMesmoEndereco('não')
                axios.post('http://localhost:3001/enviar-dependente', {nome, nomeSocial, CPF, telefone, nomeTitular, mesmoEndereco, endereco})
                .then((response)=>{
                    setNome('');
                    setNomeSocial('');
                    setCpf('');
                    setTelefone('');
                    setNomeTitular('');
                    setMesmoEndereco('');
                    setCopiarEndereco(true);
                    endereco.rua = '';
                    endereco.bairro = '';
                    endereco.cidade = '';
                    endereco.estado = '';
                    endereco.pais = '';
                    console.log(response);

                })
                .catch((error)=>{
                    console.error(error);
                })
            }
            else if(nome && nomeSocial && telefone && !endereco && CPF && copiarEndereco){
                adicionarDependente()
                setMesmoEndereco('sim')
                axios.post('http://localhost:3001/enviar-dependente', {nome, nomeSocial, CPF, telefone, nomeTitular, mesmoEndereco})
                .then((response)=>{
                    setNome('');
                    setNomeSocial('');
                    setCpf('');
                    setTelefone('');
                    setNomeTitular('');
                    setMesmoEndereco('');
                    setCopiarEndereco(true);
                    console.log(response);

                })
                .catch((error)=>{
                    console.error(error);
                })
            }
            else{
                alert("Preencha todos os campos!")
            }
        }
        else{
            alert("Titular não encontrado, verifique se o mesmo existe e tente novamente!")
        }
    }  
    return(
        
        <div className="container-fluid background">
            <form>
                <div className="input-group mb-3">
                    <input value={nome} onChange={(e)=>{setNome(e.target.value)}} type="text" className="form-control" placeholder="Nome do dependente" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input value={nomeSocial} onChange={(e)=>{setNomeSocial(e.target.value)}} type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input value={CPF} onChange={(e)=>{setCpf(e.target.value)}} type="text" className="form-control" placeholder="CPF dependente" aria-label="CPF" aria-describedby="basic-addon1" maxLength={11} pattern="[0-9]{11}" />
                </div>
                <div className="input-group mb-3">
                    <input value={telefone} onChange={(e)=>{setTelefone(e.target.value)}} type="text" className="form-control" placeholder="Telefone dependente" aria-label="Telefone" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input value={nomeTitular} onChange={(e)=>{setNomeTitular(e.target.value)}} type="text" className="form-control" placeholder="Nome do titular" aria-label="Nome do titular" aria-describedby="basic-addon1"/>
                </div>
                <div className="form-floating input-group mb-3">
                    <select className="form-selec td-flex justify-content-center" id="floatingSelect" aria-label="Floating label select example" onChange={enderecoChange}>
                        <option selected value="sim">Copiar endereço titular?</option>
                        <option value="sim">Sim</option>
                        <option value="não">Não</option>
                    </select>
                </div>
                {!copiarEndereco &&(
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
                                        <input name="rua" value={endereco.rua} onChange={enderecoSet} type="text" className="form-control" placeholder="Rua" aria-label="Rua" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input name="bairro" value={endereco.bairro} onChange={enderecoSet} type="text" className="form-control" placeholder="Bairro" aria-label="Bairro" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input name="cidade" value={endereco.cidade} onChange={enderecoSet} type="text" className="form-control" placeholder="Cidade" aria-label="Cidade" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input name="estado" value={endereco.estado} onChange={enderecoSet} type="text" className="form-control" placeholder="Estado" aria-label="Estado" aria-describedby="basic-addon1" maxLength={2} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input name="pais" value={endereco.pais} onChange={enderecoSet} type="text" className="form-control" placeholder="País" aria-label="Pais" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" onClick={registrar} type="button" style={{ background: tema }}>REGISTRAR</button>
                </div>
            </form>
        </div>
    )
}
