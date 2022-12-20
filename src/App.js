import logo from './logo.svg';
import './App.css';
import Movies from './components/ListMovies';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <Movies/>
        <Register/>
      </div>
    </div>
  );
}

export default App;
