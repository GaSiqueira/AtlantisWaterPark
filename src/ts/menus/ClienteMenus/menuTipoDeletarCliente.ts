import Menu from "../../interfaces/menu";
export default class MenuTipoDeletarCliente implements Menu{
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de cliente deseja excluir? `)
        console.log(`----------------------`)
        console.log(`| 1 - Excluir titular`)
        console.log(`| 2 - Excluir dependente`)
        console.log(`----------------------`)
    }
}