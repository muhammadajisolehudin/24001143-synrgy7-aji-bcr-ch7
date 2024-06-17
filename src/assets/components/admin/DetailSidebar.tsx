import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';

interface DetailSidebarProps {
  onSubMenuSelect: (submenu: string) => void;
}

const StyledListItem = styled(ListItem)<{ isActive: boolean }>(({ theme, isActive }) => ({
  backgroundColor: isActive ? theme.palette.secondary.main : 'inherit',
  '&:hover': {
    backgroundColor: isActive ? theme.palette.secondary.main : theme.palette.action.hover,
  },
}));

const DetailSidebar: React.FC<DetailSidebarProps> = ({ onSubMenuSelect }) => {
  const location = useLocation();
  const [menu, setMenu] = useState<string>('Dashboard');
  const [activeSubMenu, setActiveSubMenu] = useState<string>('');

  useEffect(() => {
    switch (location.pathname) {
      case '/dashboard':
        setMenu('Dashboard');
        setActiveSubMenu('Dashboard');
        break;
       default:
        if (/^\/car(\/add|\/update\/\d+)?$/.test(location.pathname)) {
          setMenu('Car');
          setActiveSubMenu('List Car');
        }
        break;
      // case '/car/add':
      //   setMenu('Car');
      //   setActiveSubMenu('List Car');
      //   break;
      // default:
      //   setMenu('Dashboard');
      //   setActiveSubMenu('');
      //   break;
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
        <StyledListItem
          key={item}
          isActive={item === activeSubMenu}
          button
          onClick={() => handleSubMenuClick(item)}
        >
          <ListItemText primary={item} />
        </StyledListItem>
      ))}
    </List>
  );
};

export default DetailSidebar;
