import './App.css';
import NavBar from './components/TopBar';
import Background from './components/Background';
import Listings from './components/Listings';


function App() {
  return (
    <div className="App">
      <h1>InstaCart</h1>
      <NavBar/>
      <Background/>
      <Listings/>
    </div>
  );
}

export default App;
