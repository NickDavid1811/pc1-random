import axios from 'axios';

const baseURL = 'https://randomuser.me/api/';

export const getRandomUser = () => {
    return axios.get(baseURL)
        .then(response => response.data.results[0])
        .catch(error => {
            throw new Error(`Error fetching random user: ${error}`);
        });
};