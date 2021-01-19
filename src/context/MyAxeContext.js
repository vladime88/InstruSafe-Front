import React, { createContext, useState } from "react";

export const MyAxeContext = createContext();

const MyAxeContextProvider = ({ children }) => {
  const [myaxe, setMyaxe] = useState(null);
  return (
    <MyAxeContext.Provider value={{ myaxe, setMyaxe }}>
      {children}
    </MyAxeContext.Provider>
  );
};

export default MyAxeContextProvider;