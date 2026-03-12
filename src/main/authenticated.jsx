import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
  }

  return (
    <div>
      <div className='playerName'>{props.userName}</div>
      <div className="auth-buttons">
      <button type="button" className="btn lg-theme"  onClick={() => navigate('/status')}>
        Play
      </button>
      <button type="button" className="btn lg-theme-2" onClick={() => logout()}>
        Logout
      </button>
      </div>
    </div>
  );
}
