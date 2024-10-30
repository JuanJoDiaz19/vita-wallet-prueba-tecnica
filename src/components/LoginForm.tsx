'use client';

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormControl, OutlinedInput } from '@mui/material';
import Link from 'next/link';
import Button from './ui/Button';
import { AuthService } from '@/services/auth.service';
import { authService } from '@/services';
import { useLogin } from '@/hooks/useLogin';
import { useRouter } from 'next/navigation';


function LoginForm() {

  const { login } = useLogin();
  const router = useRouter();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    const loginResponse = await login(username, password);
    if(!loginResponse) {
      alert("Pusiste mal tus credenciales, vuelve a intentarlo")
    } else {
      router.push('/inicio')
    }
    
  }

  return (
    <div className=''>
      
      <FormControl fullWidth margin='normal'>
        <label className='text-sm'>Correo Electronico</label>
        <TextField
          id="outlined-username"
          placeholder='juan@gmail.com'
          value={username} // Controlled input
          onChange={(event) => setUsername(event.target.value)} // Update state on input change
        />
      </FormControl>


      <FormControl fullWidth margin='normal'>
        <label className='text-sm'>Contraseña</label>
        <OutlinedInput
          type={showPassword ? 'text' : 'password'}
          placeholder='Escribe tu contraseña'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? 'hide the password' : 'display the password'
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <div className="flex items-end justify-end mb-24">
        <Link className='text-sm' href={'/'}>
            Olvidaste tu contraseña?
        </Link>
      </div>
      <Button 
        title={'Iniciar Sesión'} 
        onClick={ handleSubmit}
      />
      
    </div>
  );
}

export default LoginForm;
