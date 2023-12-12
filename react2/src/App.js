
import './App.css';
import Main from './Components/Main';
import Keys from './Components/Keys/Keys';
import Count from './Components/Count';
import Fetch from './Components/Fetch';
import Prp from './Components/Prp';
import Foreach from './Components/Foreach';

function App() {

  // let isLoggedin = false;
  return <div className='app'>
    <Main isLoggedin={false} />
    <Keys />
    <Fetch   />
    <Count  />
    <Prp name="jishmal"  />
    <Foreach  />
    {/* {isLoggedin>0?<h1>welcome to website</h1>:<h1>please login</h1>} */}
  </div>
}
export default App;
