import logo from './logo.svg';
import './App.css';
import Movies from './components/getMovies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <Movies></Movies>
      </div>
    </div>
  );
}

export default App;
