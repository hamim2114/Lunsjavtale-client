import { Chat, KeyboardArrowLeft } from '@mui/icons-material'
import { Box, Button, Container, Input, Stack, Typography } from '@mui/material'
import React, {useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { CHECk_POST_CODE } from '../../graphql/query'
import LoadingBar from '../../common/loadingBar/LoadingBar'

const Search = () => {
  const [postcode, setPostcode] = useState();
  const [inputdetect, setInputdetect] = useState(false)

  const navigate = useNavigate()

  const { loading, refetch } = useQuery(CHECk_POST_CODE, {
    onCompleted: (data) => {
      console.log(data)
      const res = data.checkPostCode;
      if (res) navigate(`/search/${postcode}/available`)
      if (!res) navigate(`/search/${postcode}/not-available`)
    }
  });

  const handleSearchClick = () => {
    if (postcode !== null) {
      refetch({ postCode: parseInt(postcode) });
    } else {
      setInputdetect(true)
    }
  }

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
      {loading && <LoadingBar />}
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
            fontSize: { xs: '14px', md: '18px' },
            mb: { xs: 2, md: 4 }
          }}>Eliminate the need for a physical canteen, or running to the store. This canteen is controlled digitally and delivers the food where you want it. And not least - the food is tasty, good for the body and varies every day.</Typography>
          <Stack direction='row' sx={{
            alignSelf: { xs: 'start', md: 'start' },
            bgcolor: '#fff',
            width: '100%',
            height: { xs: '40px', md: '56px' },
            justifyContent: 'space-between',
            border: '1px solid lightgray',
            borderRadius: '40px',
            pl: { xs: 1.5, md: 2 },
          }}>
            <Input disableUnderline sx={{
              border: 'none', outline: 'none',
              flex: 1, fontSize: { xs: '11px', sm: '13px', md: '15px' }, borderRadius: '38px'
            }} type="number" placeholder="Your company's postcode" value={postcode} onChange={e => setPostcode(e.target.value)} />
            <Button disabled={loading} onClick={handleSearchClick} variant='contained' size='small' sx={{
              textWrap: 'nowrap',
              fontWeight: 700,
              fontSize: { xs: '11px', sm: '13px', md: '15px' },
              borderRadius: '38px',
              color: '#fff',
              px: { xs: 1.5, md: 2 }
            }} startIcon={<Chat size='small' />}>See if we deliver to you</Button>
          </Stack>
          <Typography sx={{ ml: 2, color: 'red', visibility: inputdetect ? 'visible' : 'hidden' }}>Post Code Needed!</Typography>
        </Box>
      </Stack>
    </Container>
  )
}

export default Search