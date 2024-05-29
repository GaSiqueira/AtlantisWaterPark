import Menu from "../../interfaces/menu";
export default class MenuEnderecoDependente implements Menu{
    mostrar(): void {
        console.log(`Proceso de cadastro de endereço iniciado...`)
        console.log(`---------------------------------------------------`)
        console.log(`Selecione uma das opções de cadastro de endereço: `)
        console.log(` `)
        console.log(`| 1 - Cadastrar o mesmo endereço do titular`)
        console.log(`| 2 - Cadastrar um endereço diferente do titular`)
        console.log(` `)
        console.log(`---------------------------------------------------`)
    }
}