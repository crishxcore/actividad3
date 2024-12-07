import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();
export const useTaskContext = () => useContext(AppContext);

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
    return (
      <AppContext.Provider value={{ tasks, setTasks }}>
        {children}
      </AppContext.Provider>
    )
};

export default TaskProvider;
