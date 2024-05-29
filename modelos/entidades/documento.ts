import { TipoDocumento } from "../../enumeracoes/tipoDocumento"

export default class Documento {
    public nome: string
    public numero: string
    public tipo: TipoDocumento | string
    public dataExpedicao: Date
}