import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const SearchBox = () => {
  return (
    <Box id="searchBox" sx={{ px: { xs: '4%', lg: '8%' }, pt: { xs: 12, lg: 24 }, pb: 5 }}>
      <Box
        sx={{
          bgcolor: 'white',
          py: 5,
          mx: 'auto',
          mt: 5,
          borderRadius: 'xl',
          dropShadow: 'lg',
          maxWidth: '7xl',
          px: { xs: 4, sm: 6, lg: 8 },
        }}
      >
        <form id="form" action="javascript:void(0)" className="grid grid-cols-1 lg:grid-cols-9 gap-5">
          <FormControl variant="outlined" className="col-span-2">
            <InputLabel>Tipe Driver</InputLabel>
            <Select label="Tipe Driver" className="input-form w-full">
              <MenuItem value="">
                <em>Pilih Tipe Driver</em>
              </MenuItem>
              <MenuItem value="Sedan">Sedan</MenuItem>
              <MenuItem value="Convertible">Convertible</MenuItem>
              <MenuItem value="Regular Cab Pickup">Regular Cab Pickup</MenuItem>
            </Select>
          </FormControl>
          <TextField id="date" label="Tanggal" type="date" className="input-form w-full col-span-2" InputLabelProps={{ shrink: true }} />
          <TextField id="time" label="Waktu Jemput/Ambil" type="time" className="input-form w-full col-span-2" InputLabelProps={{ shrink: true }} />
          <TextField id="passenger" label="Jumlah Penumpang (optional)" type="number" className="input-form w-full col-span-2" />
          <Box className="col-span-1" display="flex" justifyContent="flex-end" alignItems="center">
            <Button type="submit" sx={{ bgcolor: '#5CB85F', color: 'white', py: 3, borderRadius: '2px', '&:hover': { bgcolor: '#4cae4c' } }}>
              Cari Mobil
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SearchBox;
