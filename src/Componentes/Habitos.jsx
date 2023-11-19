import React, { useState } from "react";
import styled from "styled-components";
import AddHabito from "./AddHabito";

export default function Habitos() {
    const [mostrarAddHab,setMostrarAddHab] = useState(false)
    const [listaDeHabitos, setListaDeHabitos] = useState([])

    function adicionarHabito(){
        const novoHabito = {
            nomeDoHabito: "Ler 1 cap. de Livro",
            dias: 0
        }
        setMostrarAddHab(true)
        setListaDeHabitos([...listaDeHabitos, novoHabito]);
    }

    return (
        <ContainerGeral>

            <BarraADDHabito>
                <MeusHabitosText>Meus Hábitos</MeusHabitosText>
                <BotaoADDHabito onClick={adicionarHabito}>+</BotaoADDHabito>
            </BarraADDHabito> 
            { mostrarAddHab ? <AddHabito setMostrarAddHab={setMostrarAddHab}/> : <> </>}
            <ParagrafotH3>Você ainda não tem nenhum Hábito cadastrado ainda. Adicione um hábito para começar a trackear!</ParagrafotH3>
        </ContainerGeral>
    )
}

const ContainerGeral = styled.div`
display: flex;
flex-direction: column;
width: 375px;
height: 527px;
background: #F2F2F2;
`
const FotoPerfil = styled.image`
width: 51px; 
height: 51px;
background: url(image.png);
border-radius: 98.5px;
`
const BarraADDHabito = styled.div`
display: flex;
align-items: center;
width: 375px;
height: 29px;
padding-top: 25px;
padding-bottom: 25px;
`
const MeusHabitosText = styled.h2`
padding-left: 18px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
`
const BotaoADDHabito = styled.button`
width: 40px;
height: 35px;
display: flex;
align-items: center;
justify-content: center;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 26.976px;
margin-left: 145px ;
color: #FFFFFF;
`
const ParagrafotH3 = styled.h3`
width: 338px;
height: 74px;
padding-left: 18px;
padding-top: 25px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666;
`


