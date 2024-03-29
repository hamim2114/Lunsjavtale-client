import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Stack, Tabs, Typography, tabsClasses } from "@mui/material";
import { useState } from "react";
import { CustomTabPanel, TabItem } from "../../mui-treasury/tabs-pill/TabsPill";
import { useTheme } from "@emotion/react";
import { DoneAllRounded } from "@mui/icons-material";
import CButton from "../../common/CButton/CButton";

function WhoAreYou() {
  const [tabIndex, setTabIndex] = useState(0);
  const theme = useTheme()
  return (
    <Container maxWidth='lg' sx={{ my: { xs: 10, md: 15 } }}>
      <Typography sx={{ fontSize: { xs: '22px', md: '32px' }, fontWeight: 600, textAlign: 'center', mb: 2 }}>Who are you?</Typography>
      <Typography sx={{ fontSize: { xs: '16px', md: '24px' }, fontWeight: 500, textAlign: 'center', mb: 6 }}>The lunch collective gives you the canteen right in your pocket</Typography>
      <Stack direction='row' sx={{
        mb: { xs: 3, md: 10 },
        justifyContent: 'center',
      }}>
        <Tabs
          value={tabIndex}
          onChange={(e, index) => setTabIndex(index)}
          sx={{
            width: "fit-content",
            border: `1px solid ${theme.palette.secondary.main}`,
            // px: 2,
            borderRadius: '50px',
            [`& .${tabsClasses.indicator}`]: {
              display: "none",
            },
          }}
        >
          <TabItem disableRipple label={"The Boss"} />
          <TabItem disableRipple label={"Employee"} />
          <TabItem disableRipple label={"Lunch Manager"} />
        </Tabs>
      </Stack>

      <CustomTabPanel value={tabIndex} index={0}>
        <Stack direction={{ sm: 'column', lg: 'row' }} gap={6} >
          <Stack alignItems={{ md: 'center', lg: 'start', }} sx={{
            flex: 1,
          }}>
            <Typography color='primary' sx={{ fontSize: '18px', fontWeight: 700 }}>The boss</Typography>
            <Typography sx={{ fontSize: '32px', fontWeight: 600, mb: 2 }}>Cut costs and get more for <br /> your money.</Typography>
            <Typography mb={2}>Because what is the point of canteen contribution? We have no running costs and of course you pay nothing for lunch that no one should eat. Our customers cut an average of 25% of their lunch costs!</Typography>
            <List>
              {
                [1, 2, 3, 4, 5].map((_, id) => (
                  <ListItem sx={{ mb: 2 }} disablePadding key={id}>
                    <ListItemIcon>
                      <img src="/ok.png" alt="" />
                    </ListItemIcon>
                    <ListItemText sx={{ ml: -3 }}>
                      <Typography fontSize='18px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                    </ListItemText>
                  </ListItem>
                ))
              }
            </List>
            <CButton variant='contained' color='light' style={{ height: { xs: '45px', md: '56px' }, width: '136px', color: 'secondary.main' }}>Get Start</CButton>
          </Stack>
          <Stack sx={{
            flex: 1,
            gap: 2,
            alignItems: { xs: '', md: 'center' }
          }}>
            <Box sx={{
              width: { xs: '100%', md: '713px' },
              height: { xs: '404px', md: '416px' },
            }}>
              <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} src="/Text input.png" alt="" />
            </Box>
            <Stack direction='row' gap={2} justifyContent={{ xs: 'center', sm: 'start', lg: 'space-between' }}>
              <Box sx={{
                width: { xs: '106px', md: '221px' },
                height: '180px'
              }}>
                <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src="/Text input (1).png" alt="" />
              </Box>
              <Box sx={{
                width: { xs: '106px', md: '221px' },
                height: '180px'
              }}>
                <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src="/Text input (2).png" alt="" />
              </Box>
              <Box sx={{
                width: { xs: '106px', md: '221px' },
                height: '180px'
              }}>
                <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} src="/Text input (3).png" alt="" />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </CustomTabPanel>

      <CustomTabPanel value={tabIndex} index={1}>
        <Stack direction={{ sm: 'column', lg: 'row' }} gap={6} >
          <Stack sx={{
            flex: 1,
            gap: 2,
            alignItems: { xs: '', md: 'center' }
          }}>
            <Box sx={{
              width: { xs: '100%', md: '713px' },
              height: { xs: '404px', md: '580px' },
            }}>
              <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} src="/image 7.png" alt="" />
            </Box>
          </Stack>
          <Stack alignItems={{ md: 'center', lg: 'start', }} sx={{
            flex: 1,
          }}>
            <Typography color='primary' sx={{ fontSize: '18px', fontWeight: 700 }}>Employer</Typography>
            <Typography sx={{ fontSize: '32px', fontWeight: 600, mb: 2 }}>Choose between 12 different lunch dishes every day</Typography>
            <Typography mb={2}>There is guaranteed to be something everyone likes here - and new dishes on the menu every single day! We can't fix everything, but we can arrange a stress-free break and ensure that you get food that is not only good, but also good for the body.</Typography>
            <List>
              {
                [1, 2, 3, 4, 5].map((_, id) => (
                  <ListItem sx={{ mb: 2 }} disablePadding key={id}>
                    <ListItemIcon>
                      <img src="/ok.png" alt="" />
                    </ListItemIcon>
                    <ListItemText sx={{ ml: -3 }}>
                      <Typography fontSize='18px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                    </ListItemText>
                  </ListItem>
                ))
              }
            </List>
            <Stack direction='row ' gap={2}>
              <CButton variant='contained' color='light' style={{ height: { xs: '45px', md: '56px' }, width: '136px', color: 'secondary.main' }}>Get Start</CButton>
              <CButton variant='outlined' style={{ height: { xs: '45px', md: '56px' }, width: '136px' }}>Tip The Boss</CButton>
            </Stack>
          </Stack>
        </Stack>
      </CustomTabPanel>

      <CustomTabPanel value={tabIndex} index={2}>
        <Stack direction={{ sm: 'column', lg: 'row' }} gap={6} >
          <Stack alignItems={{ md: 'center', lg: 'start', }} sx={{
            flex: 1,
          }}>
            <Typography color='primary' sx={{ fontSize: '18px', fontWeight: 700 }}>Lunch manager</Typography>
            <Typography sx={{ fontSize: '32px', fontWeight: 600, mb: 2 }}>Do you spend unnecessary time organizing lunch for everyone?</Typography>
            <Typography mb={2}>Flexible everyday working life requires flexible solutions. Let employees themselves keep order about what they should eat and when they have a home office.</Typography>
            <List>
              <ListItem sx={{ mb: 2 }} disablePadding>
                <ListItemIcon>
                  <img src="/ok.png" alt="" />
                </ListItemIcon>
                <ListItemText sx={{ ml: -3 }}>
                  <Typography fontSize='18px'>Stress-free tech allows you to manage employees, have full cost control and decide how much the company will pay.</Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ mb: 2 }} disablePadding>
                <ListItemIcon>
                  <img src="/ok.png" alt="" />
                </ListItemIcon>
                <ListItemText sx={{ ml: -3 }}>
                  <Typography fontSize='18px'>We even fix payroll deductions and have full control over tax rules😇</Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ mb: 2 }} disablePadding>
                <ListItemIcon>
                  <img src="/ok.png" alt="" />
                </ListItemIcon>
                <ListItemText sx={{ ml: -3 }}>
                  <Typography fontSize='18px'>Let's fix lunch. Then you can focus on everything else!</Typography>
                </ListItemText>
              </ListItem>
            </List>
            <Stack direction='row ' gap={2}>
              <CButton variant='contained' color='light' style={{ height: { xs: '45px', md: '56px' }, width: '219px', color: 'secondary.main' }}>Become a customer</CButton>
            </Stack>
          </Stack>
          <Stack sx={{
            flex: 1,
            gap: 2,
            alignItems: { xs: '', md: 'center' }
          }}>
            <Box sx={{
              width: { xs: '100%', md: '713px' },
              height: { xs: '404px', md: '580px' },
              position: 'relative',
              mt: {xs:5,md:0}
            }}>
              <img style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} src="/lunch.png" alt="" />
              <Box sx={{
                position: 'absolute',
                top: '-50px',left: '-50px',
                width: {xs:'120px',md:'160px'}
              }}>
                <img style={{width:'100%',height:'100%'}} src="/image 26.png" alt="" />
              </Box>
            </Box>
          </Stack>
        </Stack>
      </CustomTabPanel>

    </Container>
  );
}

export default WhoAreYou;