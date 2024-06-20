import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography, FormControl, FormControlLabel, Radio, RadioGroup, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCarContext } from '../../../context/CarContext';
import { toast } from 'react-toastify';

enum Transmission {
  Manual = 'manual',
  Automatic = 'automatic',
  CVT = 'cvt',
  DCT = 'dct',
  WetClutch = 'wet_clutch',
}

enum DriverType {
  LepasKunci = 'lepas kunci',
  DenganSupir = 'dengan supir',
}

interface Car {
  id:string;
  plate: string;
  manufacture: string;
  model: string;
  img?: File|string;
  price: number;
  capacity: number;
  transmission: Transmission;
  year: number;
  type?: string;
  driver_type: DriverType;
  available: boolean;
  description?: string;
}

interface FormCarProps {
  initialCar?: Car; 
  mode: 'add' | 'update';
  carId?: string; 
}

const FormCar: React.FC<FormCarProps> = ({ initialCar, mode, carId }) => {
  // const { id } = useParams<{ id: string }>();
  const [imgPrev, setImgPrev] = useState<string>('');
  const navigate = useNavigate();
  const { addCar, fetchCarById, updateCar } = useCarContext();
  const [car, setCar] = useState<Car>({
    id: initialCar?.id || '', // Tambahkan id di sini, dan pastikan tidak null atau undefined
    plate: initialCar?.plate || '',
    manufacture: initialCar?.manufacture || '',
    model: initialCar?.model || '',
    img: initialCar?.img || undefined,
    price: initialCar?.price || 0,
    capacity: initialCar?.capacity || 0,
    transmission: initialCar?.transmission || Transmission.Manual,
    year: initialCar?.year || 0,
    type: initialCar?.type || '',
    driver_type: initialCar?.driver_type || DriverType.LepasKunci,
    available: initialCar?.available || true,
    description: initialCar?.description || '',
  });

   useEffect(() => {
    // Jika initialCar tidak ada, artinya kita membutuhkan data mobil berdasarkan ID
    if (!initialCar && mode === 'update' && carId) {
      fetchCarData(carId);
    }
  }, [carId, mode, initialCar]);

  const fetchCarData = async (carId: string) => {
    try {
      const fetchedCar = await fetchCarById(carId); // Panggil fungsi getCarById dari context
      if (fetchedCar) {
        setCar(fetchedCar);
      } else {
        console.error(`Car with ID ${carId} not found`);
      }
    } catch (error) {
      console.error('Failed to fetch car:', error);
    }
  };


  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setCar((prevCar) => ({
  //     ...prevCar,
  //     [name]: name === 'plate' ? value.toUpperCase() : name === 'price' || name === 'capacity' || name === 'year' ? parseInt(value) : value,
  //   }));
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (e.target.type === 'file') {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setCar(prevCar => ({
          ...prevCar,
          img: file, // Menyimpan file gambar dalam state img
        }));

        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) {
            setImgPrev(reader.result as string); // Menyimpan URL gambar pratinjau
          }
        };
        reader.readAsDataURL(file);
      }
    } else {
      // Handle perubahan input selain file
      setCar(prevCar => ({
        ...prevCar,
        [name]: name === 'plate' ? value.toUpperCase() : name === 'price' || name === 'capacity' || name === 'year' ? parseInt(value) : value,
      }));
    }
  };

  

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {

      if (mode === 'add') {
        await addCar(car);
        toast.success('Car added successfully');
        navigate(-1);
      } else {
        await updateCar(car);
        toast.success('Car updated successfully');
        navigate(-1);
      }
    } catch (error) {
      toast.error(`Failed to ${mode} car: ${error}`);
    }
  };

  const handleCancel = () => {
    navigate('/car');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h5" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
        {mode === 'add' ? 'Add New Car' : 'Update Car'}
      </Typography>
      <Box className='bg-white px-5 py-5'>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle1" sx={{ minWidth: '150px' }}>Plat Number</Typography>
          <TextField
            name='plate'
            value={car.plate}
            onChange={handleChange}
            size='small'
            className='w-[30rem]'
          />
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle1" sx={{ minWidth: '150px' }}>Manufacture</Typography>
          <TextField
            name='manufacture'
            value={car.manufacture}
            onChange={handleChange}
            size='small'
            className='w-[30rem]'
          />
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle1" sx={{ minWidth: '150px' }}>Model</Typography>
          <TextField
            name='model'
            value={car.model}
            onChange={handleChange}
            size='small'
            className='w-[30rem]'
          />
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle1" sx={{ minWidth: '150px' }}>Image URL</Typography>
          <TextField
            type="file"
            name="img"
            onChange={handleChange}
            // accept="image/*"
            size="small"
            className="w-[30rem]"
          />
          {imgPrev && <img src='imgPrev' alt='' />}
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle1" sx={{ minWidth: '150px' }}>Rental Price</Typography>
          <TextField
            type="number"
            name="price"
            value={car.price}
            onChange={handleChange}
            size='small'
            className='w-[30rem]'
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle1" sx={{ minWidth: '150px' }}>Capacity</Typography>
          <TextField
            type="number"
            name="capacity"
            value={car.capacity}
            onChange={handleChange}
            size='small'
            className='w-[30rem]'
          />
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle1" sx={{ minWidth: '150px' }}>Transmission</Typography>
          <FormControl component="fieldset">
            <RadioGroup
              row
              name="transmission"
              value={car.transmission}
              onChange={handleRadioChange}
            >
              <FormControlLabel value={Transmission.Manual} control={<Radio />} label="Manual" />
              <FormControlLabel value={Transmission.Automatic} control={<Radio />} label="Automatic" />
              <FormControlLabel value={Transmission.CVT} control={<Radio />} label="CVT" />
              <FormControlLabel value={Transmission.DCT} control={<Radio />} label="DCT" />
              <FormControlLabel value={Transmission.WetClutch} control={<Radio />} label="Wet Clutch" />
            </RadioGroup>
          </FormControl>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle1" sx={{ minWidth: '150px' }}>Year of Production</Typography>
          <TextField
            type='number'
            name="year"
            value={car.year}
            onChange={handleChange}
            size='small'
            className='w-[30rem]'
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle1" sx={{ minWidth: '150px' }}>Driver Type</Typography>
          <FormControl component="fieldset">
            <RadioGroup
              row
              name="driver_type"
              value={car.driver_type}
              onChange={handleRadioChange}
            >
              <FormControlLabel value={DriverType.LepasKunci} control={<Radio />} label="Lepas Kunci" />
              <FormControlLabel value={DriverType.DenganSupir} control={<Radio />} label="Dengan Supir" />
            </RadioGroup>
          </FormControl>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle1" sx={{ minWidth: '150px' }}>Available</Typography>
          <Checkbox
            checked={car.available}
            onChange={handleCheckboxChange}
            name="available"
            color="primary"
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="subtitle1" sx={{ minWidth: '150px' }}>Description</Typography>
          <TextField
            multiline
            rows={4}
            name="description"
            value={car.description}
            onChange={handleChange}
            size='small'
            className='w-[30rem]'
          />
        </Box>
        
      </Box>
      
      <Box sx={{ display: 'flex', mt: 5 }}>
        <Button variant="outlined" color='primary' onClick={handleCancel} sx={{ mr: 2 }}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default FormCar;
