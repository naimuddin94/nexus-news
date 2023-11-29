import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const axiosSecure = useAxiosSecure();
  const [role, setRole] = useState("");
  const [premiumUser, setPremiumUser] = useState(false);
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setPhoto(currentUser?.photoURL);
      setName(currentUser?.displayName);
      setLoading(false);
      // if user exists then issue a token
      if (currentUser) {
        axiosSecure.post("/auth/jwt", loggedUser).then((res) => {
          console.log(res.data);
        });
      } else {
        axiosSecure.post("/auth/logout", loggedUser).then((res) => {
          console.log(res.data);
        });
      }
    });

    return () => {
      return unSubscribe();
    };
  }, []);


  useEffect(() => {
    if (user) {
      axiosSecure(`/users/${user?.email}`).then((res) => {
        setRole(res.data.role);
        setPremiumUser(res.data.isPremium);
      });
    }
  }, [user, axiosSecure]);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setName("");
    setPhoto("");
    setPremiumUser(false);
    setRole("");
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    signInWithGoogle,
    logOut,
    setLoading,
    name,
    setName,
    photo,
    setPhoto,
    role,
    premiumUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
