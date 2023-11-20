import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useContext } from "react"
import { ProgressoContext } from "../Contexts/ProgressoContext"

export default function Rodape() {
  const { progresso } = useContext(ProgressoContext)


  return (
    <BotoesRodape>
      <BotaoDeAcessoRodape to={'/habitos'}>Hábitos</BotaoDeAcessoRodape>
      <ContentProgressbar>
        <HojeButton>
          <Link data-test="today-link" to="/hoje">
            <Example label="Background">
              <CircularProgressbar
                value={progresso}
                text={"Hoje"}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#3e98c7",
                  textColor: "#fff",
                  pathColor: "#fff",
                  trailColor: "transparent"
                })}
              />
            </Example>
          </Link>
        </HojeButton>
      </ContentProgressbar>

      <BotaoDeAcessoRodape to={'/historico'}>Histórico</BotaoDeAcessoRodape>

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
const BotaoDeAcessoRodape = styled(Link)`
border: none; 
background: rgba(0, 0, 0, 0);
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #52B6FF;
margin-left: 25px;
margin-right: 25px;
text-decoration:none;
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

const ContentProgressbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const CircularProgressbarContainer = styled.div`
  width: 90px;
  height: 90px;
  position: absolute;
  margin-left: 3px;
`