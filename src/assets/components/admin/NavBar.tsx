import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Avatar, Box } from '@mui/material';
import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material';
import SearchBar from './SearchBar';
import { useAuth } from '../../../context/AuthContext';


const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { user, logout } = useAuth();

  console.log("User in Navbar:", user); 

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Toolbar className='justify-between'>
        <Box className='h-[36px] w-24 bg-secondary rounded-sm'>
          {/* Logo atau elemen lainnya */}
        </Box>

        <Box className='flex flex-row'>
          <SearchBar placeholder="Search..." />
          <Box sx={{ display: 'inline-flex', gap: '10px', alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: 'secondary.main' }}>{user?.name?.charAt(0) || 'U'}</Avatar>
            <Typography variant="body1" color="initial">{user?.name || 'User Name'}</Typography>
            <IconButton
              color="inherit"
              aria-label="user account"
              edge="end"
              onClick={handleMenuOpen}
            >
              <KeyboardArrowDownIcon />
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
