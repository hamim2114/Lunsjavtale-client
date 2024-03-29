import { Box, Container, Stack } from '@mui/material'
import React from 'react'

const logo = [
  { img: "/Rectangle 4.png" },
  { img: "/Rectangle 5.png" },
  { img: "/Rectangle 6.png" },
  { img: "/Rectangle 7.png" },
  { img: "/Rectangle 8.png" },
  { img: "/Rectangle 9.png" },
  { img: "/Rectangle 10.png" },
]

const LogoList = () => {
  return (
    <Container maxWidth='xl' >
      <Stack direction='row' justifyContent='space-between'  flexWrap={'wrap'} gap={2}>
        {
          logo.map((item, i) => (
            <Box key={i} sx={{
              width: { xs: '50px',md: '100px', lg: '160px' }
            }}>
              <img style={{ width: '100%' }} src={item.img} alt="" />
            </Box>
          ))
        }
      </Stack>
    </Container>
  )
}

export default LogoList