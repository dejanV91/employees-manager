import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const handleToggle = (e) => {
    console.log(e.currentTarget);
  };

  return (
    <AppContext.Provider value={{ handleToggle }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
