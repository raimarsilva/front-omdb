import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import AuthContext from './contexts/AuthContext';
import { useContext, useEffect } from 'react';
import Router from './router/Router';

function App({ children }) {
  let token = useContext(AuthContext);


  useEffect(() => {
    token = localStorage.getItem('token');
    console.log('<App> token do contexto: ', token);
  });

  return (
    <div className='App'>
      <AuthContext.Provider value={token}>
        <Router>
          {children}
          {(token === '' ? <Login /> : <Home />)}
        </Router>
      </AuthContext.Provider>
    </div>
  )
}

export default App;
