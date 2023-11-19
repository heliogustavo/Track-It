import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"
import Logo1 from "../assets/logoTrackIt.png"
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate()

    const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up");

    requisicao.then(resposta => {

    });

    function handleLogin(e){
        e.preventDefault()
        navigate("hoje")
}

    return (
        <form>
            <label>
                <ContainerLogin>
                    <img src={Logo1} alt="erro" />
                    <NomeLogo>TrackIt</NomeLogo>
                    <ContainerInputs onSubmit={handleLogin}>
                        <InputEmail type="text" placeholder="Email" name="email" />
                        <InputSenha type="text" placeholder="Senha" name="senha" />
                            <ButtonEntrar>Entrar</ButtonEntrar>
                    </ContainerInputs>
                    <Link to={"/cadastro"}>
                        <LinkCadastro>Não tem uma conta? Cadastre-se!</LinkCadastro>
                    </Link>
                </ContainerLogin>
            </label>

        </form>

    )
}



const ContainerLogin = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

img{
width: 200px;
height: 150px;
}
`
const NomeLogo = styled.h1`
width: 180px;
height: 86.23px;
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 68.982px;
line-height: 86px;
text-align: center;
color: #126BA5;
`
const ContainerInputs = styled.form`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
background-color: #FFFFFF;
width: 305px;
height: 200px;

`
const InputEmail = styled.input`
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;
padding-left: 11px;
`
const InputSenha = styled.input`
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-top: 6px;
padding-left: 11px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;

`
const ButtonEntrar = styled.button`
width: 321px;
height: 45px;
border-radius: 4.64px;

background-color: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-size: 21px;
font-weight: 400;
line-height: 26px;
letter-spacing: 0em;
text-align: center;

color: #FFFFFF;
margin-top: 6px;

`

/* const Logo = styled.img`
width: 180px;
height: 178.38px;

` */
const LinkCadastro = styled.p`
width: 232px;
height: 17px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
`