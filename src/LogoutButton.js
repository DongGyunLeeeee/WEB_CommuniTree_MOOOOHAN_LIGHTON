import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

function LogoutButton(props) {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    props.logout();
    navigate('/');
  }
  return <button onClick={handleClick}>Logout</button>;
}

export default LogoutButton;