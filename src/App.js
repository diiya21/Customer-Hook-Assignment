import React, { useState } from "react";
import { useLogger } from "./useLogger"; 

const App = () => {
  const { error, warn, log, debug, logs } = useLogger(); 
  const [message, setMessage] = useState(""); 
  const [scope, setScope] = useState("SCOPE");
  const [logLevel, setLogLevel] = useState("LOG");

  const handleSubmit = () => {
    switch (logLevel) {
      case "ERROR":
        error(message, scope);
        break;
      case "WARN":
        warn(message, scope);
        break;
      case "LOG":
        log(message, scope);
        break;
      case "DEBUG":
        debug(message, scope);
        break;
      default:
        log(message, scope);
    }
    setMessage(""); 
  };

  return (
    <div>
      <h1>Custom Hook Logger</h1>
      <div>
        <input
          type="text"
          value={scope}
          onChange={(e) => setScope(e.target.value)}
          placeholder="SCOPE"
        />
        <select value={logLevel} onChange={(e) => setLogLevel(e.target.value)}>
          <option value="ERROR">ERROR</option>
          <option value="WARN">WARN</option>
          <option value="LOG">LOG</option>
          <option value="DEBUG">DEBUG</option>
        </select>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div>
        <h3>Console</h3>
        <div>
          {logs.map((logEntry, index) => (
            <div key={index}>{logEntry}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
