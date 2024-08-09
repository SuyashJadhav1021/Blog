import { createContext, useEffect, useState } from "react";

const Context = createContext();
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [newUser, setNewUser] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);
  const [token, setToken] = useState({});
  const [newToken, setNewToken] = useState({});
  useEffect(() => {
    if (user && token) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    } else {
      setUser(null);
      setToken(null);
    }
  }, [user]);

  useEffect(() => {
    setNewUser(JSON.parse(localStorage.getItem("user")));
    setNewToken(localStorage.getItem("token"));
  }, []);
  console.log(newToken);
  console.log(newUser);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        isFetching,
        setIsFetching,
        error,
        setError,
        token,
        setToken,
        newUser,
        newToken,
        setNewUser,
        setNewToken,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
