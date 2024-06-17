import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Layout from '../layout'; // Pastikan path impor Layout sesuai dengan struktur direktori
import { Container } from '@mui/material';
import Breadcrumb from '../../../assets/components/admin/Breadcrumb';
import Car from './Car';
import Form from './Form';
// import Car from '../../../assets/components/admin/Car';
// import FormCar from '../../../assets/components/admin/FormCar';

const Index: React.FC = () => {
  const location = useLocation();
   const { id } = useParams<{ id: string }>();
  const renderComponent = () => {
    switch (location.pathname) {
      case '/car':
        return <Car />;
      case '/car/add':
        return <Form mode="add" />;
      case `/car/update/${id}`:
        return <Form mode="update" carId={id} />;
      default:
        return <Car />;
    }
  };

  return (
    <Layout>
      <Container>
        <Breadcrumb />
        {renderComponent()}
      </Container>
    </Layout>
  );
};

export default Index;
