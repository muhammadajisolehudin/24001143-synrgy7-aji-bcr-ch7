import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
import { useLocation, Link as RouterLink } from 'react-router-dom';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const isDashboard = location.pathname === '/home' || location.pathname === '/';

  return (
    <Breadcrumbs 
      separator={<NavigateNext fontSize="small" />} 
      aria-label="breadcrumb"
      sx={{ marginBottom: '20px' }}
    >
      <Link color="inherit" component={RouterLink} to={isDashboard ? "/home" : "/car"}>
        {isDashboard ? "Dashboard" : "Car"}
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography color="textPrimary" key={to}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Typography>
        ) : (
          <Link color="inherit" component={RouterLink} to={to} key={to}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
