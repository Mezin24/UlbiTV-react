import { createContext, useContext, useState } from 'react';

const AutContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AutContext.Provider value={{ isAuth, setIsAuth, isLoading, setIsLoading }}>
      {children}
    </AutContext.Provider>
  );
};

export const useAuthContext = () => useContext(AutContext);

export default AuthContextProvider;
