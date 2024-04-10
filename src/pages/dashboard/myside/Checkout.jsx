import { useTheme } from '@emotion/react';
import { ArrowBack, CheckCircle, Close, Edit } from '@mui/icons-material'
import { Autocomplete, Box, Button, Divider, IconButton, Paper, Stack, Tab, Tabs, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CButton from '../../../common/CButton/CButton';
import CDialog from '../../../common/dialog/CDialog';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box mt={3}>
          {children}
        </Box>
      )}
    </div>
  );
}


// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };


const Checkout = () => {
  const [value, setValue] = useState(0);
  const [allowanceDialog, setAllowanceDialog] = useState(true);
  const [allowanceValue, setAllowanceValue] = useState(null)
  console.log(allowanceValue)
  function handleAllowanceDialogClose() {
    setAllowanceDialog(false)
  }

  const theme = useTheme()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ maxWidth: '1368px' }}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Link to='/dashboard/myside/cart'>
          <IconButton>
            <ArrowBack />
          </IconButton>
        </Link>
        <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>Checkout</Typography>
        <Box></Box>
      </Stack>

      {/* company allowance dialog */}
      <CDialog openDialog={allowanceDialog}>
        <Stack justifyContent='space-between' sx={{
          height: '70vh',
          p: {xs:.5,md:3}
        }}>
          <Box>
            <Stack sx={{
              padding: '12px 24px',
              border: '1px solid gray',
              borderRadius: '8px', mb: 2
            }} direction='row' justifyContent='space-between' alignItems='center'>
              <Typography sx={{ fontSize: {xs:'18px',md:'24px'}, fontWeight: 600 }}>Company Allowance</Typography>
              <IconButton onClick={handleAllowanceDialogClose}><Close /></IconButton>
            </Stack>
            <Typography sx={{ fontWeight: 600, mb: 1 }}>How much you want to pay for this order</Typography>
            <Autocomplete
              onInputChange={(event, newInputValue) => {
                setAllowanceValue(newInputValue);
              }}
              disablePortal
              id="combo-box-demo"
              options={['25%', '30%', '35%', '40%', '45%', '50%', '75%', '100%']}
              sx={{ width: '100%' }}
              renderInput={(params) => <TextField {...params} label="Select your percent" />}
            />
          </Box>
          <Button onClick={handleAllowanceDialogClose} variant='contained'>Continue</Button>
        </Stack>
      </CDialog>

      <Stack direction={{ xs: 'column', md: 'row' }} gap={{ xs: 2, lg: 3 }} mt={3}>

        <Box sx={{
          width: { xs: '100%', lg: '70%' },
          p: { xs: 0, lg: 3 },
          display: 'flex',
          flexDirection: 'column',
          gap: 3
        }}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab sx={{ textTransform: 'none' }} label="Billing Information" />
                <Tab sx={{ textTransform: 'none' }} label="Shipping Information" />
                <Tab sx={{ textTransform: 'none' }} label="Payment Information" />
              </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
              <Box>
                <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>Billing Information</Typography>
                <Typography>Please fill all information below</Typography>

                <Stack flex={1} gap={2} mt={3}>
                  <TextField id="standard-basic" label="Name" variant="standard" />
                  <TextField id="standard-basic" label="Business Address" variant="standard" />
                  <TextField id="standard-basic" label="First Name*" variant="standard" />
                  <TextField id="standard-basic" label="Sector" variant="standard" />
                  <TextField id="standard-basic" label="Country" variant="standard" />
                  <TextField id="standard-basic" label="Last Name*" variant="standard" />
                  <Button variant='contained' sx={{ width: 'fit-content', alignSelf: 'flex-end', justifySelf: 'end', mt: 2 }}>Processing to Shipping</Button>
                </Stack>

              </Box>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              <Stack>
                <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>Shipping Information</Typography>
                <Typography>Please fill all information below</Typography>
                <Paper sx={{
                  pt: 3, pl: 3, pr: 3, pb: 1, mt: 4,
                  border: `1px solid ${theme.palette.primary.main}`,
                  bgcolor: 'light.main',
                  cursor: 'pointer'
                }}>
                  <Stack direction='row' justifyContent='space-between'>
                    <Typography sx={{ fontSize: '16px', fontWeight: 600, mb: 2 }}>OFFICE ADDRESS</Typography>
                    <CheckCircle sx={{ alignSelf: 'flex-end', color: 'primary.main' }} />
                  </Stack>
                  <Typography>James Honda</Typography>
                  <Typography>1246 Virgil Street Pensacola, FL 32501 Mo. 012-345-6789</Typography>
                  <Divider sx={{ mt: 2 }} />
                  <Stack direction='row' justifyContent='space-between'>
                    <Button>Edit</Button>
                    <Button>Remove</Button>
                  </Stack>
                </Paper>
                <Paper sx={{
                  pt: 3, pl: 3, pr: 3, pb: 1, mt: 4,
                  cursor: 'pointer'
                  // border: `1px solid ${theme.palette.primary.main}`,
                }}>
                  <Stack direction='row' justifyContent='space-between'>
                    <Typography sx={{ fontSize: '16px', fontWeight: 600, mb: 2 }}>HOME ADDRESS</Typography>
                    {/* <CheckCircle sx={{ alignSelf: 'flex-end', color: 'primary.main' }} /> */}
                  </Stack>
                  <Typography>James Honda</Typography>
                  <Typography>1246 Virgil Street Pensacola, FL 32501 Mo. 012-345-6789</Typography>
                  <Divider sx={{ mt: 2 }} />
                  <Stack direction='row' justifyContent='space-between'>
                    <Button>Edit</Button>
                    <Button>Remove</Button>
                  </Stack>
                </Paper>
                <Button variant='contained' sx={{ width: 'fit-content', alignSelf: 'flex-end', mt: 4 }}>Continue to Payment</Button>
              </Stack>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
              <Stack>
                <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>Payment Selection</Typography>
                <Typography>Please fill all information below</Typography>
                <Stack direction='row' justifyContent='space-around' mt={4}>
                  <Button variant='outlined'>Save Payment Method</Button>
                  <Button endIcon={<CheckCircle sx={{ color: 'primary.main' }} />} variant='outlined'>Credit/Debit Card</Button>
                  <Button variant='outlined'>Cash On Delivery</Button>
                </Stack>
                <Stack mt={5} gap={2}>
                  <TextField size='small' label='Name on card' />
                  <TextField size='small' label='Card Number' />
                  <TextField size='small' label='Exprit' />
                  <TextField size='small' label='CCV' />
                </Stack>
                <Link style={{ alignSelf: 'flex-end', marginTop: '30px' }} to='/dashboard/myside/complete'>
                  <Button variant='contained' sx={{ width: 'fit-content' }}>Continue to Order</Button>
                </Link>
              </Stack>
            </CustomTabPanel>

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
            <Stack sx={{ px: 2, mb: 2 }} gap={3}>
              <Typography sx={{ textWrap: 'nowrap', alignSelf: 'flex-end' }}>$ 359.96</Typography>
              <Typography sx={{ textWrap: 'nowrap', alignSelf: 'flex-end' }}>- $ 53.99</Typography>
              <Typography sx={{ textWrap: 'nowrap', alignSelf: 'flex-end' }}>$ 65.00</Typography>
              <Typography sx={{ textWrap: 'nowrap', alignSelf: 'flex-end' }}>$ 44.99</Typography>
            </Stack>
          </Stack>
          <Button onClick={() => setAllowanceDialog(true)} endIcon={<Edit />} variant='outlined'>Company Allowance {allowanceValue}</Button>
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

export default Checkout