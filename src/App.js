import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import AuthContext from './contexts/AuthContext';
import { useContext, useEffect, useState } from 'react';
import Router from './router/Router';
import { useNavigate } from 'react-router-dom';

function App() {
  const { token, setToken } = useContext(AuthContext);


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
      <Router>
        {token ? <Home /> : <Login />}
      </Router>
    </div>
  )
}

export default App;
