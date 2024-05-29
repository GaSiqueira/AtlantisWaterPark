import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import MenuEnderecoDependente from "../../menus/ClienteMenus/menuEnderecoDependente";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";

export default class cadastroEnderecoDependente extends Processo {
    private dependente: Cliente
    private titular: Cliente

    constructor(dependente: Cliente, titular: Cliente) {
        super()
        this.menu = new MenuEnderecoDependente()
        this.dependente = dependente
        this.titular = titular
    }

    processar(): void {
        console.clear()
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero(`Selecione uma opção: `)
        if(this.opcao === 1){
            this.dependente.Endereco = this.titular.Endereco
        }
        else if(this.opcao === 2){
            console.log('Coletando os dados de endereço...')
            let rua = this.entrada.receberTexto('Qual a rua?')
            let bairro = this.entrada.receberTexto('Qual o bairro?')
            let cidade = this.entrada.receberTexto('Qual a cidade?')
            let estado = this.entrada.receberTexto('Qual o estado?')
            let pais = this.entrada.receberTexto('Qual o país?')
            let codigoPostal = this.entrada.receberTexto('Qual o código postal?')
            let endereco = new Endereco(rua,bairro,cidade,estado,pais,codigoPostal)
            this.dependente.Endereco = endereco
        }
        else{
            console.log(`Algo deu errado :(`)
        }
    }

}