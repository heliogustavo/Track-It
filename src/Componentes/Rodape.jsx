import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"



export default function Rodape() {
    return (
            <BotoesRodape>
                <Link to={'/habitos'}>
                    <BotaoDeAcessoRodape>Hábitos</BotaoDeAcessoRodape>
                </Link>
                <Link to={'/historico'}>
                    <BotaoDeAcessoRodape>Histórico</BotaoDeAcessoRodape>
                </Link>

            </BotoesRodape>
    )

}





const BotoesRodape = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 375px;
height: 70px;
background: #FFFFFF;
`
const BotaoDeAcessoRodape = styled.button`
border: none; 
background: rgba(0, 0, 0, 0);
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #52B6FF;
`