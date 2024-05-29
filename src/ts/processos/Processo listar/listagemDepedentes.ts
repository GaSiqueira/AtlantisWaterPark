import Processo from "../../abstracoes/processo"
import Armazem from "../../dominio/armazem"
import Impressor from "../../interfaces/impressor"
import Cliente from "../../modelos/cliente"
import ImpressorDependente from "../../impressores/impressorDependente"

export default class ListagemDependetes extends Processo{
    private clientes: Cliente[]
    private impressor!: Impressor
    
    constructor(){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        console.log(`Executando listagem...`)
        let nomeTitular = this.entrada.receberTexto(`Nome do cliente titular: `)
        let titular = this.clientes.find(cliente => cliente.Nome === nomeTitular)
        if(!titular){
            console.warn(`Titular não encontrado, verefique o nome fornecido.`)
            return
        }
        if(!titular.Dependentes){
            console.warn(`Titular não tem dependentes cadastrados.`)
            return
        }
        titular.Dependentes.forEach(dependente =>{
            this.impressor = new ImpressorDependente(dependente)
            console.log(this.impressor.imprimir())
        })
    }
}