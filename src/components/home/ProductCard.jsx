import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import CButton from '../../common/CButton/CButton'
import { useTheme } from '@emotion/react'

const ProductCard = () => {
  const theme = useTheme()
  return (
    <Stack sx={{
      width: { xs: '100%', md: '396px' },
      p: { xs: '12px', md: '24px' },
      border: `1px solid ${theme.palette.primary.main}`
    }}>
      <Typography sx={{
        fontSize: { xs: '14px', md: '18px' },
        fontWeight: 700,
        color: 'primary.main'
      }}>Todays</Typography>
      <Typography sx={{
        fontSize: { xs: '24px', md: '32px' },
        fontWeight: 600,
        mb: { xs: 1, md: 2 }
      }}>Vegetarian</Typography>
      <Typography sx={{
        mb: 2,
        fontSize: { xs: '14px', md: '16px' }
      }}>Do you want a regular vegetarian, or do you like to vary throughout the week? We always have at least one vegetarian option, and also offer vegan.</Typography>
      <Box sx={{
        width: '100%',
        height: '280px',
        mb: 2
      }}>
        <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} src="/Image (1).png" alt="" />
      </Box>
      <Typography sx={{
        fontSize: { xs: '12px', md: '14px' }
      }} mb={2} >Topped with leaf salad, pickled carrot & pumpkin seeds. Spicy tahini dressing on the side.</Typography>
      <Box sx={{ display: 'inline-flex', mb: 2 }}>
        <Typography>Contains:</Typography>
        <Typography sx={{ fontSize: '12px', ml: 1 }}>570 Calories, 40g carbohydrate , 31 g fat, 27 grams of protein</Typography>
      </Box>
      <Stack direction={{xs:'column',sm:'row'}} gap={1}>
        <CButton variant='contained' color='light' style={{ flex: 1, height: { xs: '45px', md: '56px', fontSize: { xs: '14px', md: '16px' } } }}>
          from 89, per person*
        </CButton>
        <CButton style={{ height: { xs: '45px', md: '56px', fontSize: { xs: '14px', md: '16px' } } }} variant='contained' color='secondary'>
          Get Stared
        </CButton>
      </Stack>
    </Stack>
  )
}

export default ProductCard