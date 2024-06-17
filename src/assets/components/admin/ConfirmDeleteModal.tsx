import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import img_modal from '../../img/modal-img.png'; 

interface ConfirmDeleteModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ open, onClose, onConfirm }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
        <Box 
            sx={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                width: 400, 
                bgcolor: 'background.paper', 
                boxShadow: 24,
                p: 4,
                textAlign: 'center'
            }}
        >
        <img
            src={img_modal}
            alt="Welcome"
            className='mx-auto'
        />
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Menghapus Data Mobil
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button variant="contained" color="primary" onClick={onConfirm} sx={{ mr: 2, width:'87px'}}>
            Ya
          </Button>
          <Button variant="outlined" color="primary" onClick={onClose} sx={{ width:'87px' }}>
            Tidak
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmDeleteModal;
