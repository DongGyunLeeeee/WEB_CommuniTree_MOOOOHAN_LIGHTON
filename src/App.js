import React, { useState, useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { signIn } from './auth';

import Home from './Home';
import Profile from './Profile';
import NotFound from './NotFound';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  const navigate = useNavigate();
  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);

  return (
    <div className='App'>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/profile">
          <button>Profile</button>
        </Link>
        {authenticated ? (
          <LogoutButton logout={logout} />
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </header>
      <hr />
      <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginForm authenticated={authenticated} login={login} />}/>
        <Route path = "/profile" element={ authenticated ? (<Profile user = {user} />) : (navigate('/login')) }/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      
      </main>
    </div>
  );
}

export default App;
