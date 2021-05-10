import React from "react";
import "./App.css";
import { useGrowl, Growl } from "./GrowlNotification/growl";

function App() {
  const [active, setActive] = useGrowl();

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-link" href="#" onClick={() => void setActive(true)}>
          Click here to activate the growl
        </div>
      </header>
      <Growl
        onDismissed={() => setActive(false)}
        active={active}
        message="Hello World!"
      />
    </div>
  );
}

export default App;
