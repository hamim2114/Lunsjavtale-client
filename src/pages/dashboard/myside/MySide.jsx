import { Add, ArrowBack, ArrowForward, Close, MoreVert } from '@mui/icons-material'
import { Box, Grid, IconButton, Paper, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import Calender from './Calender'
import CDialog from '../../../common/dialog/CDialog';
import AddItem from './AddItem';
import CButton from '../../../common/CButton/CButton';
import { useTheme } from '@emotion/react';
import MiniCart from './MiniCart';



const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1278 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1074, min: 800 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1
  }
};
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (

    <Stack direction='row' sx={{
      display: { xs: 'none', md: 'block' },

      // position:'absolute',top:0
    }}>
      <IconButton disable={currentSlide === 0 ? true : false} onClick={() => previous()} variant='outlined' style={{ height: '40px', mr: 2, borderRadius: '50px', width: '90px' }}>
        <ArrowBack />
      </IconButton>
      <IconButton onClick={() => next()} variant='outlined' style={{ height: '40px', borderRadius: '50px', width: '90px' }}>
        <ArrowForward />
      </IconButton>
    </Stack>
  );
};



const MySide = (props) => {
  const [openProductAddDialog, setOpenProductAddDialog] = useState(false);
  const [openOptionProductAddDialog, setOpenOptionProductAddDialog] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedOptionProductId, setSelectedOptionProductId] = useState(null);

  const theme = useTheme()

  const handleProductDialogOpen = (id) => {
    setSelectedProductId(id)
    setOpenProductAddDialog(true);
  };
  const handleProductDialogClose = () => {
    setOpenProductAddDialog(false);
  };
  const handleOptionProductDialogOpen = (id) => {
    setSelectedOptionProductId(id)
    setOpenOptionProductAddDialog(true);
  };
  const handleOptionProductDialogClose = () => {
    setOpenOptionProductAddDialog(false);
  };

  const SelectedItem = true

  return (
    <Stack maxWidth='1368px' mb={5} direction={{ xs: 'column', lg: 'row' }} gap={3}>
      <Box sx={{
        width: { xs: '100%', lg: '70%' }
      }}>
        <Box mb={3}>
          <Calender />
        </Box>
        <Paper>
          <Typography sx={{
            bgcolor: '#52525B',
            padding: '12px 24px',
            color: '#fff',
            textAlign: 'center',
            borderRadius: '5px'
          }}>Lunch</Typography>
          <Stack sx={{
            height: '370px',
            overflowY: 'auto',
            p: 2
          }} direction='row' flexWrap='wrap' gap={2}>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, id) => (
                <>
                  <Box key={id} sx={{
                    width: { xs: '100%', xl: '49%' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1, md: 2 },
                    border: '1px solid #63883B',
                    p: { xs: 1, lg: 2.5 },
                    borderRadius: '8px'
                  }}>
                    <img style={{ width: '94px', height: '94px', objectFit: 'cover', borderRadius: '12px' }} src="/insImg5.png" alt="" />
                    <Stack gap={1}>
                      <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>The lunch collective's Caesar salad</Typography>
                      <Typography sx={{ fontSize: '14px' }}>The lunch collective's Caesar salad with crispy bacon, a classic with our own twist.</Typography>
                      <Box sx={{ display: 'inline-flex', alignSelf: 'flex-end' }}>
                        <Box sx={{ padding: '6px 16px', mr: 2, borderRadius: '40px', fontSize: '14px', border: '1px solid gray' }}>
                          <Typography sx={{ fontSize: '14px' }}>$200.00</Typography>
                        </Box>
                        <IconButton onClick={() => handleProductDialogOpen(id)} sx={{
                          bgcolor: 'light.main'
                        }}>
                          <Add fontSize='small' />
                        </IconButton>
                      </Box>
                    </Stack>
                  </Box>
                  {/* product add dialog */}
                  {
                    selectedProductId === id && (
                      <CDialog openDialog={openProductAddDialog}>
                        <AddItem closeDialog={handleProductDialogClose} />
                      </CDialog>
                    )
                  }
                </>
              ))
            }
          </Stack>
        </Paper>

        <Paper sx={{ mt: 3, width: '100%' }} >
          <Typography sx={{
            bgcolor: '#52525B',
            padding: '12px 24px',
            color: '#fff',
            textAlign: 'center',
            borderRadius: '5px',
            mb: 2
          }}>Options</Typography>
          <Box sx={{
            width: { xs: '100%', sm: '100%' },
            px: 2,
            overflow: 'hidden'
          }}>
            <Carousel
              swipeable={true}
              showDots={false}
              arrows={false}
              rewindWithAnimation={true}
              customRightArrow={true}
              rewind={true}
              centerMode={true}
              responsive={responsive}
              pauseOnHover
              autoPlay={true}
              renderButtonGroupOutside={true}
              customButtonGroup={<ButtonGroup />}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all 1s"
              transitionDuration={1000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["mobile"]}
              deviceType={props.deviceType}
            >
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, id) => (
                  <>
                    <Box key={id} sx={{
                      width: { xs: '140px', md: '173px' },
                      height: '152px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      gap: 2,
                      p: 2.5,
                      mb: { xs: 2, md: 0 }
                    }}>
                      <img style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '12px',
                        position: 'absolute',
                        top: 0, zIndex: -1
                      }} src="/insImg5.png" alt="" />
                      <Stack sx={{
                        bgcolor: 'rgb(0,0,0,10'
                      }} gap={1}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#fff', textAlign: 'center' }}>The lunch collective's Caesar salad</Typography>
                        <Box sx={{ display: 'inline-flex', alignSelf: 'flex-end' }}>
                          <Box sx={{
                            py: { xs: '8px', md: '6px' },
                            px: { xs: '8px', md: '16px' },
                            mr: 1,
                            borderRadius: '40px',
                            bgcolor: '#fff',
                            fontSize: '14px',
                            border: '1px solid gray'
                          }}>
                            <Typography sx={{ fontSize: { xs: '12px', md: '14px' } }}>$200.00</Typography>
                          </Box>
                          <IconButton onClick={() => handleOptionProductDialogOpen(id)} sx={{
                            bgcolor: 'light.main',
                            ":hover": {
                              bgcolor: 'light.main'
                            }
                          }}>
                            <Add fontSize='small' />
                          </IconButton>
                        </Box>
                      </Stack>
                    </Box>
                    {
                      selectedOptionProductId === id && (
                        <CDialog openDialog={openOptionProductAddDialog}>
                          <AddItem closeDialog={handleOptionProductDialogClose} option={true} />
                        </CDialog>
                      )
                    }
                  </>
                ))
              }
            </Carousel>
          </Box>
        </Paper>
      </Box>
      <Box sx={{
        flex: 1
      }}>
        <Box sx={{
          bgcolor: 'light.main',
          p: 2, borderRadius: '8px', mb: 2
        }}>
          <Typography sx={{ fontSize: '17px', fontWeight: '600' }}>Selected Date</Typography>
          <Typography sx={{ fontSize: '16px', fontWeight: '400' }}>20 February 2024, Wednesday</Typography>
        </Box>
        <Box sx={{
          bgcolor: 'light.main',
          p: 2, borderRadius: '8px', mb: 2
        }}>
          <Typography sx={{ fontSize: '17px', fontWeight: '600' }}>Company Information</Typography>
          <Typography sx={{ fontSize: '16px', fontWeight: '400' }}>Provato Solutions AS</Typography>
        </Box>
        <Box sx={{
          bgcolor: 'light.main',
          p: 2, borderRadius: '8px', mb: 2
        }}>
          <Typography sx={{ fontSize: '17px', fontWeight: '600' }}>Address</Typography>
          <Typography sx={{ fontSize: '16px', fontWeight: '400' }}>1901 Thornridge Cir. Shiloh, Hawaii 81063</Typography>
        </Box>
        {
          SelectedItem
            ?
            <MiniCart/>
            :
            <Box sx={{
              p: 2, borderRadius: '8px', mb: 2,
              bgcolor: 'primary.main',
              color: '#fff',
              mt: 4,
              cursor: 'pointer'
            }}>
              <Typography sx={{ fontSize: '17px', fontWeight: '600' }}>Shopping Cart</Typography>
              <Typography sx={{ fontSize: '14px', fontWeight: '400' }}>Choose some of the delicious dishes from the list below 😋</Typography>
            </Box>
        }
      </Box>
    </Stack>
  )
}

export default MySide