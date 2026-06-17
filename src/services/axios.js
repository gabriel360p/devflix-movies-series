import axios from "axios";

const apiKey = '31da99918816c648950cc9a0fc81f7b6';

const Api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: apiKey,
        language: 'pt-br',
        page: 1
    },
})
export default Api