import Processo from "../../abstracoes/processo"
import Cliente from "../../modelos/cliente"
import MenuTipoDocumento from '../../menus/ClienteMenus/menuTipoDocumento';
import CadastroCpf from "../Processo cadastro/cadastroCpf";
import CadastroRg from "../Processo cadastro/cadastroRg";
import CadastroPassaporte from "../Processo cadastro/cadastroPassaporte";

export default class AtualizarDocumentosCliente extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.menu = new MenuTipoDocumento()
        this.execucao = true
    }

    processar(): void {
        this.cliente.Documentos = []
        console.log('Inciando o cadastro de documentos...')
        while (this.execucao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual opção desejada?')
            switch (this.opcao) {
                case 1:
                    this.processo = new CadastroCpf(this.cliente)
                    this.processo.processar()
                    break
                case 2:
                    this.processo = new CadastroRg(this.cliente)
                    this.processo.processar()
                    break
                case 3:
                    this.processo = new CadastroPassaporte(this.cliente)
                    this.processo.processar()
                case 0:
                    this.execucao = false
                    break
                default:
                    console.log('Opção não entendida :(')
            }
        }
    }
}