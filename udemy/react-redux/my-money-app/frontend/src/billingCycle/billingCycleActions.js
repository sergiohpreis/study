import axios from 'axios';

const BASE_URL = 'http://localhost:3003/api';

export const getList = () => {
    const request = axios.get(`${BASE_URL}/billingCycles`);
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    };
};

export const create = values => {
    axios.post(`${BASE_URL}/billingCycles`, values);
    return {
        type: 'TEMP'
    };
};