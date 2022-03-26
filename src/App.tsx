import React from "react";
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
        <pre>local time</pre>
        <DigiClock time={time} />
      </div>
    </div>
  );
}

export default App;
