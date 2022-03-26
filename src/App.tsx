import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DigiClock } from "./DigiClock";

function App() {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  });

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <DigiClock time={time} />
      </header>
    </div>
  );
}

export default App;
