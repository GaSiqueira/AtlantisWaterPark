import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import Telefone from "../../modelos/telefone";

export default class AtualizarTelefonesCliente extends Processo{
    private cliente: Cliente;

    constructor(cliente: Cliente){
        super();
        this.cliente = cliente
    }
    processar(): void {
        console.clear()
        console.log(`Atualizando telefones...`)

        
        let ddd = this.entrada.receberTexto(`Novo ddd de telefone:`)
        let numero = this.entrada.receberTexto(`Número do telefone: `)
        const novoTelefone = new Telefone(ddd, numero)
        this.cliente.Telefones.push(novoTelefone)
        
        console.log(`Telefones atualizados.`)

    }
}