import axios from 'axios';

export const GET_COMPANIES = 'GET_COMPANIES';

const path = '/src/data/data.json';

export default function () {
    return {
        type: GET_COMPANIES,
        payload: axios.get(path),
    };
}

