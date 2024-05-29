import Impressor from "../interfaces/impressor"
import Cliente from "../modelos/cliente"
import ImpressorDocumentos from "./impressorDocumentos"
import ImpressorEndereco from "./impressorEndereco"

export default class ImpressorDependente implements Impressor {
    private dependente: Cliente
    private impressor!: Impressor

    constructor(cliente: Cliente) {
        this.dependente = cliente

    }
    imprimir(): string {
        let impressao = `****************************\n`
            + `| Nome: ${this.dependente.Nome}\n`
            + `| Nome social: ${this.dependente.NomeSocial}\n`
            + `| Data de nascimento: ${this.dependente.DataNascimento.toLocaleDateString()}\n`
            + `| Data de cadastro: ${this.dependente.DataCadastro.toLocaleDateString()}`

        this.impressor = new ImpressorEndereco(this.dependente.Endereco)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        this.impressor = new ImpressorDocumentos(this.dependente.Documentos)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        impressao = impressao + `\n****************************`
        return impressao
    }

}