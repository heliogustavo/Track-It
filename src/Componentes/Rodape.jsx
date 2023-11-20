import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { Link } from "react-router-dom"
import styled from "styled-components"



export default function Rodape() {
    const { percentage } = 100;


    return (
            <BotoesRodape>
                <Link to={'/habitos'}>
                    <BotaoDeAcessoRodape>Hábitos</BotaoDeAcessoRodape>
                </Link>
                <Link data-test="today-link" to="/hoje">
          <HojeButton>
            <CircularProgressbar
              value={percentage}
              text="Hoje"
              background
              backgroundPadding={6}
              styles={buildStyles({    
                display:'flex',
                left: '0px',
                bottom: '0px',           
                backgroundColor: '#52b6ff',
                textColor: '#fff',
                pathColor: '#fff',
                trailColor: 'transparent',
              })}
            />
          </HojeButton>
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

const HojeButton = styled.h2`
  position: absolute;
  width: 91px;
  height: 91px;
  bottom: 10px;
  left: 0px;
  right: 0px;
  margin: auto;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;

  color: #ffffff;

  filter: drop-shadow(0px -4px 4px rgba(0, 0, 0, 0.15));
`