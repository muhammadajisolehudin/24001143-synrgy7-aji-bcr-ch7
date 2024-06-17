import React from 'react';
import {
  Button,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import bg from '../../assets/img/bg-login.png'; 
import { createCustomTheme } from '../../utils/themeUtils';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext'; // Sesuaikan path impor

interface LoginFormInputs {
  username: string;
  password: string;
}

export const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const { login, loading, error } = useAuth();

  const theme = createCustomTheme();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    await login(data.username, data.password);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='flex bg-primary'>
        <img
          src={bg}
          alt="Welcome"
          style={{
            width: '65%', 
            height: '100vh',
            margin: 0, 
            padding: 0, 
          }}
        />

        <Paper
          sx={{
            width: '35%',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            borderRadius: '0'
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', paddingRight: '7%', paddingLeft: '7%' }}>
            <Typography
              sx={{
                fontFamily: 'Helvetica',
                fontSize: 24,
                fontWeight: 700,
                lineHeight: '36px',
                textAlign: 'left',
                marginBottom: '20px' // Tambahkan margin bawah
              }}
            >
              Welcome, Admin BCR
            </Typography>
            <label>Username</label>
            <TextField
              {...register('username', { required: 'Username is required' })}
              id="username"
              variant="outlined"
              fullWidth
              size="small"
              margin="normal"
              sx={{ marginBottom: '10px', fontFamily: 'Helvetica' }} // Tambahkan margin bawah
              error={!!errors.username}
              helperText={errors.username ? errors.username.message : ''}
            />
            <label>Password</label>
            <TextField
              {...register('password', { required: 'Password is required' })}
              id="password"
              type="password"
              variant="outlined"
              fullWidth
              size="small"
              margin="normal"
              sx={{ marginBottom: '10px', fontFamily: 'Helvetica' }}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
            />
            {error && (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            )}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              sx={{ marginTop: '20px' }} // Tambahkan margin atas
              type="submit"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Sign In'}
            </Button>
          </form>
        </Paper>
      </div>
    </ThemeProvider>
  );
};
