import React, { useEffect, useState } from 'react';
import { Box, Button, MenuItem, TextField } from '@mui/material';
import { DataGrid, GridToolbar, GridPaginationModel } from '@mui/x-data-grid';
import { useCarContext } from '../../../context/CarContext'; // Pastikan path-nya sesuai

const CarTable: React.FC = () => {
  const { cars, fetchCars } = useCarContext();
  const [pageSize, setPageSize] = useState<number>(5);
  const [page, setPage] = useState<number>(0);
  const [jumpPage, setJumpPage] = useState<string>('');

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPageSize(parseInt(event.target.value, 10));
    setPage(0); // Reset halaman ke 0 saat ukuran halaman berubah
  };

  const handleJumpToPage = () => {
    const pageNum = parseInt(jumpPage, 10) - 1;
    if (pageNum >= 0 && pageNum < Math.ceil(cars.length / pageSize)) {
      setPage(pageNum);
    }
  };

  const handlePaginationModelChange = (paginationModel: GridPaginationModel) => {
    setPageSize(paginationModel.pageSize);
    setPage(paginationModel.page);
  };

  const columns = [
    { field: 'plate', headerName: 'Plate', width: 150 },
    { field: 'manufacture', headerName: 'Manufacture', width: 150 },
    { field: 'model', headerName: 'Model', width: 150 },
    { field: 'price', headerName: 'Price', width: 100 },
    { field: 'capacity', headerName: 'Capacity', width: 100 },
    { field: 'transmission', headerName: 'Transmission', width: 150 },
    { field: 'year', headerName: 'Year', width: 100 },
    { field: 'driver_type', headerName: 'Driver Type', width: 150 },
    { field: 'available', headerName: 'Available', width: 100 },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <TextField
          select
          label="Rows per page"
          value={pageSize}
          onChange={handlePageSizeChange}
          variant="outlined"
          size="small"
          sx={{ minWidth: 120 }}
        >
          {[5, 10, 20, 50, 100].map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Jump to page"
            value={jumpPage}
            onChange={(e) => setJumpPage(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ minWidth: 120, mr: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleJumpToPage}
            size="small"
          >
            Go
          </Button>
        </Box>
      </Box>
      <DataGrid
        rows={cars}
        columns={columns}
        pagination
        paginationMode="client"
        pageSizeOptions={[5, 10, 20, 50, 100]}
        rowCount={5}
        paginationModel={{ pageSize, page }}
        onPaginationModelChange={handlePaginationModelChange}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </Box>
  );
};

export default CarTable;
