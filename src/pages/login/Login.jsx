import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import CButton from '../../common/CButton/CButton'
import { Link } from 'react-router-dom'
import { KeyboardArrowLeft } from '@mui/icons-material'

const Login = () => {
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
          <TextField fullWidth label="Password" variant="outlined" />
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