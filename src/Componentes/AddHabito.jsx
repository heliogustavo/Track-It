import React from "react";
import styled from "styled-components";

export default function AddHabito(props) {
    const {setMostrarAddHab} = props
    function fazerSumir(){
        setMostrarAddHab(false)
        setListaDeHabitos
    }

    return (
<CaixaADDHabito>
                <InputNomeDoHabito type="text" placeholder="Nome do Hábito" name="habito" />
               
                <BotaoCancelar>Cancelar</BotaoCancelar>
                <BotaoSalvar onClick={fazerSumir}>Salvar</BotaoSalvar>
            </CaixaADDHabito>

    )
}
const CaixaADDHabito = styled.div`
position: relative;
flex-direction: column;
width: 310px;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
margin-bottom: 15px;
margin-left: 18px;
padding: 14px;

`
const InputNomeDoHabito = styled.input`
width: 300px;
height: 45px;
color: #DBDBDB;
border: 1px solid #D5D5D5;
border-radius: 5px;
padding-left: 11px;
font-family: Lexend Deca;
font-size: 20px;
font-weight: 400;
line-height: 25px;
letter-spacing: 0em;
text-align: left;
`
const BotaoCancelar = styled.button`
border: none; 
background: rgba(0, 0, 0, 0);
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #52B6FF;

position: absolute;
right: 118px;
bottom: 20px;
`
const BotaoSalvar = styled.button`
width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
position: absolute;
right: 15px;
bottom: 15px;
`
