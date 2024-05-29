import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";

export default class ExcluirDependente extends Processo{
    private dependentes: Cliente[]
    constructor(){
        super()
        this.dependentes = Armazem.InstanciaUnica.Dependentes
    }
    processar(): void {
        console.log(`Iniciado o processo de exclusão de dependente...`)
        let nomeDependente = this.entrada.receberTexto(`Nome do dependente: `)
        let dependente = this.dependentes.findIndex(dependente => dependente.Nome === nomeDependente)

        if(dependente === -1){
            console.log(`Dependente não encontrado, verifique o nome fornecido: ${nomeDependente}.`)
            return
        }
        this.dependentes.splice(dependente, 1)
        console.log(`Dependente foi deletado com êxito`)
    }
}