import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos'
});

const useAxiosPublic = () => {
    return axiosPublic
}

export default useAxiosPublic;