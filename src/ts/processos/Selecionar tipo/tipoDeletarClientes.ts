import Processo from "../../abstracoes/processo";
import MenuTipoDeletarCliente from "../../menus/ClienteMenus/menuTipoDeletarCliente";
import ExcluirDependente from "../Processo deletar/deletarDependente";
import ExcluirTitular from "../Processo deletar/deletarTitular";

export default class TipoDeletarClientes extends Processo{
    constructor(){
        super()
        this.menu = new MenuTipoDeletarCliente
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero(`Qual opção deseja?`)
        switch(this.opcao){
            case 1:
                this.processo = new ExcluirTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new ExcluirDependente()
                this.processo.processar()
                break
            default:
                console.log(`Opção não entendida... :(`)
        }
    }
}