import { Box, Container, Stack, Tab, Tabs, Typography, styled, tabClasses, tabsClasses } from '@mui/material'
import React, { useState } from 'react'
import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';

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
  marginRight:'10px',
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
        <Box sx={{ p: 3 }}>
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

const CategoryTab = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Container maxWidth='lg' sx={{ my: { xs: 10, md: 15 } }}>
      {/* <Typography sx={{ fontSize: { xs: '22px', md: '32px' }, fontWeight: 600, textAlign: 'center', mb: 2 }}>Who are you?</Typography>
      <Typography sx={{ fontSize: { xs: '16px', md: '24px' }, fontWeight: 500, textAlign: 'center', mb: 6 }}>The lunch collective gives you the canteen right in your pocket</Typography> */}
      <Stack direction='row' sx={{
        mb: { xs: 3, md: 10 },
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

      <CustomTabPanel value={tabIndex} index={0}>
        1
      </CustomTabPanel>
      <CustomTabPanel value={tabIndex} index={1}>
        2
      </CustomTabPanel>
    </Container>
  )
}

export default CategoryTab