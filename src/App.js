import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import LeftCard from './components/LeftCard';
import Popwrap from './components/Popwrap';
import Canvas from './components/Canvas';


function App() {
  return (
    <div className="App">
     <Navigation/>
     <LeftCard />
     
     <Popwrap />
     <Canvas />
    </div>
  );
}

export default App;
