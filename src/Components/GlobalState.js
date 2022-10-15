import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transaction: [
    { id: 1, text: "flower", amount: -20 },
    { id: 2, text: "book", amount: -20 },
    { id: 3, text: "salary", amount: 200 },
  ],
};
//create context
export const GlobalContext = createContext(initialState);
//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{ transaction: state.transaction }}>
      {children}
    </GlobalContext.Provider>
  );
};
