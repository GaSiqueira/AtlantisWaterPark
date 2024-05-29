import Processo from "../../../abstracoes/processo";
import Armazem from "../../../dominio/armazem";
import Cliente from "../../../modelos/cliente";
import AtualizarDocumentosCliente from "../atualizarDocumentos";
import AtualizarEnderecoCliente from "../atualizarEndereco";
import AtualizarTelefonesCliente from "../atualizarTelefones";

export default class AtualizarTitular extends Processo{
    private titulares: Cliente[]
    
    constructor(){
        super()
        this.titulares = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        console.clear()
        console.log(`Atualizando titular...`)

        const nomeTitular = this.entrada.receberTexto(`Nome do titular que deseja atualizar: `)
        const titular = this.titulares.find(titular => titular.Nome === nomeTitular)
        if(!titular){
            console.log(`Cliente titular não encontrado. `)
            return
        }

        console.log(`Coletando dados para atualização...`)
        let novoNome = this.entrada.receberTexto(`Novo nome do cliente: `)
        let novoNomeSocial = this.entrada.receberTexto(`Novo nome social do cliente: `)
        let novaDataNascimento = this.entrada.receberData(`Nova data de nascimento: `)
        titular.Nome = novoNome
        titular.NomeSocial = novoNomeSocial
        titular.DataNascimento = novaDataNascimento
        
        this.processo = new AtualizarTelefonesCliente(titular)
        this.processo.processar()

        this.processo = new AtualizarDocumentosCliente(titular)
        this.processo.processar()

        this.processo = new AtualizarEnderecoCliente(titular)
        this.processo.processar()

        console.log(`Atualização concluída com êxito!`)

        
    }
}