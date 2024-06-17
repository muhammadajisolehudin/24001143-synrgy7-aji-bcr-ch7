// Dashboard.tsx
import React from 'react';
import Layout from './layout';
import { Container, Typography } from '@mui/material';
import Breadcrumb from '../../assets/components/admin/Breadcrumb';
import CarTable from '../../assets/components/admin/CarTable';

const Dashboard: React.FC = () => {

  return (
    <Layout>
      <Container>
        <Breadcrumb />
        <Typography variant='h5' style={{ fontWeight:'bold', marginBottom:'20px' }}>Dashboard</Typography>
        <CarTable />
      </Container>
    </Layout>
  );
};

export default Dashboard;
