import { BorderColor, BorderColorOutlined, Close, Search } from '@mui/icons-material'
import { Box, Button, DialogActions, IconButton, Input, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DataTable from '../../../components/dashboard/DataTable'
import CDialog from '../../../common/dialog/CDialog';
import AddStaff from './AddStaff';
import EditStaff from './EditStaff';


const rows = [
  { id: '#89012300', name: 'Brooklyn Simmons', email: 'jackson.graham@.com', phone: '(603) 555-0123', join: 'December 2, 2018' },
  { id: '#89012301', name: 'Emma Thompson', email: 'emma.thompson@.com', phone: '(603) 555-1234', join: 'January 10, 2019' },
  { id: '#89012302', name: 'James Smith', email: 'james.smith@.com', phone: '(603) 555-2345', join: 'February 20, 2019' },
  { id: '#89012303', name: 'Sophia Johnson', email: 'sophia.johnson@.com', phone: '(603) 555-3456', join: 'March 15, 2019' },
  { id: '#89012304', name: 'Michael Williams', email: 'michael.williams@.com', phone: '(603) 555-4567', join: 'April 5, 2019' },
  { id: '#89012305', name: 'Olivia Brown', email: 'olivia.brown@.com', phone: '(603) 555-5678', join: 'May 18, 2019' },
  { id: '#89012306', name: 'William Jones', email: 'william.jones@.com', phone: '(603) 555-6789', join: 'June 30, 2019' },
  { id: '#89012307', name: 'Ava Garcia', email: 'ava.garcia@.com', phone: '(603) 555-7890', join: 'July 9, 2019' },
  { id: '#89012308', name: 'Alexander Martinez', email: 'alexander.martinez@.com', phone: '(603) 555-8901', join: 'August 14, 2019' },

];


const ManageStaff = () => {
  const [addStaffDialogOpen, setAddStaffDilogOpen] = useState(false);
  const [editStaffDialogOpen, setEditStaffDilogOpen] = useState(false);
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false);
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});


  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

  useEffect(() => {
   setColumnVisibilityModel({
    email: isMobile ? false : true,
    phone: isMobile ? false : true,
    join: isMobile ? false : true,
   })
  }, [isMobile])


  function handleEdit(row) {
    setEditStaffDilogOpen(true)
    console.log(row)
  }
  function handleRemove(row) {
    setRemoveDialogOpen(true)
  }

  const columns = [
    { field: 'id', headerName: 'Staff ID', flex: 1 },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1
    },
    {
      field: 'join',
      headerName: 'Joining Date',
      flex: 1
    },
    {
      field: 'action',
      headerName: 'Action',
      flex:1,
      renderCell: (params) => (
        <Stack sx={{height:'100%'}} direction='row' gap={2} alignItems='center'>
          <IconButton sx={{
            bgcolor: 'light.main',
            borderRadius: '5px',
            width: '40px',
            height: '40px',
          }} onClick={() => handleEdit(params.row)}>
            <BorderColor fontSize='small' />
          </IconButton>
          <IconButton sx={{
            border: '1px solid lightgray',
            borderRadius: '5px',
            width: '40px',
            height: '40px',
          }} onClick={() => handleRemove(params.row)}>
            <Close fontSize='small' />
          </IconButton>
        </Stack>
      ),
    },
  ];


  return (
    <Box maxWidth='lg'>
      <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>Manage Staff</Typography>
      <Stack direction='row' justifyContent='space-between' gap={2} sx={{
        p: { xs: .5, lg: 3 },
        mb: 4
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '480px',
          bgcolor: '#fff',
          width: '100%',
          border: '1px solid lightgray',
          borderRadius: '4px',
          pl: 2
        }}>
          <Input fullWidth disableUnderline placeholder='Search Staff' />
          <IconButton><Search /></IconButton>
        </Box>
        <Button onClick={() => setAddStaffDilogOpen(true)} variant='contained' sx={{ textWrap: 'nowrap' }}>Add Staff</Button>
      </Stack>
      {/* Add Staff */}
      <CDialog openDialog={addStaffDialogOpen} >
        <AddStaff closeDialog={() => setAddStaffDilogOpen(false)} />
      </CDialog>
      {/* edit staff */}
      <CDialog openDialog={editStaffDialogOpen} >
        <EditStaff closeDialog={() => setEditStaffDilogOpen(false)} />
      </CDialog>
      {/* remove staff */}
      <CDialog openDialog={removeDialogOpen} closeDialog={() => setRemoveDialogOpen(false)} >
        <Typography variant='h5'>Confirm Remove?</Typography>
        <DialogActions>
          <Button variant='outlined' onClick={() => setRemoveDialogOpen(false)}>Cancel</Button>
          <Button variant='contained'>Confirm</Button>
        </DialogActions>
      </CDialog>
      <Box>
        <DataTable
          rows={rows}
          columns={columns}
          columnVisibilityModel={columnVisibilityModel}
        />
      </Box>
    </Box>
  )
}

export default ManageStaff