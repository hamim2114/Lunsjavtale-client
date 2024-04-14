import { Box, Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import CButton from '../../common/CButton/CButton'
import { Link } from 'react-router-dom'
import { KeyboardArrowLeft, Visibility, VisibilityOff } from '@mui/icons-material'

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Container sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }} maxWidth='lg'>
      <Stack>
        <Link to='/'>
          <Button startIcon={<KeyboardArrowLeft />} sx={{ color: 'primary.main', alignSelf: 'flex-start', mb: 2 }}>
            Back To Home
          </Button>
        </Link>
        <Stack sx={{
          width: { xs: '100%', md: '480px' },
          border: '1px solid gray',
          p: 2,
          borderRadius: '12px'
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            height: '128px',
            justifyContent: 'center',
          }}>
            <Box sx={{
              width: { xs: '70%', md: '200px' },
              mb: 2
            }}>
              <img width='100%' src="Logo.svg" alt="" />
            </Box>
          </Box>
          <TextField sx={{ mb: 2 }} fullWidth label="Email" variant="outlined" />
          {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
          <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
          <Typography sx={{ fontSize: '15px', alignSelf: 'center', my: 3 }}>Don't remember your password?</Typography>
          <CButton variant='contained'>
            LOG IN
          </CButton>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Login