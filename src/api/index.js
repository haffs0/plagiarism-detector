import axios from "axios";

const API_BASE_URL = "https://34fcbfc1-ef95-46a7-bcfd-b04294997d3b.mock.pstmn.io/api/v1";

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export function fetchUser() {
    return client.get('/user')
}

export function fetchEssay() {
    return client.get('/essay')
}