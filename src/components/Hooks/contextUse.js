import React, { useState, createContext } from "react";
import Login from "./login";
import User from "./user";

// it comes together with context API
// it is wrapped around child components that can access states from higher order component

export const AppContext = createContext(null);

function ContextUse() {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login /> <User />
    </AppContext.Provider>
  );
}

export default ContextUse;