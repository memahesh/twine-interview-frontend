import { SYNC_DATA } from "actions/counter";
import counterContextValue from "context/CounterContext";
import React, { useEffect } from "react";
import counterContextReducer from "reducers/counterContextReducer";

export const CounterContext = React.createContext();

const CounterContextProvider = ({children}) => {
    const STORAGE_KEY = "counter";
    const initialCounterState = {
      counterMap: {}
    };
    
    const [state, dispatch] = React.useReducer(counterContextReducer, initialCounterState, (state) => {
      const persistedData = localStorage.getItem(STORAGE_KEY);
      const data = persistedData ? JSON.parse(persistedData) : {};
      console.log("Loading data from persistence - " + data);
      return { ...state, ...data }
    });
  
  
    useEffect(() => {
        console.log("Setting Local Storage " + STORAGE_KEY + " - " + JSON.stringify(state));
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }, [state]);
  
    // use the newest data on every LocalStorage change
    useEffect(() => {
      window.addEventListener('storage', () => {
          const persistedData = localStorage.getItem(STORAGE_KEY)
          const newData = persistedData ? (JSON.parse(persistedData)) : null
          if (newData) {
              dispatch({ type: SYNC_DATA, payload: newData })
          }
      })
    }, [])
  
    return <CounterContext.Provider value={counterContextValue(state, dispatch)}>
      {children}
    </CounterContext.Provider>
}

export default CounterContextProvider;