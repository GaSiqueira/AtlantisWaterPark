import Processo from "../../../abstracoes/processo";
import Armazem from "../../../dominio/armazem";
import Cliente from "../../../modelos/cliente";
import AtualizarDocumentosCliente from "../atualizarDocumentos";
import AtualizarEnderecoCliente from "../atualizarEndereco";
import AtualizarTelefonesCliente from "../atualizarTelefones";

export default class AtualizarDependente extends Processo{
    private dependentes: Cliente[]
    constructor(){
        super()
        this.dependentes = Armazem.InstanciaUnica.Dependentes

    }
    processar(): void {
        console.clear()
        console.log(`Atualizando dependente...`)
        let nomeTitular = this.entrada.receberTexto(`Nome do titular do dependente: `)
        let titular = Armazem.InstanciaUnica.Clientes.find(titular => titular.Nome === nomeTitular)
        if(!titular){
            console.log(`Titular não encontrado.`)
            return
        }

        let nomeDependente = this.entrada.receberTexto(`Nome do dependente que deseja atualizar: `)
        let dependente = titular.Dependentes.find(dependente => dependente.Nome === nomeDependente)
        if(!dependente){
            console.log(`Dependente não encontrado.`)
            return
        }
        console.clear()
        console.log(`Coletando dados para atualização...`)
        let novoNome = this.entrada.receberTexto(`Novo nome: `)
        let novoNomeSocial = this.entrada.receberTexto(`Novo nome social: `)
        let novaDataNascimento = this.entrada.receberData(`Nova data nascimento: `)
        dependente.Nome = novoNome
        dependente.NomeSocial = novoNomeSocial
        dependente.DataNascimento = novaDataNascimento

        this.processo = new AtualizarTelefonesCliente(dependente)
        this.processo.processar()

        this.processo = new AtualizarDocumentosCliente(dependente)
        this.processo.processar()

        this.processo = new AtualizarEnderecoCliente(dependente)
        this.processo.processar()

        console.log(`Atualização concluída com êxito!`)

    }

}