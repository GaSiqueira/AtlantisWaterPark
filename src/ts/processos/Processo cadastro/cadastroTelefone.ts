import Processo from "../../abstracoes/processo";
import Telefone from "../../modelos/telefone";
import Cliente from '../../modelos/cliente';
import MenuTelefone from "../../menus/ClienteMenus/menuTelefone";

export default class CadastrarTelefones extends Processo{
    private cliente: Cliente
    constructor(cliente: Cliente){
        super()
        this.cliente = cliente
        this.menu = new MenuTelefone()
        this.execucao = true
    }
    processar(): void {
        console.log(`Coletando dados de contato...`)
        while (this.Execucao){
            let ddd = this.entrada.receberTexto(`Qual o DDD do telefone?`)
            let numero = this.entrada.receberTexto(`Qual o número do telefone?`)
            let telefone = new Telefone(ddd, numero)
            this.cliente.Telefones.push(telefone)
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero(`Qual opção?`)
            if(!this.opcao){
                this.execucao = false
            }
        }
    }
}