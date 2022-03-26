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
      <div className="App-header">
        <DigiClock time={time} />
      </div>
    </div>
  );
}

export default App;
