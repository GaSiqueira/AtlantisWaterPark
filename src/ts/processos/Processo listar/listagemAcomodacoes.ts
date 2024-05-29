import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorAcomodacao from "../../impressores/impressorAcomodacao";
import Impressor from "../../interfaces/impressor";
import Acomodacao from "../../modelos/acomodacao";

export default class ListagemAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    private impressor!: Impressor
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        console.clear()
        console.log('Iniciando a listagem das acomodações ofertadas...')
        console.log(`-------------------------------------------------`)
        let cont = 0
        this.acomodacoes.forEach(acomodacao => {
            this.impressor = new ImpressorAcomodacao(cont, acomodacao)
            console.log(this.impressor.imprimir())
            cont += 1
            console.log(`-------------------------------------------------`)
        })
    }
}