import { Chat, KeyboardArrowLeft } from '@mui/icons-material'
import { Box, Button, Checkbox, Container, FormControlLabel, Input, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { CHECk_POST_CODE } from '../../graphql/query'
import LoadingBar from '../../common/loadingBar/LoadingBar'

const inputStyle = {
  width: '100%',
  padding: '8px 24px',
  border: '1px solid gray',
  borderRadius: '50px', mb: 1.5
}

const PostCodeTrue = () => {

  return (
    <Container maxWidth='lg' sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      py: 5
    }}>
      <Link to='/'>
        <Button startIcon={<KeyboardArrowLeft />} sx={{ color: 'primary.main', alignSelf: 'flex-start', mb: 2 }}>
          Back To Home
        </Button>
      </Link>
      <Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' gap={{ xs: 4, md: 8 }}>
        <Box sx={{
          flex: 1,
          width: { xs: '100%', md: '588px' }
        }}>
          <img style={{ width: '100%', height: '100%' }} src="/Group155.png" alt="" />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography sx={{
            fontSize: { xs: '24px', md: '48px' },
            fontWeight: { xs: 500, md: 800 },
            mb: { xs: 2, md: 4 }
          }}>Better food, less food waste, more time</Typography>
          <Typography sx={{
            width: '100%',
            padding: '8px 24px',
            bgcolor: 'primary.main',
            borderRadius:'8px',
            fontSize:'18px',
            color:'#fff'
          }}>
            We  deliver to this postcode yet. But fill in the fields below and we'll see what we can do. 🧑‍🍳
          </Typography>
          <Typography sx={{ fontSize: '24px', fontWeight: '600', my: 3 }}>Create your company account</Typography>

          <Stack gap={2}>
            <Stack direction='row' gap={2}>
              <TextField fullWidth label="Name of the company" variant="outlined" />
              <TextField fullWidth label="Your name" variant="outlined" />
            </Stack>
            <TextField fullWidth label="Email" variant="outlined" />
            <TextField type='password' fullWidth label="Password" variant="outlined" />
            <TextField type='password' fullWidth label="Confirm password" variant="outlined" />
            <FormControlLabel control={<Checkbox />} label="Remember me" />
          </Stack>

          <Stack direction='row' gap={2} mt={2}>
            <Link to='/search'>
              <Button>Back</Button>
            </Link>
            <Button variant='contained' color='primary'>Sign up</Button>
          </Stack>
          <Box sx={{
            display: 'inline-flex', mt: 2
          }}>
            <Typography>Already have a account? </Typography>
            <Typography sx={{ fontWeight: 'bold', color: 'primary.main', ml: 1 }}>Sign in here </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  )
}

export default PostCodeTrue