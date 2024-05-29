import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";
export default class ListagemTitularDependente extends Processo{
    private dependentes: Cliente[]
    private titulares : Cliente[]
    private impressor!: Impressor
    constructor(){
        super()
        this.dependentes = Armazem.InstanciaUnica.Dependentes
        this.titulares = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        console.log(`Listagem de titulares de um dependente...`)
        let nomeDependente = this.entrada.receberTexto(`Nome do dependente: `)
        let dependente = this.dependentes.find(dependente => dependente.Nome === nomeDependente)
        if(!dependente){
            console.log(`Dependente não encontrado.`)
            return
        }

        let titular = this.titulares.find(
            (titular): titular is Cliente => {
                return typeof titular !== 'undefined' && Array.isArray(titular.Dependentes);
            }
            ) as Cliente;
            
        if (!titular){
            console.log(`Titular não encontrado.`)
            return
        }
        console.log(`Titular de: ${nomeDependente}`)
        this.impressor = new ImpressaorCliente(titular)
        console.log(this.impressor.imprimir())
    }
}