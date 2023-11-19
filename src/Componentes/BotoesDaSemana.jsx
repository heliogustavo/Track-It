import DiasDaSemana from "./DiasDaSemana";
import styled from "styled-components";

export default function BotoesDaSemana() {
    return(
    <ContainerButtons>
        {DiasDaSemana.map(cadaDia => (
            <BotaoDiaLetra key={cadaDia.id} selecionado={false}>
                {cadaDia.dia}
            </BotaoDiaLetra>
        ))}
    </ContainerButtons>
    )
}


const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 260px;
    height: 34px;
    margin-left: 9px;
    margin-top: 10px;
`
const BotaoDiaLetra= styled.button`
width: 30px;
height: 30px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;
margin-right: 3px;
`