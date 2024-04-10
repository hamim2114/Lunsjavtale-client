import { Chat, KeyboardArrowLeft } from '@mui/icons-material'
import { Box, Button, Container, Input, Stack, Typography } from '@mui/material'
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

const PostCodeFalse = () => {

  return (
    <Container maxWidth='lg' sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      py: { xs: 5, md: 0 }
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
            bgcolor: '#C94F2A',
            color:'#fff',
            fontSize:'18px',
            borderRadius:'8px'
          }}>
            We do not deliver to this postcode yet. But fill in the fields below and we'll see what we can do. 🧑‍🍳
          </Typography>
          <Typography sx={{ fontSize: '24px', fontWeight: '600', my: 2 }}>Information about your company</Typography>
          <Input disableUnderline sx={inputStyle} placeholder='Company name' />
          <Input disableUnderline sx={inputStyle} placeholder='Your work email' />
          <Input disableUnderline sx={inputStyle} placeholder='Your mobile number' />
          <Stack direction='row' gap={2} mt={2}>
            <Link to='/search'>
              <Button>Back</Button>
            </Link>
            <Button variant='contained' color='light'>Got started</Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}

export default PostCodeFalse