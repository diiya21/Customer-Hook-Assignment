import { useState } from "react";

const LOG_LEVELS = {
  ERROR: "ERROR",
  WARN: "WARN",
  LOG: "LOG",
  DEBUG: "DEBUG",
};

export const useLogger = () => {
  const [logs, setLogs] = useState([]); 

  const logMessage = (level, message, scope) => {
    const timestamp = new Date().toISOString(); 
    const logEntry = `[${scope}] [${level}] [${timestamp}] ${message}`;

    setLogs((prevLogs) => [...prevLogs, logEntry]);
  };

  const error = (message, scope = "GENERAL") => {
    logMessage(LOG_LEVELS.ERROR, message, scope);
  };

  const warn = (message, scope = "GENERAL") => {
    logMessage(LOG_LEVELS.WARN, message, scope);
  };

  const log = (message, scope = "GENERAL") => {
    logMessage(LOG_LEVELS.LOG, message, scope);
  };

  const debug = (message, scope = "GENERAL") => {
    logMessage(LOG_LEVELS.DEBUG, message, scope);
  };

  return { error, warn, log, debug, logs };
};
