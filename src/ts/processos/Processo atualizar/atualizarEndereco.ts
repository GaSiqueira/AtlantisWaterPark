import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";

export default class AtualizarEnderecoCliente extends Processo{
    private cliente: Cliente

    constructor(cliente: Cliente){
        super()
        this.cliente = cliente
    }
    processar(): void {
        console.clear()
        console.log(`Atualizando endereço....`)
        let novaRua = this.entrada.receberTexto('Nova rua:');
        let novoBairro = this.entrada.receberTexto('Novo bairro:');
        let novaCidade = this.entrada.receberTexto('Nova cidade:');
        let novoEstado = this.entrada.receberTexto('Novo estado:');
        let novoPais = this.entrada.receberTexto('Novo país:');
        let novoCodigoPostal = this.entrada.receberTexto('Novo código postal:');
        const novoEndereco = new Endereco(novaRua, novoBairro, novaCidade, novoEstado, novoPais, novoCodigoPostal)
        this.cliente.Endereco = novoEndereco
        console.log(`Endereço foi atualizado.`)
    }
}