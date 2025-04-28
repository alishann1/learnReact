import React from "react";
import { createContext } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  return (
    <UserContext.Provider value={{ userName: "Alex" }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
