import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://e-store-server-umber.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;