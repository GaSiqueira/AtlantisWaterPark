import Processo from "../../abstracoes/processo";
import DiretorCasalSimples from "../../diretores/diretorCasalSimples";
import DiretorFamiliaSimples from "../../diretores/diretorFamiliaSimples";
import DiretorFamiliaSuper from "../../diretores/diretorFamiliaSuper";
import DiretorSolteiroSimples from "../../diretores/diretorSolteiroSimples";
import Armazem from "../../dominio/armazem";
import Acomodacao from "../../modelos/acomodacao";
import DiretorFamiliaMais from './../../diretores/diretorFamiliaMais';
import DiretorSolteiroMais from './../../diretores/diretorSolteiroMais';

export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        let diretorSolteiroSimples = new DiretorSolteiroSimples()
        this.acomodacoes.push(diretorSolteiroSimples.construir())

        let diretorCasalSimples = new DiretorCasalSimples()
        this.acomodacoes.push(diretorCasalSimples.construir())

        let diretorFamiliaSimples = new DiretorFamiliaSimples()
        this.acomodacoes.push(diretorFamiliaSimples.construir())

        let diretorFamiliaSuper = new DiretorFamiliaSuper()
        this.acomodacoes.push(diretorFamiliaSuper.construir())

        let diretorFamiliaMais = new DiretorFamiliaMais()
        this.acomodacoes.push(diretorFamiliaMais.construir())

        let diretorSolteiroMais = new DiretorSolteiroMais()
        this.acomodacoes.push(diretorSolteiroMais.construir())
    }
}