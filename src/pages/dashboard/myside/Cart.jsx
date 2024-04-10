import { useTheme } from '@emotion/react';
import { Add, ArrowBack, Close, Remove } from '@mui/icons-material';
import { Box, Button, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CButton from '../../../common/CButton/CButton';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [quantity, setQuantity] = useState(3)

  const theme = useTheme();

  const toggleQuantity = (action) => {
    if (action === 'increase') {
      setQuantity(prev => prev + 1)
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }
  return (
    <Box maxWidth='1368px'>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Link to='/dashboard/myside'>
          <IconButton>
            <ArrowBack />
          </IconButton>
        </Link>
        <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>Shopping Cart</Typography>
        <Box></Box>
      </Stack>
      <Stack direction={{ xs: 'column', lg: 'row' }} gap={{ xs: 2, lg: 3 }} mt={3}>
        <Box sx={{
          width: { xs: '100%', lg: '70%' },
          p: { xs: 0, lg: 3 },
          display: 'flex',
          flexDirection: 'column',
          gap: 3
        }}>
          {
            [1, 2, 3].map((item, id) => (
              <Paper key={id} elevation={2} sx={{
                bgcolor: 'light.main',
              }}>
                <Stack sx={{ p: { xs: 1, lg: 3 } }} direction='row' justifyContent='space-between'>
                  <Stack direction='row' gap={2} alignItems='center'>
                    <Box sx={{
                      width: { xs: '64px', lg: '128px' },
                      height: { xs: '64px', lg: '128px' },
                      bgcolor: '#fff',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      p: 1
                    }}>
                      <img style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '8px',
                      }} src="/insImg3.png" alt="" />
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: { xs: '14px', lg: '16px' }, fontWeight: 600 }}>The lunch collective's Caesar salad</Typography>
                      <Typography mb={1}>Lunch</Typography>
                      <Stack sx={{
                        width: { xs: '120px', lg: '150px' },
                        border: `1px solid ${theme.palette.primary.main}`,
                        borderRadius: '4px'
                      }} direction='row' alignItems='center' justifyContent='space-between' >
                        <IconButton sx={{
                          borderRight: `1px solid ${theme.palette.primary.main}`,
                          borderRadius: 0
                        }} onClick={() => toggleQuantity('decrease')}><Remove sx={{ fontSize: { xs: '13px', lg: '18px' } }} /></IconButton>
                        <Typography>{quantity}</Typography>
                        <IconButton sx={{
                          borderLeft: `1px solid ${theme.palette.primary.main}`,
                          borderRadius: 0
                        }} onClick={() => toggleQuantity('increase')}><Add sx={{ fontSize: { xs: '13px', lg: '18px' } }} /></IconButton>
                      </Stack>
                    </Box>
                  </Stack>
                  <Box>
                    <Typography sx={{ fontSize: { xs: '14px', lg: '16px' }, fontWeight: 400 }}>Item Price</Typography>
                    <Typography sx={{ fontSize: { xs: '14px', lg: '16px' }, fontWeight: 600 }}>$200.00</Typography>
                  </Box>
                </Stack>
                <Stack sx={{
                  bgcolor: '#fff',
                  px: 3,
                  py: 1
                }} direction='row' justifyContent='space-between' alignItems='center'>
                  <Button size='small' startIcon={<Close />}>Remove</Button>
                  <Typography sx={{ fontSize: { xs: '14px', lg: '16px' } }}>Total: <b>$400.00</b></Typography>
                </Stack>
              </Paper>
            ))
          }
        </Box>
        <Stack sx={{ flex: 1, p: 3 }}>
          <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>Order Summary</Typography>
          <Box sx={{
            bgcolor: 'light.main',
            p: 3,
            borderRadius: '8px',
            my: 4
          }}>
            <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>Have a promo code/coupon code ?</Typography>
            <Stack direction='row' gap={2} alignItems='center' mt={2}>
              <TextField size='small' sx={{ flex: 3 }} placeholder='Enter copun code' />
              <Button variant='contained' sx={{ flex: 1 }}>Apply</Button>
            </Stack>
          </Box>

          <Stack direction='row' justifyContent='space-between'>
            <Stack sx={{ px: 2 }} gap={3}>
              <Typography>SubTotal</Typography>
              <Typography>Discount (VELZON15) :</Typography>
              <Typography>Shipping Charge :</Typography>
              <Typography>Estimated Tax (12.5%) :</Typography>
            </Stack>
            <Stack sx={{ px: 2 }} gap={3}>
              <Typography sx={{ textWrap: 'nowrap',alignSelf:'flex-end' }}>$ 359.96</Typography>
              <Typography sx={{ textWrap: 'nowrap',alignSelf:'flex-end' }}>- $ 53.99</Typography>
              <Typography sx={{ textWrap: 'nowrap',alignSelf:'flex-end' }}>$ 65.00</Typography>
              <Typography sx={{ textWrap: 'nowrap',alignSelf:'flex-end' }}>$ 44.99</Typography>
            </Stack>
          </Stack>
          <Stack sx={{
            bgcolor: 'light.main',
            p: 2, borderRadius: '8px', mt: 2
          }} direction='row' justifyContent='space-between'>
            <Typography sx={{ fontWeight: 600 }}>Total(USD) :</Typography>
            <Typography sx={{ fontWeight: 600 }}>$415.96</Typography>
          </Stack>
          <Link to='/dashboard/myside/checkout'>
            <Button variant='contained' sx={{ mt: 3, width: '100%' }}>Checkout</Button>
          </Link>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Cart