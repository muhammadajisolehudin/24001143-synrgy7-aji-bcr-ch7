import React, { useState } from 'react';
import { DataGrid, GridColDef, GridToolbar, GridPaginationModel } from '@mui/x-data-grid';
import { Box, TextField, MenuItem, Button } from '@mui/material';

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
}

const carData: Car[] = [
  { id: 1, brand: 'Toyota', model: 'Camry', year: 2021 },
  { id: 2, brand: 'Honda', model: 'Accord', year: 2020 },
  { id: 3, brand: 'Ford', model: 'Mustang', year: 2019 },
  // Add more car data as needed
];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'brand', headerName: 'Brand', width: 150 },
  { field: 'model', headerName: 'Model', width: 150 },
  { field: 'year', headerName: 'Year', width: 110 },
];

const CarTable: React.FC = () => {
  const [pageSize, setPageSize] = useState<number>(5);
  const [page, setPage] = useState<number>(0);
  const [jumpPage, setJumpPage] = useState<string>('');

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPageSize(parseInt(event.target.value, 10));
    setPage(0); // Reset page to 0 when page size changes
  };

  const handleJumpToPage = () => {
    const pageNum = parseInt(jumpPage, 10) - 1;
    if (pageNum >= 0 && pageNum < Math.ceil(carData.length / pageSize)) {
      setPage(pageNum);
    }
  };

  const handlePaginationModelChange = (paginationModel: GridPaginationModel) => {
    setPageSize(paginationModel.pageSize);
    setPage(paginationModel.page);
  };

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
        rows={carData}
        columns={columns}
        pagination
        paginationMode="client"
        pageSizeOptions={[5, 10, 20, 50, 100]}
        rowCount={carData.length}
        paginationModel={{ pageSize, page }}
        onPaginationModelChange={handlePaginationModelChange}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </Box>
  );
};

export default CarTable;
