// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { UserProvider } from '../context/AuthContext';
// import { LoginPage } from '../pages/auth/LoginPage';
// import Dashboard from '../pages/admin/dashboard';
// import Car from '../pages/admin/car';
// import TokenProtected from '../assets/components/Protected/TokenProtected';
// import { CarProvider } from '../context/CarContext';

// export const RouteList: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <UserProvider>
//         <Routes>
//           <Route path="/" element={<LoginPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/dashboard" element={<Dashboard/>}/>
//           <Route
//             path="/*"
//             element={
//               <TokenProtected>
//                 <CarProvider>
//                   <Routes>
//                     <Route path="admin/dashboard" element={<Dashboard />} />
//                     <Route path="admin/car" element={<Car />} />
//                     <Route path="admin/car/add" element={<Car />} />
//                     <Route path="admin/car/update/:id" element={<Car />} />
//                   </Routes>
//                 </CarProvider>
                
//               </TokenProtected>
//             }
//           />
//         </Routes>
//       </UserProvider>
//     </BrowserRouter>
//   );
// };

// // export default RouteList;


// RouteList.tsx

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from '../context/AuthContext';
import { LoginPage } from '../pages/auth/LoginPage';
import Dashboard from '../pages/admin/dashboard';
import Car from '../pages/admin/car';
import TokenProtected from '../assets/components/Protected/TokenProtected';
import { CarProvider } from '../context/CarContext';
import TokenProtectedAdmin from '../assets/components/Protected/TokenProtectedAdmin';
import RentalPage from '../pages/cutomer/RentalPage';
import DashboardCustomer from '../pages/cutomer/DashboardCustomer';


const RouteList: React.FC = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}

          {/* Protected routes */}
          <Route
            path="/*"
            element={
              <TokenProtected>
                <CarProvider>
                  <Routes>
                    {/* Admin routes */}
                    <Route
                      path="/admin/*"
                      element={
                        <TokenProtectedAdmin>
                          <Routes>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/car" element={<Car />} />
                            <Route path="/car/add" element={<Car />} />
                            <Route path="/car/update/:id" element={<Car />} />
                          </Routes>
                        </TokenProtectedAdmin>
                      }
                    />

                    {/* Customer routes */}
                    <Route path="/customer/dashboard" element={<DashboardCustomer />} />
                    <Route path="/customer/rental" element={<RentalPage />} />
                  </Routes>
                </CarProvider>
              </TokenProtected>
            }
          />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default RouteList;
