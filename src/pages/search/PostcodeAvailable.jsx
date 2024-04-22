import { Chat, KeyboardArrowLeft } from '@mui/icons-material'
import { Box, Button, Checkbox, Container, FormControlLabel, Input, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { CHECk_POST_CODE } from '../../graphql/query'
import LoadingBar from '../../common/loadingBar/LoadingBar'

const inputStyle = {
  width: '100%',
  padding: '8px 24px',
  border: '1px solid gray',
  borderRadius: '50px', mb: 1.5
}

const PostCodeAvailable = ({ handleAvailabe }) => {
  return (
    <Box sx={{ flex: 1 }}>
                <Typography sx={{
                  width: '100%',
                  padding: '8px 24px',
                  bgcolor: 'primary.main',
                  borderRadius: '8px',
                  fontSize: '18px',
                  color: '#fff'
                }}>
                  We  deliver to this postcode yet. But fill in the fields below and we'll see what we can do. 🧑‍🍳
                </Typography>
                <Typography sx={{ fontSize: '24px', fontWeight: '600', my: 3 }}>Create your company account</Typography>

                <Stack gap={2}>
                  <Stack direction='row' gap={2}>
                    <TextField fullWidth label="Name of the company" variant="outlined" />
                    <TextField fullWidth label="Your name" variant="outlined" />
                  </Stack>
                  <TextField fullWidth label="Email" variant="outlined" />
                  <TextField type='password' fullWidth label="Password" variant="outlined" />
                  <TextField type='password' fullWidth label="Confirm password" variant="outlined" />
                  <FormControlLabel control={<Checkbox />} label="Remember me" />
                </Stack>

                <Stack direction='row' gap={2} mt={2}>
                  <Button onClick={handleAvailabe}>Back</Button>
                  <Button variant='contained' color='primary'>Sign up</Button>
                </Stack>
                <Box sx={{
                  display: 'inline-flex', mt: 2
                }}>
                  <Typography>Already have a account? </Typography>
                  <Link to='/login'>
                    <Typography sx={{ fontWeight: 'bold', color: 'primary.main', ml: 1 }}>Sign in here </Typography>
                  </Link>
                </Box>
              </Box>
  )
}

export default PostCodeAvailable