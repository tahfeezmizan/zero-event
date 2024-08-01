import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const useAxiosPublic = () => {
    return axiosPublic
}

export default useAxiosPublic;