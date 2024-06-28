import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from '../context/AuthContext';
import { LoginPage } from '../pages/auth/LoginPage';
import Dashboard from '../pages/admin/dashboard';
import Car from '../pages/admin/car';
import TokenProtected from '../assets/components/Protected/TokenProtected';
import { CarProvider } from '../context/CarContext';
import DashboardCustomer from '../pages/cutomer/DashboardCustomer';
import RentalPage from '../pages/cutomer/RentalPage';

export const RouteList: React.FC = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/*"
            element={
              <TokenProtected>
                <CarProvider>
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/car" element={<Car />} />
                    <Route path="/car/add" element={<Car />} />
                    <Route path="/car/update/:id" element={<Car />} />
                  </Routes>
                </CarProvider>
                
              </TokenProtected>
            }
          />

          <Route path="/customer/dahsboard" element={<DashboardCustomer/>}/>
          <Route path="/customer/reltal" element={<RentalPage />}/>
        </Routes>

      </UserProvider>
    </BrowserRouter>
  );
};

// export default RouteList;
