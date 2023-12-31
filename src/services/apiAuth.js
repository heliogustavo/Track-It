import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth"

function login(body){
    const promise = axios.post(`${BASE_URL}/login`, body)
    return promise
}

function cadastro(body ) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body)
    return promise
}

const apiAuth = {login, cadastro}

export default apiAuth