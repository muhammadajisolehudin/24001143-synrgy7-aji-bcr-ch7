import React from 'react';
import { Typography, Box, Button } from '@mui/material';
// import CarList from './CarList'; // Pastikan path impor sesuai dengan struktur direktori
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useNavigate } from 'react-router-dom';
import CarList from '../../../assets/components/admin/CarList';

const Car: React.FC = () => {
  const navigate = useNavigate();
  const handleAddCarClick = () => {
    navigate('/car/add'); // Mengirim mode 'add' sebagai state
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
          List Car
        </Typography>
        <Button variant="contained" 
          color="primary"  
          sx={{ textTransform:'none'}} 
          onClick={handleAddCarClick}
          className="flex items-center gap-1"
        >
          <AddOutlinedIcon fontSize="small" />
          Add New Car
        </Button>
      </Box>
      <CarList />
    </>
  );
};

export default Car;
