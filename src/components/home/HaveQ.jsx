import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import CButton from '../../common/CButton/CButton'

const HaveQ = () => {
  return (
    <Container maxWidth='lg' sx={{
      dispaly: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      bgcolor: 'light.main',
      borderRadius: '16px',
      my: 5
    }}>
      <Stack justifyContent='center' alignItems='center' py={5}>
        <Box sx={{
          width:'120px',
          height:'56px',
          mb:3
        }}>
          <img style={{ width: '100%' }} src="/Avatar group.png" alt="" />
        </Box>
        <Typography sx={{ fontSize: '24px' ,mb:1,color: 'primary.main'}}>Do you still have questions?</Typography>
        <Typography sx={{textAlign:'center'}}>We are available on chat, otherwise you can call the thread at any time</Typography>
        <CButton variant='contained' style={{ height: { xs: '37px', md: '56px' },mt:3, width: '150px' }}>
          Contact Us
        </CButton>
      </Stack>
    </Container>
  )
}

export default HaveQ