import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface TokenProtectedProps {
  children: React.ReactNode;
}

const TokenProtected: React.FC<TokenProtectedProps> = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [navigate, token]);

  return <>{token ? children : null}</>;
};

export default TokenProtected;
