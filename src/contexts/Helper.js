import { createContext, useContext, useState } from 'react';

const HelperContext = createContext({});

export const HelperProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState();

  const mobileLayout = (status) => {
    setIsMobile(status);
  };

  return (
    <HelperContext.Provider value={{ mobileLayout, isMobile }}>{children}</HelperContext.Provider>
  );
};

export const helperContext = () => useContext(HelperContext);
