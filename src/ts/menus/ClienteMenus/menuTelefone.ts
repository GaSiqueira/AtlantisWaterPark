import Menu from "../../interfaces/menu";
export default class MenuTelefone implements Menu{
    mostrar(): void {
        console.log(`Deseja cadastrar outro telefone(S/N)? `)
    }
}