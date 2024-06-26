

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
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
  id: string; 
  plate: string;
  manufacture: string;
  model: string;
  img?: File | string;
  price: number;
  capacity: number;
  transmission: Transmission;
  year: number;
  type?: string;
  driver_type: DriverType;
  available: boolean;
  available_at?: string;
  description?: string;
  updated_at?: string;
}

// interface Car {
//   id: string;
//   plate: string;
//   manufacture: string;
//   model: string;
//   img: string;
//   price: number;
//   capacity: number;
//   transmission: Transmission;
//   year: number;
//   type: string;
//   driver_type: DriverType;
//   available: boolean;
//   description: string;
// }

interface CarContextProps {
  cars: Car[];
  fetchCars: () => void;
  fetchCarById: (id: string) => Promise<Car | undefined>;
  addCar: (car: Omit<Car, 'id'>) => Promise<void>;
  updateCar: (car: Car) => Promise<void>;
  deleteCar: (id: string) => Promise<void>;
  searchCars: (query: string, searchBy: 'plate' | 'manufacture' | 'model' | 'year') => void; 
}

const CarContext = createContext<CarContextProps | undefined>(undefined);

export const useCarContext = (): CarContextProps => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error('useCarContext must be used within a CarProvider');
  }
  return context;
};

interface CarProviderProps {
  children: ReactNode;
}

export const CarProvider: React.FC<CarProviderProps> = ({ children }) => {
  const { getToken } = useAuth();
  const [cars, setCars] = useState<Car[]>([]);

  const fetchCars = useCallback(async () => {
    try {
      const response = await axios.get('https://due-erinna-synergy-7-e0b5f09d.koyeb.app/api/v1/cars', {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setCars(response.data.data.cars);
    } catch (error) {
      console.error('Failed to fetch cars:', error);
    }
  }, []);

   const fetchCarById = useCallback(async (id: string) => {
    try {
      const response = await axios.get(`https://due-erinna-synergy-7-e0b5f09d.koyeb.app/api/v1/cars/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      return response.data.data.car as Car;
    } catch (error) {
      console.error('Failed to fetch car by id:', error);
    }
  }, []);

  const addCar = async (car: Omit<Car, 'id'>) => {
    try {
      const formData = new FormData();
      formData.append('plate', car.plate);
      formData.append('manufacture', car.manufacture);
      formData.append('model', car.model);
      if (car.img instanceof File) {
        formData.append('img', car.img);
      }
      formData.append('price', car.price.toString());
      formData.append('capacity', car.capacity.toString());
      formData.append('transmission', car.transmission);
      formData.append('year', car.year.toString());
      formData.append('type', car.type || '');
      formData.append('driver_type', car.driver_type);
      formData.append('available', car.available.toString());
      formData.append('description', car.description || '');
      const response = await axios.post('https://due-erinna-synergy-7-e0b5f09d.koyeb.app/api/v1/cars', formData, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      });
      setCars((prevCars) => [...prevCars, response.data]);
      toast.success('Car added successfully');
    } catch (error) {
      console.error('Failed to add car:', error);
      toast.error(`Failed to add car: ${error}`);
    }
  };

   const updateCar = async (car: Car) => {
    try {
      const formData = new FormData();
      formData.append('id', car.id);
      formData.append('plate', car.plate);
      formData.append('manufacture', car.manufacture);
      formData.append('model', car.model);
      if (car.img instanceof File) {
        console.log("img path :", car.img)
        formData.append('img', car.img);
      } else {
        formData.append('img', car.img as string); // Pastikan Anda menangani string img juga
      }
      formData.append('price', car.price.toString());
      formData.append('capacity', car.capacity.toString());
      formData.append('transmission', car.transmission);
      formData.append('year', car.year.toString());
      formData.append('type', car.type || '');
      formData.append('driver_type', car.driver_type);
      formData.append('available', car.available.toString());
      formData.append('description', car.description || '');
      await axios.put(`https://due-erinna-synergy-7-e0b5f09d.koyeb.app/api/v1/cars/${car.id}`, formData, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setCars((prevCars) => prevCars.map((c) => (c.id === car.id ? car : c)));
      toast.success('Car updated successfully');
    } catch (error) {
      console.error('Failed to update car:', error);
      toast.error(`Failed to update car: ${error}`);
    }
  };

  const deleteCar = async (id: string) => {
    try {
      await axios.delete(`https://due-erinna-synergy-7-e0b5f09d.koyeb.app/api/v1/cars/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      });
      setCars((prevCars) => prevCars.filter((car) => car.id !== id));
      toast.success('Car deleted successfully');
    } catch (error) {
      toast.error(`Failed to delete car: ${error}`);
    }
  };

  const searchCars = async (query: string, searchBy: 'plate' | 'manufacture' | 'model' | 'year') => {
    try {
      const response = await axios.get(`https://due-erinna-synergy-7-e0b5f09d.koyeb.app/api/v1/cars/search?${searchBy}=${query}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      setCars(response.data.data.cars);
    } catch (error) {
      console.error('Failed to search cars:', error);
    }
  };

  return (
    <CarContext.Provider value={{ cars, fetchCars, fetchCarById, addCar, updateCar, deleteCar, searchCars }}>
      {children}
    </CarContext.Provider>
  );
};
