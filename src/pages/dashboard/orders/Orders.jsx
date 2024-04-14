import { BorderColor, Search } from '@mui/icons-material'
import { Box, IconButton, Input, Stack, TextField, Typography, useMediaQuery } from '@mui/material'
import DataTable from '../../../components/dashboard/DataTable'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const rows = [
  { orderDate: 'Feb 09', id: '987654', orderName: 'The lunch collective"s Caesar salad', price: '200.00', quantity: '05', paymentInfo: '**********3478', price: '$1000', status: 'Action', deliveryDate: 'Feb 09, 2022' },
  { orderDate: 'Feb 09', id: '987654', orderName: 'The lunch collective"s Caesar salad', price: '200.00', quantity: '05', paymentInfo: '**********3478', price: '$1000', status: 'Action', deliveryDate: 'Feb 09, 2022' },
  { orderDate: 'Feb 09', id: '987654', orderName: 'The lunch collective"s Caesar salad', price: '200.00', quantity: '05', paymentInfo: '**********3478', price: '$1000', status: 'Action', deliveryDate: 'Feb 09, 2022' },
  { orderDate: 'Feb 09', id: '987654', orderName: 'The lunch collective"s Caesar salad', price: '200.00', quantity: '05', paymentInfo: '**********3478', price: '$1000', status: 'Action', deliveryDate: 'Feb 09, 2022' },
  { orderDate: 'Feb 09', id: '987654', orderName: 'The lunch collective"s Caesar salad', price: '200.00', quantity: '05', paymentInfo: '**********3478', price: '$1000', status: 'Action', deliveryDate: 'Feb 09, 2022' },

];


const Orders = () => {
  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});

  const navigate = useNavigate()
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  function handleEdit(row) {
    navigate(`/dashboard/orders/edit/${row.id}`)
  }
  function OrderIdClick(row) {
    navigate(`/dashboard/orders/details/${row.id}`)
  }
  const columns = [
    {
      field: 'orderDate', headerName: 'Order Date', flex: isMobile ? .2 : .3, renderCell: (params) => {
        return (
          <Stack sx={{height:'100%'}} direction='row' alignItems='center'>
            <Typography sx={{fontSize:{xs:'12px',md:'16px'}}}>{params.row.orderDate}</Typography>
          </Stack>
        )
      }
    },
    {
      field: 'id', headerName: 'Order ID', flex: .4, renderCell: (params) => {
        return (
          <Stack sx={{
            cursor: 'pointer',
            color: 'blue'
          }} onClick={() => OrderIdClick(params.row)} direction='row' alignItems='center'>
            <Box>#</Box>
            <Typography sx={{fontSize:{xs:'12px',md:'16px'}}}>{params.id}</Typography>
          </Stack>
        )
      }
    },
    {
      field: 'orderDetails', headerName: 'Order Details', flex: isMobile ? .7 : 1, renderCell: (params) => {
        const { row } = params;
        return (
          <Stack >
            <Typography sx={{fontSize:{xs:'12px',md:'16px'}}}>{row.orderName}</Typography>
            <Box sx={{ display: 'inline-flex' }}>
              <Typography sx={{fontSize:{xs:'12px',md:'14px'}}}>{row.price}</Typography>
              <Typography sx={{fontSize:{xs:'12px',md:'14px'}}}>x{row.quantity}</Typography>
            </Box>
          </Stack>
        )
      }
    },
    { field: 'paymentInfo', headerName: 'Payment Info', flex: .5 },
    { field: 'price', headerName: 'Price', flex: isMobile ? .3 : .5, renderCell:(params)=> (
      <Stack sx={{height:'100%'}} direction='row' alignItems='center'>
        <Typography sx={{fontSize:{xs:'12px',md:'16px'}}}>{params.row.price}</Typography>
      </Stack>
    ) },
    {
      field: 'status', headerName: 'Status', flex: .5, renderCell: (params) => (
        <Box sx={{
          display: 'inline-flex',
          padding: '4px 12px',
          bgcolor: '#E9EDFF',
          borderRadius: '4px'
        }}>
          <Typography>Action</Typography>
        </Box>
      ),
    },
    { field: 'deliveryDate', headerName: 'Delivery Date', flex: .5 },
    {
      field: 'action', headerName: 'Action', flex: isMobile ? .2 : .5, renderCell: (params) => {
        return (
          <IconButton sx={{
            bgcolor: 'light.main',
            borderRadius: '5px',
            width: {xs:'30px',md:'40px'},
            height: {xs:'30px',md:'40px'},
          }} onClick={() => handleEdit(params.row)}>
            <BorderColor fontSize='small' />
          </IconButton>
        )
      },
    },
  ];

  useEffect(() => {
    setColumnVisibilityModel({
      paymentInfo: isMobile ? false : true,
      status: isMobile ? false : true,
      deliveryDate: isMobile ? false : true,
    })
  }, [isMobile])

  return (
    <Box maxWidth='lg'>
      <Stack direction='row' justifyContent='space-between'>
        <Typography sx={{ fontSize: { xs: '18px', lg: '24px' }, fontWeight: 600 }}>Order History</Typography>
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
          <Input fullWidth disableUnderline placeholder='Search Order Id' />
          <IconButton><Search /></IconButton>
        </Box>
      </Stack>
      <Box mt={3}>
        <DataTable
          columns={columns}
          rows={rows}
          columnVisibilityModel={columnVisibilityModel}
        />
      </Box>
    </Box>
  )
}

export default Orders