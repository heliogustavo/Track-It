import styled from "styled-components"
import Logo1 from "../assets/logoTrackIt.png"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
    const navigate = useNavigate()

    function handleCadastro(e){
            e.preventDefault()
            navigate("/")
    }
    return (


        <ContainerLogin>
            <img src={Logo1} alt="erro" />
            <NomeLogo>TrackIt</NomeLogo>
            <ContainerInputs onSubmit={handleCadastro}>
                    <label>
                        <InputEmail type="text" placeholder="Email" name="email" />
                        <InputSenha type="text" placeholder="Senha" name="senha" />
                        <InputSenha type="text" placeholder="Nome" name="nome" />
                        <InputSenha type="text" placeholder="Foto" name="foto" />

                        <ButtonEntrar>Cadastrar</ButtonEntrar>
                        <LinkLogin>Já tem uma conta? Faça Login!</LinkLogin>

                        {/*<input type="submit" value="Enviar" /> */}
                    </label>
            </ContainerInputs>

        </ContainerLogin>


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
text-align: center;
color: #126BA5;
letter-spacing: 0em;

`
const ContainerInputs = styled.form`
display: flex;
flex-direction: column;
background-color: #FFFFFF;
width: 305px;
height: 390px;

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
margin-top: 10px;
padding-left: 11px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;

`
const ButtonEntrar = styled.button`
width: 303px;
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
const LinkLogin = styled.p`
width: 232px;
height: 17px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
margin-top: 27px;
`