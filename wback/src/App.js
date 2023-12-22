
import { createContext } from 'react';
import './App.css';
import Counter from './Components/Count';
import Fetch from './Components/Fetch';
import Useref from './Components/Useref';
import ComponentA from './Components/ComponentA';
import Filter from './Components/Filter';
import Map from './Components/Map'
import Reduce from './Components/Reduce';
import Foreach from './Components/Foreach';

export const Context = createContext();
export const ChannelContext = createContext();
function App() {


  return (
    <div className="App">
       {/* <Fetch  />
       <Counter  />
       <Useref  />
       <Filter  />
       <Map   />
       <Reduce  /> */}
       <Foreach  />
       <Context.Provider value={"jishmal"}>
        <ChannelContext.Provider value={"kanichadi"}>
          <ComponentA  />
        </ChannelContext.Provider>
       </Context.Provider>


    </div>
  );
}

export default App;
