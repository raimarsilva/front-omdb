import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import AuthContext from './contexts/AuthContext';
import { useContext, useEffect, useState } from 'react';
import Router from './router/Router';
import { useNavigate } from 'react-router-dom';

function App() {
  let [token, setToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
      console.log('<App> token do storage: ', token);
    } else {
      console.log('<App> sem token no storage.', token)
    }

  }, [token]);

  return (
    <div className='App'>
      <AuthContext.Provider value={[token, setToken]}>
        <Router>
          {token ? <Home /> : <Login />}
        </Router>
      </AuthContext.Provider>
    </div>
  )
}

export default App;
