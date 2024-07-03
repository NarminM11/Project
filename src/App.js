import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import Center from '../src/Components/Center';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <SideBar/>
    <Center/>
    </div>
  );
}

export default App;
