import './App.css';
import { Route,  } from 'react-router-dom'
import Register from './components/Register/Register'
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';


function App() {
  return (
    <div className='container'>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/profile' component={Profile} />
    </div>
  );
}

export default App;
