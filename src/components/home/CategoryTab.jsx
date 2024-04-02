import { Box, Container, IconButton, Stack, Tab, Tabs, Typography, styled, tabClasses, tabsClasses } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import Slider from 'react-slick';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import CButton from '../../common/CButton/CButton';

const TabItem = styled(Tab)(({ theme }) => ({
  position: "relative",
  borderRadius: "8px",
  border: `1px solid ${theme.palette.primary.main}`,
  textAlign: "center",
  textTransform: 'none',
  transition: "all .5s",
  padding: "10px 15px",
  color: "#555555",
  height: "auto",
  marginRight: '10px',
  float: "none",
  fontSize: "14px",
  fontWeight: "500",
  [theme.breakpoints.up("md")]: {
    minWidth: 120,
  },
  [`&.${tabClasses.selected}`]: {
    color: "#FFFFFF",
    backgroundColor: theme.palette.primary.main,
    // boxShadow: "0 7px 10px -5px rgba(76, 175, 80, 0.4)",
  },
}));

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
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


const settings = {
  infinite: true,
  speed: 1000,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  lazyLoad: true,
  pauseOnHover: true,
  swipeToSlide: true,
  autoplay: true,
  // centerMode: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const CategoryTab = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Container maxWidth='lg' sx={{ my: { xs: 10, md: 15 } }}>
      <Stack direction='row' sx={{
        mb: 3,
        justifyContent: 'center',
      }}>
        <Tabs
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          value={tabIndex}
          onChange={(e, index) => setTabIndex(index)}
          sx={{
            width: "fit-content",
            [`& .${tabsClasses.indicator}`]: {
              display: "none",
            },
          }}
        >
          <TabItem disableRipple label={"Lunch boxes"} />
          <TabItem disableRipple label={"Hot food"} />
          <TabItem disableRipple label={"Season"} />
          <TabItem disableRipple label={"Something extra"} />
          <TabItem disableRipple label={"Catering"} />
        </Tabs>
      </Stack>
      {
        [1, 2, 3, 4, 5].map((item,id) => (
      <CustomTabPanel key={id} value={tabIndex} index={id}>
        <Stack>
          <Typography sx={{ fontSize: '32px', mb: 2, fontWeight: 600, textAlign: 'center' }}>Lunch boxes</Typography>
          <Typography sx={{ mb: 6, maxWidth: '727px', alignSelf: 'center', textAlign: 'center', fontSize: { xs: '14px', md: '16px' } }}>Our standard categories are fixed throughout the year, but the dish itself changes daily. This means that if you choose salad, you will receive a new salad every day!</Typography>
          <Stack direction='row' justifyContent='space-between' sx={{ mb: 4 }}>
            <Typography >*All prices are ex. VAT. Shipping price NOK 120 ex. VAT per delivery.</Typography>
            <Stack direction='row' sx={{ display: { xs: 'none', md: 'block' } }}>
              <CButton onClick={previous} variant='outlined' style={{ height: '40px', mr: 2, borderRadius: '50px', width: '90px' }}>
                <ArrowBack />
              </CButton>
              <CButton onClick={next} variant='outlined' style={{ height: '40px', borderRadius: '50px', width: '90px' }}>
                <ArrowForward />
              </CButton>
            </Stack>
          </Stack>
        </Stack>
        <Box>
          <Slider ref={sliderRef} {...settings}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Slider>
        </Box>
      </CustomTabPanel>
      ))
      }

      {/* <CustomTabPanel value={tabIndex} index={0}>
        <Stack>
          <Typography sx={{ fontSize: '32px', mb: 2, fontWeight: 600, textAlign: 'center' }}>Lunch boxes</Typography>
          <Typography sx={{ mb: 6, maxWidth: '727px', alignSelf: 'center', textAlign: 'center', fontSize: {xs:'14px',md:'16px'} }}>Our standard categories are fixed throughout the year, but the dish itself changes daily. This means that if you choose salad, you will receive a new salad every day!</Typography>
          <Stack direction='row' justifyContent='space-between' sx={{ mb: 4 }}>
            <Typography >*All prices are ex. VAT. Shipping price NOK 120 ex. VAT per delivery.</Typography>
            <Stack direction='row' sx={{display:{xs:'none',md:'block'}}}>
              <CButton onClick={previous} variant='outlined' style={{ height: '40px',mr:2, borderRadius: '50px', width: '90px' }}>
                <ArrowBack />
              </CButton>
              <CButton onClick={next} variant='outlined' style={{ height: '40px', borderRadius: '50px', width: '90px' }}>
                <ArrowForward />
              </CButton>
            </Stack>
          </Stack>
        </Stack>
        <Box >
          <Slider ref={sliderRef} {...settings}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Slider>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={tabIndex} index={1}>
        2
      </CustomTabPanel> */}
    </Container>
  )
}

export default CategoryTab