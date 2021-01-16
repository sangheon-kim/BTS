import React from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import { CountProvider } from "./Contexts/Counter-context";
import { UserEnvProvider } from "./Contexts/UserEnv";

function App() {
  return (
    <CountProvider>
      <UserEnvProvider>
        <div className="App">
          <Counter />
        </div>
      </UserEnvProvider>
    </CountProvider>
  );
}

export default App;
