import { Box, IconButton, Paper, Stack, Tab, Tabs, Typography, styled, tabClasses, tabsClasses } from '@mui/material'
import React, { useState } from 'react'
import MiniCart from '../../../components/dashboard/MiniCart';
import { useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import { GET_ALL_CATEGORY } from '../../../graphql/query';
import ProductCard from '../../../components/home/ProductCard';
import Loader from '../../../common/loader/Index';
import { Add } from '@mui/icons-material';
import CDialog from '../../../common/dialog/CDialog';
import AddItem from '../../../components/dashboard/AddItem';

const TabItem = styled(Tab)(({ theme }) => ({
  position: "relative",
  borderRadius: "4px",
  textAlign: "center",
  textTransform: 'none',
  transition: "all .5s",
  padding: "5px 10px",
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
    backgroundColor: '#fff',
    border: '1px solid gray'
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

const tabName = [
  'All', 'Brekfast', 'Lunch', 'Dinner', 'Option'
]

const Products = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [allCategorys, setAllCategorys] = useState([]);
  const [openProductAddDialog, setOpenProductAddDialog] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProductDialogOpen = (id) => {
    setSelectedProductId(id)
    setOpenProductAddDialog(true);
  };
  const handleProductDialogClose = () => {
    setOpenProductAddDialog(false);
  };

  const { loading, error } = useQuery(GET_ALL_CATEGORY, {
    onCompleted: (data) => {
      const res = data?.categories?.edges
      setAllCategorys(res)
    },
  });
  const SelectedItem = true
  return (
    <Stack maxWidth='lg' mb={5} direction={{ xs: 'column', lg: 'row' }} gap={3}>
      <Paper sx={{
        width: { xs: '100%', lg: '70%' },
        boxShadow: {
          xs: 'none', // No elevation for extra small screens
          lg: 2,      // Elevation level 4 for large screens
        }
      }}>
        <Typography sx={{fontSize: '18px',fontWeight:600,m:2}}>Product Details</Typography>
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
              width: "100%",
              bgcolor: 'light.main',
              py: 2,
              [`& .${tabsClasses.indicator}`]: {
                display: "none",
              },
            }}
          >
            {
              loading ? <Loader /> : error ? <h4>Something went wrong!</h4> :
                tabName.map((item) => (
                  <TabItem key={item} disableRipple label={item} />
                ))
            }
          </Tabs>
        </Stack>
        {
          loading ? <Loader /> : error ? <h4>Something went wrong!</h4> :
            [1, 2, 3, 4, 5].map((item, id) => (
              <CustomTabPanel key={id} value={tabIndex} index={id}>
                <Stack sx={{
                  px: {xs:0,lg:3},
                  maxHeight: {xs: '50vh',lg:'70vh'},
                  overflowY: 'auto'
                }} gap={2}>
                  {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((data, id) => (
                      <>
                        <Box key={id} sx={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          gap: { xs: 1, md: 2 },
                          bgcolor: 'light.main',
                          p: { xs: 1, lg: 2.5 },
                          borderRadius: '8px'
                        }}>
                          <img style={{ width: '238px', height: '148px', objectFit: 'cover', borderRadius: '4px' }} src="/insImg5.png" alt="" />
                          <Stack gap={1}>
                            <Typography sx={{ fontSize: {xs:'14px',lg:'18px'}, fontWeight: '600' }}>The lunch collective's Caesar salad</Typography>
                            <Typography sx={{ fontSize: {xs:'12px',md:'14px'} }}>The lunch collective's Caesar salad with crispy bacon, a classic with our own twist.</Typography>
                            <Box sx={{ display: 'inline-flex', alignSelf: 'flex-end', mt: 1 }}>
                              <Box sx={{ padding: '6px 16px', mr: 2, borderRadius: '40px', fontSize: '14px', border: '1px solid gray' }}>
                                <Typography sx={{ fontSize: '14px' }}>$200.00</Typography>
                              </Box>
                              <IconButton
                                onClick={() => handleProductDialogOpen(id)} 
                                sx={{
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
              </CustomTabPanel>
            ))
        }
      </Paper>

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
            <MiniCart path='/dashboard/products/cart' />
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

export default Products