
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
import Usememo from './Components/Usememo';
import Usecallback from './Components/Usecallback';
import Usereducer from './Components/Usereducer';
import Parentmemo from './Components/Parentmemo';
import Table from './Components/Table';





export const Context = createContext();
export const ChannelContext = createContext();
function App() {


  return (
    <div className="App">
       {/* <Table  /> */}
       {/* <Fetch  />
       <Counter  />
       <Useref  />
       <Filter  />
       <Usereducer  />
       <Map   />
       <Reduce  />
       <Usememo  />
       <Usecallback  />
       <Parentmemo />  */}
       {/* <Fetch /> */}
       <Filter  />
       {/* <Foreach  />
       <Context.Provider value={"jishmal"}>
        <ChannelContext.Provider value={"kanichadi"}>
          <ComponentA  />
        </ChannelContext.Provider>
       </Context.Provider>  */}
       {/* <Table /> */}

    </div>
  );
}

export default App;
