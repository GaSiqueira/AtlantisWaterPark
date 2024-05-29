import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import TipoEditarCliente from "./Selecionar tipo/tipoEditar"
import TipoCadastroCliente from "./Selecionar tipo/tipoCadastroCliente"
import TipoDeletarClientes from "./Selecionar tipo/tipoDeletarClientes"
import TipoListagemClientes from "./Selecionar tipo/tipoListagemClientes"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break
            case 2:
                this.processo = new TipoEditarCliente()
                this.processo.processar
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break
            case 4:
                this.processo = new TipoDeletarClientes()
                this.processo.processar()
                break
            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}