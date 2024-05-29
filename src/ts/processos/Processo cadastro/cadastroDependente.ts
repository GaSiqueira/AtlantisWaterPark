import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import Armazem from "../../dominio/armazem";
import CadastrarTelefones from "./cadastroTelefone";
import CadastroEnderecoDependente from "./cadastroEnderecoDependente";


export default class CadastroDependente extends Processo{
    processar(): void {
        console.log(`Iniciando o cadastro de um novo dependente...`)
        let nomeTitular = this.entrada.receberTexto(`Qual o nome do cliente titular?`)
        let armazem = Armazem.InstanciaUnica
        let titular = armazem.Clientes.find(cliente => cliente.Nome === nomeTitular)
        if (!titular){
            console.log(`Cliente não foi encontrado!`)
            return
        }
        let nome = this.entrada.receberTexto(`Qual o nome do novo dependente?`)
        let nomeSocial = this.entrada.receberTexto(`Qual o nome social do dependente?`)
        let dataNascimento = this.entrada.receberData(`Qual a data de nascimento?`)
        let dependente = new Cliente(nome, nomeSocial, dataNascimento)
        
        this.processo = new CadastroEnderecoDependente(dependente, titular)
        this.processo.processar()
        this.processo = new  CadastrarDocumentosCliente(dependente)
        this.processo.processar()
        this.processo = new CadastrarTelefones(dependente)
        this.processo.processar()

        titular.Dependentes.push(dependente)
        armazem.Dependentes.push(dependente)
        console.log('Finalizando o cadastro do cliente')
        
    }
}