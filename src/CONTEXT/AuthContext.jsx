import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  // GLOBAL USER INFORMATION
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });
    return () => {
      unsub();
    };
  }, []);
  const [data, setData] = useState([]);
  const products = data;

  // GLOBALLY AVAILABLE DATA
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get("https://karabaltalar.onrender.com/products");
        setData(result.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, data, products, setData }}>
      {children}
    </AuthContext.Provider>
  );
};
