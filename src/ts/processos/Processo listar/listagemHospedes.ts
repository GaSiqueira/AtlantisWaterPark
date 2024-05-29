import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Acomodacao from "../../modelos/acomodacao";

export default class ListagemHospedes extends Processo{
    private acomodacoes!: Acomodacao[]

    constructor(){
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }

    processar(): void {
        console.log(`Listagem de hóspedes: `)
        this.acomodacoes.forEach(acomodacao =>{
            console.log(`Acomodação: ${acomodacao.NomeAcomadacao}`)
            console.log(`Hóspedes: `)
            if (acomodacao.listarHospedes().length > 0){
                acomodacao.listarHospedes().forEach(hospede =>{
                    console.log(`* ${hospede.Nome}`)
                })
            }
            else{
                console.log(`Nenhum hóspede registrado.`)
            }
            console.log("=====================")
        })
    }
}