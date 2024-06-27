import React, { useState } from 'react';
import Navbar from '../../assets/components/admin/NavBar';
import Sidebar from '../../assets/components/admin/SideBar';
import { createCustomTheme } from '../../utils/themeUtils';
import { Box, ThemeProvider } from '@mui/material';
import DetailSidebar from '../../assets/components/admin/DetailSidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = createCustomTheme();
  const [_selectedMenu, setSelectedMenu] = useState<string>('Dashboard');

  const handleMenuSelect = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <Sidebar onMenuSelect={handleMenuSelect} />
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
            <Box sx={{ width: 230, flexShrink: 0 }}>
              <DetailSidebar onSubMenuSelect={handleMenuSelect} />
            </Box>
            <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#f4f5f7' }}>
              {children}
            </Box>
          </Box>
        </Box>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
