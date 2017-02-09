import axios from 'axios';

export const GET_COMPANIES = 'GET_COMPANIES';
export const FILTER_COMPANIES = 'FILTER_COMPANIES';

const path = '/src/data/data.json';

export function getCompanies() {
    return {
        type: GET_COMPANIES,
        payload: axios.get(path),
    };
}

export function filterCompanies(name) {
    return {
        type: FILTER_COMPANIES,
        payload: name,
    };
}

