import './App.css';
import { AuthContext } from './contexts/AuthContext';
import { useContext, useEffect } from 'react';
import PrivateRouter from './router/PrivateRouter';
import PublicRouter from './router/PublicRouter';

function App() {
  const { token, setToken } = useContext(AuthContext);
  console.log(token);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
      console.log('<App> token do storage: ', token);
    } else {
      console.log('<App> sem token no storage.', token);
    }

  });

  return (
    <div className='App'>
      {token ? <PrivateRouter /> : <PublicRouter />}
    </div>
  )
}

export default App;
