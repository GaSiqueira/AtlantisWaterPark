import { Component, ReactNode } from "react";
import BarraNavagacao from "./barraDeNavegacao";
import Home from "../pages/home/home";
import ListarClientes from "../pages/listar/listarTitulares";
import ListarDependentes from "../pages/listar/listarDependentes";
import RegistrarTitulares from './../pages/registrar/registrarTitulares';
import RegistrarDependentes from "../pages/registrar/registrarDependente";
import EditarTitulares from "../pages/editar/editarTitulares";
import EditarDependentes from "../pages/editar/editarDependentes";
import DeletarTitulares from "../pages/deletar/deletarTitulares";
import DeletarDependentes from "../pages/deletar/deletarDependentes";
import ListarHospedagem from "../pages/listar/listarHospedagem";

type state ={
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>){
        super(props)
        this.state = {
            tela: 'HOME'
        }
        this.selecionar = this.selecionar.bind(this)
    }

    selecionar(tela: string, evento: Event){
        evento.preventDefault()
        this.setState({
            tela: tela
        })
    }
    render(): ReactNode {
        let barraNavegacao = <BarraNavagacao seletor={this.selecionar} tema="#04fafd" botoes={['HOME', 'REGISTRAR', 'LISTAR', 'EDITAR', 'DELETAR']}/>
        if(this.state.tela === 'HOME'){
            return(
                <>
                    {barraNavegacao}
                    <Home/>
                </>
            )
        }

        /* ----------------------------------------------------------------------------------- */

        else if(this.state.tela === 'REGISTRAR' || this.state.tela === 'REGISTRAR TITULARES'){
            barraNavegacao = <BarraNavagacao seletor={this.selecionar} tema="#04fafd" botoes={['HOME', 'REGISTRAR TITULARES', 'REGISTRAR DEPENDENTES']}/>
            return(
                <>
                    {barraNavegacao}
                    <RegistrarTitulares tema="#04fafd"/>
                </>
            )
        }
        else if(this.state.tela === 'REGISTRAR DEPENDENTES'){
            barraNavegacao = <BarraNavagacao seletor={this.selecionar} tema="#04fafd" botoes={['HOME', 'REGISTRAR TITULARES', 'REGISTRAR DEPENDENTES']}/>
            return(
                <>
                    {barraNavegacao}
                    <RegistrarDependentes tema="#04fafd"/>
                </>
            )
        }

        /* -------------------------------------------------------------------------------- */

        else if(this.state.tela === 'LISTAR' || this.state.tela === 'LISTAR TITULARES'){
            barraNavegacao = <BarraNavagacao seletor={this.selecionar} tema="#04fafd" botoes={['HOME', 'LISTAR TITULARES', 'LISTAR DEPENDENTES', 'LISTAR HOSPEDAGENS']}/>
            return(
                <>
                    {barraNavegacao}
                    <ListarClientes/>
                </>
            )
        }
        else if(this.state.tela === 'LISTAR DEPENDENTES'){
            barraNavegacao = <BarraNavagacao seletor={this.selecionar} tema="#04fafd" botoes={['HOME', 'LISTAR TITULARES', 'LISTAR DEPENDENTES', 'LISTAR HOSPEDAGENS']}/>
            return(
                <>
                    {barraNavegacao}
                    <ListarDependentes tema="#04fafd"/>
                </>
            )
        }
        else if(this.state.tela === "LISTAR HOSPEDAGENS"){
            barraNavegacao = <BarraNavagacao seletor={this.selecionar} tema="#04fafd" botoes={['HOME', 'LISTAR TITULARES', 'LISTAR DEPENDENTES', 'LISTAR HOSPEDAGENS']}/>
            return(
                <>
                    {barraNavegacao}
                    <ListarHospedagem tema="#04fafd"/> 
                </>
            )
        }

        /* --------------------------------------------------------------------------------- */ 

        else if(this.state.tela === "EDITAR" || this.state.tela === "EDITAR TITULAR"){
            barraNavegacao = <BarraNavagacao seletor={this.selecionar} tema="#04fafd" botoes={['HOME', 'EDITAR TITULAR', 'EDITAR DEPENDENTE']}/>
            return(
                <>
                    {barraNavegacao}
                    <EditarTitulares tema="#04fafd"/> 
                </>
            )
        }
        else if(this.state.tela === "EDITAR DEPENDENTE"){
            barraNavegacao = <BarraNavagacao seletor={this.selecionar} tema="#04fafd" botoes={['HOME', 'EDITAR TITULAR', 'EDITAR DEPENDENTE']}/>
            return(
                <>
                    {barraNavegacao}
                    <EditarDependentes tema="#04fafd"/> 
                </>
            )
        }

        /* -------------------------------------------------------------------------------------- */

        else if(this.state.tela === "DELETAR" || this.state.tela === "DELETAR TITULAR"){
            barraNavegacao = <BarraNavagacao seletor={this.selecionar} tema="#04fafd" botoes={['HOME', 'DELETAR TITULAR', 'DELETAR DEPENDENTE']}/>
            return(
                <>
                    {barraNavegacao}
                    <DeletarTitulares tema="#04fafd"/> 
                </>
            )
        }
        else if(this.state.tela === "DELETAR DEPENDENTE"){
            barraNavegacao = <BarraNavagacao seletor={this.selecionar} tema="#04fafd" botoes={['HOME', 'DELETAR TITULAR', 'DELETAR DEPENDENTE']}/>
            return(
                <>
                    {barraNavegacao}
                    <DeletarDependentes tema="#04fafd"/> 
                </>
            )
        }
    }
}