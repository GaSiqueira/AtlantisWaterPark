import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";
import ListagemAcomodacoes from "./Processo listar/listagemAcomodacoes";

export default class Hospedagem extends Processo{
    private clientes!: Cliente[]
    private acomodacoes!: Acomodacao[]

    constructor(){
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        console.clear()
        console.log('Inicializando hospedagem...')
        let nomeTitular = this.entrada.receberTexto(`Nome do cliente titular: `)
        let titular = this.clientes.find(cliente => cliente.Nome === nomeTitular)

        if (!titular){
            console.log(`Cliente não encontrado!`)
            return
        }

        this.processo = new ListagemAcomodacoes()
        this.processo.processar()
        let opcao = this.entrada.receberNumero(`Selecione acomodação entre 0-5: `)

        if(opcao < 0 || opcao >= this.acomodacoes.length){
            console.log("Acomodação inválida!")
            return
        }
        let acomodacao = this.acomodacoes[opcao]
        titular.Acomodacao = acomodacao
        acomodacao.registrarHospede(titular)
        console.log(`Hospedagem concluída!`)
    }

}