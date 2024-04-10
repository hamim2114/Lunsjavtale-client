import { useTheme } from '@emotion/react'
import { ArrowBack } from '@mui/icons-material'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const OrderComplete = () => {
  const theme = useTheme()
  return (
    <Box sx={{ maxWidth: '1368px' }}>

      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Link to='/dashboard/myside/checkout'>
          <IconButton>
            <ArrowBack />
          </IconButton>
        </Link>
        <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>Checkout</Typography>
        <Box></Box>
      </Stack>
      <Stack direction={{ xs: 'column', md: 'row' }} gap={{ xs: 2, lg: 3 }} mt={3}>


        <Box sx={{
          width: { xs: '100%', lg: '70%' },
          p: { xs: 0, lg: 3 },
          display: 'flex',
          flexDirection: 'column',
          textAlign:'center',
          justifyContent:'center',
          alignItems:'center',
          gap: 1
        }}>
          <img style={{width:'150px'}} src="/image 30.png" alt="" />
          <Typography sx={{fontSize:'18px',fontWeight:600}}>Thank you ! Your Order is Completed !</Typography>
          <Typography sx={{fontSize:'14px',fontWeight:400}}>You will receive an order confirmation email with details of your order.</Typography>
          <Box sx={{display:'inline-flex',textAlign:'center'}}>
            <Typography sx={{fontSize:'24px',fontWeight:600}}>Order ID:</Typography>
            <Typography sx={{fontSize:'24px',fontWeight:600,color:'primary.main',ml:1}}>#2548654 </Typography>
          </Box>
        </Box>
        <Stack sx={{ flex: 1, p: 3 }}>
          <Typography sx={{ fontSize: '24px', fontWeight: 600, mb: 2 }}>Order Summary</Typography>

          <Stack gap={1} mb={3}>
            {
              [1, 2, 3].map((item, id) => (
                <Stack key={id} sx={{
                  border: `1px solid ${theme.palette.primary.main}`,
                  p: 1.5, borderRadius: '8px'
                }} direction='row' mt={1} alignItems='center'>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <img style={{
                      width: '70px',
                      height: '70px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                    }} src="/insImg3.png" alt="" />
                    <Typography sx={{ fontSize: '14px' }} mr={4}>The lunch collective's Caesar salad</Typography>
                  </Box>
                  <Box>
                    <Typography>1 Piece</Typography>
                    <Typography sx={{ textWrap: 'nowrap' }}>NOK 150</Typography>
                  </Box>
                </Stack>
              ))
            }
          </Stack>

          <Stack direction='row' justifyContent='space-between'>
            <Stack sx={{ px: 2 }} gap={3}>
              <Typography>SubTotal</Typography>
              <Typography>Discount (VELZON15) :</Typography>
              <Typography>Shipping Charge :</Typography>
              <Typography>Estimated Tax (12.5%) :</Typography>
            </Stack>
            <Stack sx={{ px: 2 }} gap={3}>
              <Typography sx={{ textWrap: 'nowrap', alignSelf: 'flex-end' }}>$ 359.96</Typography>
              <Typography sx={{ textWrap: 'nowrap', alignSelf: 'flex-end' }}>- $ 53.99</Typography>
              <Typography sx={{ textWrap: 'nowrap', alignSelf: 'flex-end' }}>$ 65.00</Typography>
              <Typography sx={{ textWrap: 'nowrap', alignSelf: 'flex-end' }}>$ 44.99</Typography>
            </Stack>
          </Stack>
          <Stack sx={{
            bgcolor: 'light.main',
            p: 2, borderRadius: '8px', mt: 2
          }} direction='row' justifyContent='space-between'>
            <Typography sx={{ fontWeight: 600 }}>Total(USD) :</Typography>
            <Typography sx={{ fontWeight: 600 }}>$415.96</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default OrderComplete