import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

interface TokenProtectedAdminProps {
  children: React.ReactNode;
}

const TokenProtectedAdmin: React.FC<TokenProtectedAdminProps> = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if ( user?.role !== 'admin') {
       console.log("masuk ke sini juga ya")
      navigate('/unauthorized'); // Atau halaman lain yang sesuai
    }
  }, [navigate, token, user]);

  return <>{token && user && user.role === 'admin' ? children : null}</>;
};

export default TokenProtectedAdmin;
