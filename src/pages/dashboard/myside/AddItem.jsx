/* eslint-disable react/prop-types */
import { useTheme } from '@emotion/react'
import { Add, Close, Remove } from '@mui/icons-material'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import CButton from '../../../common/CButton/CButton';

const allergies = [
  'Gluten (oats, wheat, rye, spelt, barley)',
  'Peanuts',
  'Milks',
  'Fishs',
  'Shellfish',
  'Egg',
];

const AddItem = ({ closeDialog, option }) => {
  const [selectedAllergies, setSelectedAllergies] = useState([]);
  const [quantity, setQuantity] = useState(1)

  const theme = useTheme();

  const toggleQuantity = (action) => {
    if (action === 'increase') {
      setQuantity(prev => prev + 1)
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  const toggleAllergy = (allergy) => {
    const isSelected = selectedAllergies.includes(allergy);
    if (isSelected) {
      setSelectedAllergies(selectedAllergies.filter(item => item !== allergy));
    } else {
      setSelectedAllergies([...selectedAllergies, allergy]);
    }
  };
  return (
    <Box sx={{
      p:{xs:0,md:2}
    }}>

      <Stack direction='row' justifyContent='space-between' mb={4}>
        <Typography variant='h4'>Add</Typography>
        <IconButton onClick={closeDialog}>
          <Close />
        </IconButton>
      </Stack>

      <Stack direction={{xs:'column',md:'row'}} gap={2}>
        <Box sx={{
          // width:'96px',
          // height:'96px'
        }}>
          <img style={{ width: '96px', height: '96px', objectFit: 'cover', borderRadius: '12px' }} src="/Image (1).png" alt="" />
        </Box>
        <Box>
          <Typography variant='h6' mb={1}>The lunch collective's Caesar salad</Typography>
          <Typography sx={{ fontSize: '14px', mb: 2 }}>Red cabbage & carrot salad with soy & honey-marinated pork neck. Topped with edamame beans, steamed broccoli, peanuts, crispy onion & coriander. Spicy peanut sauce on the side.</Typography>
          <Typography variant='h6'>Allergens</Typography>
          <Typography sx={{ fontSize: '14px' }}>Egg, Milk, Mustard, Sulphite</Typography>
        </Box>
      </Stack>

      <Stack direction={{xs:'column',md:'row'}} gap={{xs:2,md:5}} mt={3}>
        <Box>
          <Typography variant='h6' mb={1}>Number of Quantity</Typography>
          <Stack sx={{
            width: '210px',
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: '50px'
          }} direction='row' alignItems='center' justifyContent='space-between' >
            <IconButton onClick={() => toggleQuantity('decrease')}><Remove /></IconButton>
            <Typography>{quantity}</Typography>
            <IconButton onClick={() => toggleQuantity('increase')}><Add /></IconButton>
          </Stack>
        </Box>
        <Box>
          <Typography variant='h6' mb={1}>Price</Typography>
          <Typography sx={{ fontSize: '14px' }}>NOK 102.50</Typography>
          <Typography sx={{ fontSize: '14px' }}>Total: NOK {102.50 * quantity}</Typography>
        </Box>
      </Stack>

      <Box mt={2}>
        <Typography variant='h6' mb={1}>Allergies</Typography>
        {
          !option && (
            <Stack direction='row' flexWrap='wrap'>
              {allergies.map((allergy, index) => (
                <Box
                  key={index}
                  onClick={() => toggleAllergy(allergy)}
                  sx={{
                    padding: {xs:'3px 5px',md:'6px 10px'},
                    margin: '5px',
                    cursor: 'pointer',
                    border: `1px solid ${theme.palette.primary.main}`,
                    borderRadius: '8px',
                    color: selectedAllergies.includes(allergy) ? '#fff' : 'inherit',
                    bgcolor: selectedAllergies.includes(allergy) ? 'primary.main' : 'transparent',
                    userSelect: 'none'
                  }}
                >
                  <Typography sx={{ fontSize: {xs:'14px',md:'16px'} }}>{allergy}</Typography>
                </Box>
              ))}
            </Stack>
          )
        }
        {
          option &&
          <Box sx={{
            padding: {xs:'5px 10px',md:'12px 24px'},
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: '8px', mt: 2,
            textAlign: 'center',
            bgcolor: 'light.main '
          }}>
            <Typography>Unfortunately, this menu cannot be adjusted for allergies</Typography>
          </Box>

        }
      </Box>
      {
        !option && (
          <Box sx={{
            padding: {xs:'5px 10px',md:'12px 24px'},
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: '8px', mt: 2,
            textAlign: 'center'
          }}>
            <Typography>Nuts (almonds, hazelnuts, walnuts, cashews, pecans, pistachios, brazil nuts and
              macadamia nuts)</Typography>
          </Box>
        )
      }

      <CButton variant='contained' style={{ width: '100%', mt: 2,height:{xs:'45px',md:'56px'} }}>
        Use
      </CButton>

    </Box>
  )
}

export default AddItem