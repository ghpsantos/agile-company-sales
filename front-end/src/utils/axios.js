import axios from 'axios';

// const instance = axios.create();
const instance = axios.create({baseURL:'http://localhost:5000'});

export default instance;
