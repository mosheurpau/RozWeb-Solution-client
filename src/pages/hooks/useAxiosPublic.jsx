import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'https://rozweb-solution-server.onrender.com',
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
