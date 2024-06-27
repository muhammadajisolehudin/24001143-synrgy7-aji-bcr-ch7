import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography, ListItemButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';

interface DetailSidebarProps {
  onSubMenuSelect: (submenu: string) => void;
}

const StyledListItemButton = styled(ListItemButton)<{ isActive: boolean }>(({ theme, isActive }) => ({
  backgroundColor: isActive ? theme.palette.secondary.main : 'inherit',
  '&:hover': {
    backgroundColor: isActive ? theme.palette.secondary.main : theme.palette.action.hover,
  },
}));

const DetailSidebar: React.FC<DetailSidebarProps> = ({ onSubMenuSelect }) => {
  const location = useLocation();
  const [activeSubMenu, setActiveSubMenu] = useState<string>('');

  // State untuk menu
  const [menu, setMenu] = useState<string>('');

  useEffect(() => {
    const path = location.pathname;
    if (path === '/dashboard') {
      setMenu('Dashboard');
      setActiveSubMenu('Dashboard');
    } else if (path.startsWith('/car')) {
      setMenu('Car');
      setActiveSubMenu('List Car');
    } else {
      setMenu('');
      setActiveSubMenu('');
    }
  }, [location.pathname]);

  const subMenuItems: { [key: string]: string[] } = {
    Dashboard: ['Dashboard'],
    Car: ['List Car'],
  };

  const handleSubMenuClick = (item: string) => {
    onSubMenuSelect(item);
    setActiveSubMenu(item);
  };

  return (
    <List sx={{ height: '100vh', color: 'black' }}>
      <ListItem className='mt-2'>
        <Typography variant="h6" color="inherit">
          {menu}
        </Typography>
      </ListItem>
      {subMenuItems[menu]?.map((item) => (
        <StyledListItemButton
          key={item}
          isActive={item === activeSubMenu}
          onClick={() => handleSubMenuClick(item)}
        >
          <ListItemText primary={item} />
        </StyledListItemButton>
      ))}
    </List>
  );
};

export default DetailSidebar;
