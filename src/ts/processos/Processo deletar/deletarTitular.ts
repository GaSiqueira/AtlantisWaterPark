import Armazem from "../../dominio/armazem"
import Processo from "../../abstracoes/processo"
import Cliente from "../../modelos/cliente"

export default class ExcluirTitular extends Processo{
    private titulares: Cliente[]
    constructor(){
        super()
        this.titulares = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.log(`Iniciado o processo de exclusão de titular...`)
        let nomeTitular = this.entrada.receberTexto(`Nome do cliente titular: `)
        let titular = this.titulares.findIndex(cliente => cliente.Nome === nomeTitular)
        
        if(titular === -1){
            console.log(`Titular não encontrado, verifique o nome fornecido${nomeTitular}.`)
            return
        }

        this.titulares.splice(titular, 1)
        console.log(`Titular foi deletado com êxito.`)
    }
}