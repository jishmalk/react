
import './App.css';
import Main from './Components/Main';
import Keys from './Components/Keys/Keys';

function App() {

  // let isLoggedin = false;
  return <div className='app'>
    <Main isLoggedin={false} />
    <Keys />
    {/* {isLoggedin>0?<h1>welcome to website</h1>:<h1>please login</h1>} */}
  </div>
}
export default App;
