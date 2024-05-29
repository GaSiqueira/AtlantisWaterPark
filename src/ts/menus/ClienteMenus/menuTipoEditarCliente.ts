import Menu from "../../interfaces/menu";
export default class MenuTipoEditarCliente implements Menu{
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de cliente deseja editar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Editar titular`)
        console.log(`| 2 - Editar dependente`)
        console.log(`----------------------`)
    }
}