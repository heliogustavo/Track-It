import React from "react";
import styled from "styled-components";

export default function HistoricPage() {
    return (
        <ContainerGeral>
            <Content>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Content>
        </ContainerGeral>
    );
}

const ContainerGeral = styled.div`
display: flex;
flex-direction: column;
width: 375px;
height: 527px;
background: #F2F2F2;
`

const Content = styled.div`
    padding-top: 28px;
    padding-left: 20px;
    h1 {
        font-size: 23px;
        font-family: 'Lexend Deca', sans-serif;
        color: #126BA5;
    }
    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        color: #666666;
        margin-top: 17px;
        line-height: 22px;
    }
`;