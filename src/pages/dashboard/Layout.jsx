/* eslint-disable react/prop-types */
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';
import { CategoryOutlined, DoubleArrow, MailOutline, NotificationsNone, PeopleAltOutlined, Search, SettingsOutlined, ViewStreamOutlined } from '@mui/icons-material';
import { Avatar, Badge, InputAdornment, Stack, TextField, styled } from '@mui/material';

const drawerWidth = 264;

const ListBtn = ({ style, text, icon }) => {
  return (
    <Box sx={{
      display: 'inline-flex',
      padding: '8px 12px',
      borderRadius: '4px',
      color: 'gray',
      mb: 1,
      cursor:'pointer',
      ...style
    }}>
      {icon}
      <Typography sx={{
        fontSize:'16px',
        fontWeight:500,ml:1
      }}>{text}</Typography>
    </Box>
  )
}

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'center', mt: 2
      }}>
        <Box sx={{
          width: { xs: '96px', md: '180px' }
        }}>
          <img style={{ width: '100%' }} src="/Logo.svg" alt="" />
        </Box>
      </Toolbar>
      {/* <Divider /> */}
      <Typography sx={{
        // width: '100%',
        padding: '16px 12px',
        color: '#fff',
        bgcolor: 'primary.main',
        borderRadius: '8px',
        fontSize: '14px',
        textAlign: 'center',
        m: 3
      }}>
        Deal: Provato Solutions AS
      </Typography>
      <Stack>
        <Typography sx={{
          color: '#C2C2C2',
          textTransform: 'uppercase',
          fontSize: '14px', mb: 2, mt: 2
        }}>Jacqueline Hellestøl</Typography>
        <ListBtn icon={<DoubleArrow />} text='My Side' style={{ bgcolor: 'light.main' }} />
        <ListBtn icon={<PeopleAltOutlined />} text='Manage Staff' style={{}} />
        <Typography sx={{
          color: '#C2C2C2',
          textTransform: 'uppercase',
          fontSize: '14px', my: 2
        }}>Company</Typography>
        <ListBtn icon={<CategoryOutlined />} text='Products' style={{}} />
        <ListBtn icon={<ViewStreamOutlined />} text='Orders' style={{}} />
        <ListBtn icon={<SettingsOutlined />} text='Setting' style={{}} />
      </Stack>

      {/* <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
              </ListItemIcon>
              <ListItemText primary={'text'} />
              </ListItemButton>
        </ListItem>
      </List> */}
    </Box>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        color='white'
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <TextField sx={{
            mr: { xs: 0, sm: 2, md: 20 }
          }}
            size='small'
            fullWidth
            placeholder='Type to search'
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{
                    display: { xs: 'none', md: 'block' }
                  }} />
                </InputAdornment>
              )
            }}
          />
          <Box sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailOutline />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsNone />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar />
            </IconButton>
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;