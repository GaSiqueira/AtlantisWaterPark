import { cadastro } from "../modelos/cadastro";
import Entrada from "../teste/entrada";
import Cliente from "../modelos/entidades/cliente";
import Endereco from "../modelos/entidades/endereco";
import Documento from '../modelos/entidades/documento';
import Telefone from "../modelos/entidades/telefone";

export default class CadastrarCliente extends cadastro {
    private entrada = new Entrada();

    public cadastrar(): void {
        console.log(`Cadastre seu cliente!`);
        let cliente = new Cliente();
        cliente.nome = this.entrada.receberTexto(`Nome do cliente: `)
        cliente.nomeSocial = this.entrada.receberTexto(`Nome social do cliente: `)
        cliente.dataCadastro = this.entrada.receberData(`Informe a data de cadastro do cliente`)
        cliente.dataNascimento = this.entrada.receberData(`Informe a data de nascimento do cliente`)

        let endereco = new Endereco();
        endereco.rua = this.entrada.receberTexto(`Informe a rua da moradia do cliente: `)
        endereco.bairro = this.entrada.receberTexto(`Informe o bairro que a moradia se encontra: `)
        endereco.cidade = this.entrada.receberTexto(`Informe a cidade da moradia: `)
        endereco.estado = this.entrada.receberTexto(`Informe o estado da moradia: `)
        endereco.pais = this.entrada.receberTexto(`Informe o país da moradia: `)
        endereco.codigoPostal = this.entrada.receberTexto(`Informe o código postal da moradia: `)
        cliente.endereco = endereco;

        let documento = new Documento();
        documento.nome = cliente.nome
        documento.tipo = this.entrada.receberTipo(`Informe o tipo do documento (CPF, RG ou Passaporte): `)
        documento.numero = this.entrada.receberTexto(`Informe o número do documento: `)
        documento.dataExpedicao = this.entrada.receberData(`Informe a data de expedição do documento`)
        cliente.documentos.push(documento);

        let opcao = this.entrada.receberNumero(`Deseja cadastrar outro documento? 1-Sim 0-Não `)
        while(opcao){
            documento = new Documento()
            documento.nome = cliente.nome
            documento.tipo = this.entrada.receberTipo(`Informe o tipo do documento (CPF, RG ou Passaporte): `)
            documento.numero = this.entrada.receberTexto(`Informe o número do documento: `)
            documento.dataExpedicao = this.entrada.receberData(`Informe a data de expedição do documento`)
            cliente.documentos.push(documento);
            opcao = this.entrada.receberNumero(`Deseja cadastrar outro documento? 1-Sim 0-Não `)
        }

        let telefone = new Telefone()
        telefone.ddd = this.entrada.receberTexto(`Informe o DDD do telefone: `)
        telefone.numero = this.entrada.receberTexto(`Informe o número do telefone: `)
        cliente.telefones.push(telefone)
        opcao = this.entrada.receberNumero(`Deseja cadastrar outro telefone? 1-Sim 0-Não `)
        while(opcao){
            telefone = new Telefone()
            telefone.ddd = this.entrada.receberTexto(`Informe o DDD do telefone: `)
            telefone.numero = this.entrada.receberTexto(`Informe o número do telefone: `)
            cliente.telefones.push(telefone)
            opcao = this.entrada.receberNumero(`Deseja cadastrar outro telefone? 1-Sim 0-Não `)
        }
        
        opcao = this.entrada.receberNumero(`Deseja cadastrar dependente? 1-Sim 0-Não `)
        while(opcao){
            let  dependente = new Cliente();
            dependente.nome = this.entrada.receberTexto(`Nome do dependente: `)
            dependente.nomeSocial = this.entrada.receberTexto(`Nome social do dependente: `)
            dependente.dataCadastro = this.entrada.receberData(`Informe a data de cadastro do dependente`)
            dependente.dataNascimento = this.entrada.receberData(`Informe a data de nascimento do dependente`)
            dependente.endereco = (cliente.endereco.clonar() as Endereco)
            dependente.telefones = cliente.telefones
            dependente.titular = cliente.nome
            documento.nome = dependente.nome
            documento.tipo = this.entrada.receberTipo(`Informe o tipo do documento (CPF, RG ou Passaporte): `)
            documento.numero = this.entrada.receberTexto(`Informe o número do documento: `)
            documento.dataExpedicao = this.entrada.receberData(`Informe a data de expedição do documento`)
            dependente.documentos.push(documento);
            dependente.telefones.push(telefone)
            cliente.dependentes.push(dependente)
            opcao = this.entrada.receberNumero(`Deseja cadastrar outro dependente? 1-Sim 0-Não `)
        }
        console.log('')
        console.log('')
        console.log('')
        console.log(`============================================================================================`)
        console.log("Cliente: ")
        console.log(`Nome do cliente: ${cliente.nome}`)
        console.log(`Nome social: ${cliente.nomeSocial}`)
        console.log(`Endereço do cliente:`)
        console.log(cliente.endereco)
        console.log(`-----------------------------------------------`)
        console.log(`Telefones do cliente:`)
        let cont = 1
        cliente.telefones.forEach(tel=>{
            console.log(`Telefone ${cont}: ${tel.ddd} ${tel.numero}`)
            cont++
        })
        console.log(`--------------------------------------------------`)
        console.log(`Documentos do cliente: `)
        cliente.documentos.forEach(doc=>{
            console.log(`Nome do titular do documento: ${doc.nome}`)
            console.log(`Tipo do documento: ${doc.tipo}`)
            console.log(`Numero do documento: ${doc.numero}`)
        })
        console.log('')
        console.log('')
        console.log(`---------------------------------------`)
        console.log(`Dependentes: `)
        let dependentes = cliente.dependentes
        if (dependentes.length > 0){
            dependentes.forEach(dependente => {
                console.log(`Nome: ${dependente.nome}`)
                console.log(`Titular: ${dependente.titular}`)
                console.log(`Endereço dependente`)
                console.log(dependente.endereco)
                console.log(`--------------------------------------------------------`)
                console.log(`Documentos do dependente:`)
                dependente.documentos.forEach(doc =>{
                    console.log(`Nome do titular do documento: ${doc.nome}`)
                    console.log(`Tipo do documento: ${doc.tipo}`)
                    console.log(`Numero do documento: ${doc.numero}`)
                })
                console.log(`-------------------------------------------------`)
                console.log(`Telefones: `)
                cont = 1
                dependente.telefones.forEach(tel=>{
                    console.log(`Telefone ${cont}: ${tel.ddd} ${tel.numero}`)
                    cont++
                })
            });
        }
        else{
            console.log('')
            console.log(`o cliente não tem nenhum dependente!`)
            console.log('')
        }
    }
}