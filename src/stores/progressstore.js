import React, { createContext, useState } from "react";


export const StoreContext = createContext();

// Make a Provider
export const StoreProvider = ({ children }) => {  
  
  const [me, setMe] = useState(" ");
  const store = {
   
    meState: [me, setMe],
  };
  return (
   <StoreContext.Provider value={store}>
      {children}
   </StoreContext.Provider>
  );
};