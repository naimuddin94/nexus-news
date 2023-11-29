import axios from "axios";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const axiosBase = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  useEffect(() => {
    axiosBase.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error tracked in the interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("logout user");
          return signOut(auth).then(() => {
            <Navigate to="/login" />;
          });
        }
      }
    );
  }, []);
  return axiosBase;
};

export default useAxiosSecure;
