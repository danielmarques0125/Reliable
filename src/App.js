import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar } from './component/navbar';
import { Navbar2 } from './component/billing';
import {Sidebar} from './component/sidebar';
function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <Sidebar></Sidebar>
      </div>
      <div className='mainbody'>
     <Navbar/>
    <Navbar2 />
      </div>

    </div>
  );
}

export default App;
