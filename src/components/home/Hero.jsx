import { ArrowRightAlt, Chat } from '@mui/icons-material'
import { Box, Button, Container, Input, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import CButton from '../../common/CButton/CButton'

const Hero = () => {
  return (
    <Container maxWidth='xxl' sx={{
      backgroundImage: 'url(/BG.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      p:0,
      // backgroundPosition:'left',
      height: { xs: '1044px', md: '920px' }
    }}>
      <Container maxWidth='lg'>
        <Stack direction='row' alignItems='center' justifyContent='space-between' py={2}>
          {/* <Box sx={{ display: { xs: 'none', lg: 'block' } }}></Box> */}
          <Box sx={{
            width: { xs: '96px', md: '124px' }
          }}>
            <img style={{ width: '100%' }} src="/Logo.png" alt="" />
          </Box>
          <CButton variant='contained' endIcon={<ArrowRightAlt />} style={{ fontSize: { xs: '14px', md: '16px' }, width: { xs: '104px', md: '136px' }, height: { xs: '37px', md: '56px     ' } }}>
            Sign In
          </CButton>
        </Stack>

        <Stack sx={{ height: '800px' }} direction={{ xs: 'column', md: 'row' }} alignItems='center' justifyContent='space-between' gap={{xs:5,md:10}}>
          <Stack sx={{
            // flex: 1,
            color: '#fff',
            width: {xs:'100%',md:'50%'},
            gap: { xs: 3, md: 3 },
            justifyContent: 'center'
          }}>
            <Typography sx={{
              mt: { xs: 5, md: 0 },
              fontSize: { xs: '32px', md: '48px' },
              fontWeight: 800,
              // lineHeight: '57.6px'
            }}>The next generation <br /> of work lunches</Typography>
            <Typography sx={{ fontSize: {xs:'14px',md:'18px'}, fontWeight: 200,mb:1}}>Let employees manage their own lunch with just a few keystrokes. Cut administration, costs and food waste, while employees are delivered exactly the lunch they want.</Typography>

            <Stack direction='row' alignItems='center' gap={1} justifyContent={{ xs: 'start', sm: 'space-around', lg: 'space-between' }}>
              <Stack sx={{
                width: { xs: '111px', md: '174px' }
              }} direction='row' alignItems='center' gap={1}>
                <Typography sx={{ fontWeight: 600, fontSize: { xs: '16px', md: '42px' } }}>12</Typography>
                <Typography sx={{ fontWeight: 400, fontSize: { xs: '12px', md: '16px' }, lineHeight: { xs: '18px', md: '24px' } }}>dishes to choose from every day</Typography>
              </Stack>
              <img src="/Line.png" alt="" />
              <Stack sx={{
                width: { xs: '64px', md: '93px' }
              }} direction='row' alignItems='center' gap={1}>
                <Typography sx={{ fontWeight: 600, fontSize: { xs: '16px', md: '42px' } }}>59</Typography>
                <Typography sx={{ fontWeight: 400, fontSize: { xs: '12px', md: '16px' }, lineHeight: { xs: '18px', md: '24px' } }}>From <br /> NOK</Typography>
              </Stack>
              <img src="/Line.png" alt="" />
              <Typography sx={{
                width: { xs: '111px', md: '165px  ' },
                fontWeight: 400, fontSize: { xs: '12px', md: '16px' }, lineHeight: { xs: '18px', md: '24px' }
              }}>Simple administration for the company</Typography>
            </Stack>

            <Stack direction='row' sx={{
              alignSelf: { xs: 'start', md: 'start' },
              bgcolor: '#fff',
              width: { xs: '100%', md: '640px' },
              height: { xs: '40px', md: '56px' },
              justifyContent: 'space-between',
              borderRadius: '40px',
              pl: { xs: 1, md: 2 },
            }}>
              <Input disableUnderline sx={{
                border: 'none', outline: 'none',
                flex: 1, fontSize: { xs: '11px', sm: '15px' }, borderRadius: '38px'
              }} type="text" placeholder="Your company's postcode" />
              <Button size='small' sx={{
                textWrap: 'nowrap',
                fontWeight: 700,
                fontSize: { xs: '10px',sm:'12px', md: '15px' },
                borderRadius: '38px',
                bgcolor: '#F5F5F5',
                px: { xs: 1, md: 2 }
              }} startIcon={<Chat size='small' />}>See if we deliver to you</Button>
            </Stack>

          </Stack>
          <Box sx={{
            display: { xs: 'none', md: 'block' },
            width: { xs: '343px', lg: '446px' },
            height: { xs: '445px', lg: '569px' }
          }}>
            <img style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }} src="/Illustration.png" alt="" />
          </Box>
          <Box sx={{
            display: { xs: 'block', md: 'none' },
            width: { xs: '343px', md: '446px' },
            height: { xs: '445px', md: '569px' }
          }}>
            <img style={{
              borderRadius: '10px',
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }} src="/Illustration1.png" alt="" />
          </Box>
        </Stack>
      </Container>

    </Container>
  )
}

export default Hero