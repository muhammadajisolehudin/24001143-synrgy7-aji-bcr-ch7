import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarProps {
  onMenuSelect: (menu: string) => void;
}

const StyledListItem = styled(ListItem)<{ isActive: boolean }>(({ theme, isActive }) => ({
  backgroundColor: isActive ? theme.palette.secondary.main : 'inherit',
  '&:hover': {
    backgroundColor: isActive ? theme.palette.secondary.main : theme.palette.action.hover,
  },
}));

const Sidebar: React.FC<SidebarProps> = ({ onMenuSelect }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine activeMenu based on current pathname
  const [activeMenu, setActiveMenu] = useState<string>(() => {
    const pathname = location.pathname;
    if (pathname === '/dashboard') {
      return 'Dashboard';
    } else if (pathname === '/car') {
      return 'Car';
    } else {
      return 'Dashboard'; // Default to Dashboard if none matched
    }
  });

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    onMenuSelect(menu);
    if (menu === 'Dashboard') {
      navigate('/dashboard');
    } else if (menu === 'Car') {
      navigate('/car');
    }
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 80,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          backgroundColor: 'primary.main',
          width: 80,
          boxSizing: 'border-box',
        },
      }}
    >
      <List>
        <ListItem className="flex flex-col items-center mb-2">
          <div className="h-[34px] w-[34px] bg-secondary"></div>
        </ListItem>
        <StyledListItem
          button
          isActive={activeMenu === 'Dashboard'}
          className="flex flex-col items-center"
          onClick={() => handleMenuClick('Dashboard')}
        >
          <ListItemIcon className="flex justify-center flex-col items-center">
            <HomeIcon style={{ color: 'white', fontSize: 25 }} />
            <Typography variant="caption" className="text-xs" style={{ color: 'white' }}>
              Dashboard
            </Typography>
          </ListItemIcon>
        </StyledListItem>
        <StyledListItem
          button
          isActive={activeMenu === 'Car'}
          className="flex flex-col items-center"
          onClick={() => handleMenuClick('Car')}
        >
          <ListItemIcon className="flex justify-center flex-col items-center">
            <DirectionsCarIcon style={{ color: 'white', fontSize: 25 }} />
            <Typography variant="caption" className="text-xs" style={{ color: 'white' }}>
              Car
            </Typography>
          </ListItemIcon>
        </StyledListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
