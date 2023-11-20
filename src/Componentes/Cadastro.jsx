import styled from "styled-components"
import Logo1 from "../assets/logoTrackIt.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import apiAuth from "../services/apiAuth"

export default function LoginPage() {
    const navigate = useNavigate()
    const [inforDoFormulario, setInforDoFormulario] = useState({ email: "", password: "", name: "", image: "" })
    const [carregando, setCarregando] = useState(false) 

    function handleForm(e) {
        setInforDoFormulario({ ...inforDoFormulario, [e.target.name]: e.target.value })
    }
    function handleCadastro(e) {
        e.preventDefault() 
        setCarregando(true)

        apiAuth.cadastro(inforDoFormulario)
        
            .then(res => {
                setCarregando(false)
                navigate("/")
            })
            .catch(err => {
                setCarregando(false)
                alert(err.response.data.message)
            }
            )
    }

    return (


        <ContainerLogin>
            <img src={Logo1} alt="erro" />
            <NomeLogo>TrackIt</NomeLogo>
            <ContainerInputs onSubmit={handleCadastro}>
                    <InputEmail
                        required
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={inforDoFormulario.email}
                        disabled={carregando}
                        onChange={handleForm}
                    /><InputEmail
                        required
                        type="password"
                        placeholder="Senha"
                        name="password"
                        value={inforDoFormulario.password}
                        disabled={carregando}
                        onChange={handleForm}
                    /><InputEmail
                        required
                        type="text"
                        placeholder="Nome"
                        name="name"
                        value={inforDoFormulario.name}
                        disabled={carregando}
                        onChange={handleForm}
                    /><InputEmail
                        required
                        type="url"
                        placeholder="Foto"
                        name="image"
                        value={inforDoFormulario.image}
                        disabled={carregando}
                        onChange={handleForm}
                    />
                    <ButtonEntrar type="submit" disabled={carregando}>
                        {carregando ? (
                            <ThreeDots width={50} height={50} color="#FFFFFF" />
                        ) : "Cadastrar"}

                    </ButtonEntrar>
                    <Link to={"/"}>
                        <LinkLogin>Já tem uma conta? Faça Login!</LinkLogin>
                    </Link>
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
align-items: center;
justify-content: center;
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
margin-bottom: 6px;

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
display: flex;
align-items: center;
justify-content: center;
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
margin-left: 6px;

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
display: flex;
align-items: center;
justify-content: center;
margin-left: 43px;
`