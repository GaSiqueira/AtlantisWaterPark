import { useState } from "react"
import "../../static/pages.css"
import axios from "axios";


export default function RegistrarTitulares(props: any){
    let tema = "#00FF00"
    const[nome, setNome] = useState('');
    const[nomeSocial, setNomeSocial] = useState('');
    const[CPF, setCpf] = useState('');
    const[RG, setRg] = useState('');
    const[telefone, setTelefone] = useState('');
    const[endereco, setEndereco] = useState({
        rua: '',
        bairro: '',
        cidade: '',
        estado: '',
        pais: ''
    })
    const[dependentes, setDependetes] = useState([]);
    const enderecoChange = (event: any) => {
        const { name, value } = event.target;
        setEndereco((prevEndereco) => ({
          ...prevEndereco,
          [name]: value,
        }));
      };
    const [acomodacao, setAcomodacao] = useState('');

    function registrar(){
        if(nome && nomeSocial && CPF && RG && telefone && endereco){
            axios.post('http://localhost:3001/enviar-titular', {nome, nomeSocial, CPF, RG, telefone, endereco, acomodacao, dependentes})
            .then((response)=>{
                setNome('');
                setNomeSocial('');
                setCpf('');
                setRg('');
                setTelefone('');
                endereco.rua = '';
                endereco.bairro = '';
                endereco.cidade = '';
                endereco.estado = '';
                endereco.pais = '';
                setAcomodacao('');
                console.log(response);
            })
            .catch((error)=>{
                console.error(error);
            })
        }
        else if(!nome || !nomeSocial || !CPF || !RG || !telefone){
            alert("Preencha todos os campos!")
        }
        else if(!endereco.rua || !endereco.bairro || !endereco.cidade || !endereco.estado || !endereco.pais){
            alert("Preencha todos os campos do endereço!")
        }
    }  

    return(
        <div className="container-fluid background">
            <form>
                <div className="input-group mb-3">
                    <input value={nome} onChange={(e) => {setNome(e.target.value)}} type="text" className="form-control" placeholder="Nome do titular" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input value={nomeSocial} onChange={(e) => {setNomeSocial(e.target.value)}} type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input value={CPF} onChange={(e) => {setCpf(e.target.value)}} type="text" className="form-control" placeholder="CPF do titular" aria-label="CPF" aria-describedby="basic-addon1" maxLength={11} />
                </div>
                <div className="input-group mb-3">
                    <input value={RG} onChange={(e) => {setRg(e.target.value)}} type="text" className="form-control" placeholder="RG do titular" aria-label="RG" aria-describedby="basic-addon1" maxLength={9} />
                </div>
                <div className="input-group mb-3">
                    <input value={telefone} onChange={(e) => {setTelefone(e.target.value)}} type="text" className="form-control" placeholder="Telefone do titular" aria-label="Telefone" aria-describedby="basic-addon1" maxLength={9} />
                </div>
                <h5>Endereço</h5>   
                <div className="input-group mb-3">
                    <input name="rua" value={endereco.rua} onChange={enderecoChange} type="text" className="form-control" placeholder="Rua" aria-label="Rua" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input name="bairro" value={endereco.bairro} onChange={enderecoChange} type="text" className="form-control" placeholder="Bairro" aria-label="Bairro" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input name="cidade" value={endereco.cidade} onChange={enderecoChange} type="text" className="form-control" placeholder="Cidade" aria-label="Cidade" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input name="estado" value={endereco.estado} onChange={enderecoChange} type="text" className="form-control" placeholder="Estado" aria-label="Estado" aria-describedby="basic-addon1" maxLength={2} />
                </div>
                <div className="input-group mb-3">
                    <input name="pais" value={endereco.pais} onChange={enderecoChange} type="text" className="form-control" placeholder="País" aria-label="Pais" aria-describedby="basic-addon1" />
                </div>
                
                <div className="form-floating input-group mb-3">
                    <select value={acomodacao} onChange={(e)=>{setAcomodacao(e.target.value)}} className="form-selec d-flex justify-content-center" id="floatingSelect" aria-label="Floating label select example">
                        <option value="Não informada" selected>Acomodação</option>
                        <option value="casal simples">Casal Simples</option>
                        <option value="familia mais">Família Mais</option>
                        <option value="familia simples">Família Simples</option>
                        <option value="familia super">Família Super</option>
                        <option value="solteiro simples">Solteiro Simples</option>
                        <option value="solteiro mais">Solteiro Mais</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <button onClick={registrar} className="btn btn-outline-secondary" type="button" style={{ background: tema }}>REGISTRAR</button>
                </div>
            </form>
        </div>
    )
}
