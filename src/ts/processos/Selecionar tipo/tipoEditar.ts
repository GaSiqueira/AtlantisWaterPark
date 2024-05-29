import Processo from "../../abstracoes/processo";
import MenuTipoEditarCliente from "../../menus/ClienteMenus/menuTipoEditarCliente";
import AtualizarTitular from "../Processo atualizar/cliente/atualizarTitular";
import AtualizarDependente from "../Processo atualizar/dependente/atualizarDependente";

export default class TipoEditarCliente extends Processo{
    constructor(){
        super()
        this.menu = new MenuTipoEditarCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero(`Qual opção deseja?`)
        switch(this.opcao){
            case 1:
                this.processo = new AtualizarTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new AtualizarDependente()
                this.processo.processar()
                break
            default:
                console.log(`Opção não entendida... :(`)
        }
    }
}