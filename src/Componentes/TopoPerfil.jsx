import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { UsuarioContext } from "../Contexts/UsuarioContext"


export default function TopoPerfil() {
    const { usuario } = useContext(UsuarioContext)

    return (
        <BarraTopo>
            <Link to={"/hoje"}>
                <NomeLogo>TrackIt</NomeLogo>
            </Link>
            <img src={usuario.image} alt="Imagem de perfil" />
        </BarraTopo>
    )
}

const BarraTopo = styled.div`
width: 340px;
height: 55px;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 18px;
padding-top: 18px;
padding-right: 18px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
a{
text-decoration: none;
}
img{
width: 51px;
height: 51px;
background: url(image.png);
border-radius: 98.5px;
margin-bottom: 15px;
}
`
const NomeLogo = styled.h1`
display: flex;
align-items: center;
width: 97px;
height: 49px;
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
color: #FFFFFF;
margin-bottom: 15px;

`