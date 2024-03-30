import { CheckCircle, DoneAllRounded } from '@mui/icons-material'
import { Box, Button, Container, Divider, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import CButton from '../../common/CButton/CButton';

const SoEasy = () => {
  return (
    <Container sx={{my: {xs:10,md:15} }} maxWidth='lg'>
      <Stack sx={{ width: '100%' }} gap={4} direction={{xs:'column',lg:'row'}} alignItems='center' justifyContent='space-between'>

        <Box >
          <Typography sx={{ fontWeight: 800, fontSize: {xs:'32px',md:'58px'} }}>So easy!</Typography>
          <Divider sx={{width: '64px',borderBottomWidth: '2px',my:{xs:1,md:3}}}/>
          <List>
            {
              [1, 2, 3, 4, 5].map((_, id) => (
                <ListItem sx={{ mb: 2 }} disablePadding key={id}>
                  <ListItemIcon><img src="/ok.png" alt="" /></ListItemIcon>
                  <ListItemText sx={{ ml: -3}}>
                    <Typography fontSize='18px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                  </ListItemText>
                </ListItem>
              ))
            }
          </List>
          <Stack direction={{xs:'column',md:'row'}} gap={{xs:2,md:3}}>
            <CButton variant='contained' color='secondary' style={{ width: {xs:'100%',md:'119px'}, textWrap: 'noWrap' }}>Get Started</CButton>
            <CButton variant='outlined' style={{ flexGrow: 1 }}>Do you need meeting food?</CButton>
          </Stack>
        </Box>
        <Box sx={{
          width: {xs:'100%',md:'644px'},
          height: '100%'
        }}>
          <img style={{ width: '100%',height:'100%' }} src="/Group 15.png" alt="" />
        </Box>

      </Stack>
    </Container>
  )
}

export default SoEasy