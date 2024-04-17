import { Box, Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from '@mui/material'
import React, { useRef } from 'react'
import CButton from '../../common/CButton/CButton'
import { Link } from 'react-router-dom'
import { ArrowBack, ArrowForward, BackHand, FormatBoldTwoTone, KeyboardArrowLeft, Visibility, VisibilityOff } from '@mui/icons-material';
import Slider from 'react-slick';


const SlideItem = () => {
  return (
    <Stack sx={{ maxWidth: '521px' }}>
      <Box sx={{
        width: { xs: '100%', md: '521px' },
        borderRadius:'8px',
        overflow:'hidden'
      }}>
        <img style={{ width: '100%', height: '100%',borderRadius:'8px' }} src="/Group121.png" alt="" />
      </Box>
      <Typography sx={{ fontSize: '32px', fontWeight: 700, mt: 2, textAlign: 'center' }}>Welcome to Lunsjavtale Restaurant. </Typography>
      <Typography sx={{ fontSize: '14px', fontWeight: 400, mt: 3, textAlign: 'center' }}>Complementing the exquisite cuisine is Lunsjavtale's thoughtfully curated selection of wines and spirits.</Typography>
    </Stack>
  )
}

const Login = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const settings = {
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    showDot:true,
    autoplay: true,
  };

  return (
    <Container sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap:5
    }} maxWidth='xxl'>
      <Stack alignItems='center' justifyContent='center' sx={{
        width:'50%',
        height: '100%',
        background: `linear-gradient(90deg, #EDF3FF 0%, #FFE8D7 100%, #F0FFDF 100%)`,
      }}>
        <Box sx={{width:'500px'}}>
          <Slider style={{padding:'20px'}} {...settings}>
            {
              [1, 2, 3].map((item, id) => (
                  <SlideItem key={id}/>
                ))
            }
          </Slider>
        </Box>

      </Stack>
      <Stack alignItems='center' sx={{width:'50%' }}>
        <Link to='/'>
          <Button startIcon={<KeyboardArrowLeft />} sx={{ color: 'primary.main', mb: 2 }}>
            Back To Home
          </Button>
        </Link>
        <Stack sx={{
          width: { xs: '100%', md: '480px' },
         justifyContent:'center',
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
          <Typography sx={{ fontWeight: 600, fontSize: '25px', mb: 3 }}>Sign into your account</Typography>
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