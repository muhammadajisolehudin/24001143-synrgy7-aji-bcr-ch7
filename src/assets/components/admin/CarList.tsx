import React, { useState, useEffect } from 'react';
import { Box, Grid, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import { useCarContext } from '../../../context/CarContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CarList: React.FC = () => {
  const { cars, fetchCars, deleteCar } = useCarContext();
  const [filter, setFilter] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState<string | null>(null);

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);
   useEffect(() => {
    console.log("Cars in CarList:", cars); // Tambahkan logging di sini
  }, [cars]);

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  const handleDeleteClick = (id: string) => {
    setSelectedCarId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedCarId !== null) {
      try {
        await deleteCar(selectedCarId);
        toast.success(`Car ${selectedCarId} delete successfully`);
      } catch (error) {
        toast.error(`Failed to delete car ${selectedCarId}, car: ${error}`);
      }
    }
    setIsModalOpen(false);
    setSelectedCarId(null);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCarId(null);
  };

  const navigate = useNavigate();
  const handleUpdateCarClick = (id:string)=>{
    // navigate('/car/update/${id}');
    navigate(`/car/update/${id}`);
  }

  const filteredCarData = cars.filter(car => {
    if (filter === 'all') return true;
    if (filter === 'small') return car.capacity <= 4;
    if (filter === 'medium') return car.capacity > 4 && car.capacity <= 7;
    if (filter === 'large') return car.capacity > 7;
    return true;
  });


  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
       <Box>
          <Button
            variant={filter === 'all' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleFilterChange('all')}
            sx={{ mr: 1 }}
          >
            All
          </Button>
          <Button
            variant={filter === 'small' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleFilterChange('small')}
            sx={{ mr: 1 }}
          >
            Small
          </Button>
          <Button
            variant={filter === 'medium' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleFilterChange('medium')}
            sx={{ mr: 1 }}
          >
            Medium
          </Button>
          <Button
            variant={filter === 'large' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleFilterChange('large')}
            sx={{ mr: 1 }}
          >
            Large
          </Button>
        </Box>
      </Box>
      <Grid container spacing={3}>
        {Array.isArray(filteredCarData) && filteredCarData.map((car) => (
          <Grid item xs={12} sm={6} md={4} key={car.id}>
            <Card>
              <CardMedia component="img" height="140" image={car.img} alt={`${car.manufacture} ${car.model}`} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {car.manufacture} {car.model}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Year: {car.year}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${car.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                  size="medium"
                  variant="outlined"
                  color="error"
                  sx={{ flex: 1, marginLeft: '8px' }}
                  onClick={() => handleDeleteClick(car.id)}
                >
                  Delete
                </Button>
                <Button 
                  size="medium" 
                  color="success" 
                  variant="contained" 
                  sx={{ flex: 1, marginRight: '8px', color: 'white' }}    
                  onClick={() => handleUpdateCarClick(car.id)}>
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <ConfirmDeleteModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </Box>
  );
};

export default CarList;
