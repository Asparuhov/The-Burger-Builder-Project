import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-project-b68f0-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;