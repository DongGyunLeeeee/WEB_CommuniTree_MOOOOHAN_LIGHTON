import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleClick = () => {
    try {
      props.login({ email, password });
    } catch (e) {
      alert('Failed to login');
      setEmail('');
      setPassword('');
    }
  };

  if (props.authenticated) return navigate('/')

  return (
    <div>
      <h1>Login</h1>
      <input
        onChange={e => setEmail(e.target.value)}
        type="text"
        placeholder="email"
      />
      <input
        onChange={e => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default LoginForm;