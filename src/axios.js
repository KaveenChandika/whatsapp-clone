import axios from 'axios';

const instance  = axios.create({
    baseURL:"https://whatsapp2-mern.herokuapp.com"
});

export default instance;