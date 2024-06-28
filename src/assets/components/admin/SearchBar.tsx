import React, { useState } from 'react';
import { IconButton, InputBase, Button } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

interface SearchBarProps {
  placeholder?: string;
  onSubmit?: (query: string) => void; // Tambahkan prop onSubmit dengan parameter query
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search...', onSubmit }) => {
  const [query, setQuery] = useState<string>('');

  const handleSearchSubmit = () => {
    if (onSubmit) {
      onSubmit(query); // Kirim nilai query ke onSubmit
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }} className='border ps-2 mr-5 rounded-md'>
      <IconButton
        edge="start"
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        placeholder={placeholder}
        sx={{ height: 36, ml: 1 }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button color="primary" variant="outlined" onClick={handleSearchSubmit}  sx={{ height: '100%', borderWidth: '2px',textTransform: 'none'}}>Search</Button> 
    </div>
  );
};

export default SearchBar;
