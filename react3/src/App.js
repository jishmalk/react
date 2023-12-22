
import React,{ createContext } from 'react';
import './App.css';
import ComponentA from './Components/ComponentA';
import Justinfo from './Components/Justinfo';

export const Context = createContext();
export const ChannelContext = createContext();

export default function App() {
  return (
    <div className="App">
      <Context.Provider value={"jishmal"}>
        <ChannelContext.Provider value={"kanichadi"}>
          <ComponentA  />
          <Justinfo  />
        </ChannelContext.Provider>
      </Context.Provider>
      
    </div>
  );
}



