import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

interface TokenProtectedProps {
  children: React.ReactNode;
}

const TokenProtected: React.FC<TokenProtectedProps> = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
    // if (token && user) {
    //   navigate('/customer/dashboard'); // Arahkan ke halaman beranda jika sudah login
    // }
   
  }, [navigate, token]);

  return <>{token ? children : null}</>;
};

export default TokenProtected;
