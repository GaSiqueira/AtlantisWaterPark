import Entrada from "./teste/entrada";
import CadastrarCliente from './servicos/cadastrarCliente';
console.log(`Seja muito bem-vindo ao sistema de cadastro do Atlantic Park!`);
let execucao = true
while(execucao){
    console.log(`Opções: `)
    console.log(` ---------------------------- `)    
    console.log(`1 - cadastrar cliente`)
    console.log(`0 - sair`)
    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Selecione uma das opções`)
    switch(opcao){
        case 1:
            let cadastroCliente = new CadastrarCliente();
            cadastroCliente.cadastrar();
            break
        case 0:
            execucao = false
            console.log(`Sistema finalizado.`)
            break;
        default:
            console.log(`Parâmetro enviado não compreendido`)
    }
}