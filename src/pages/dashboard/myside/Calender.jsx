import React, { useState } from 'react';
import { format, addMonths, subMonths, isSameDay, isBefore, isAfter } from 'date-fns';
import { Box, Button, Collapse, IconButton, Stack, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';

const Calendar = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showAllDate, setShowAllDate] = useState(false)
  const theme = useTheme()

  const selectedDateList = selectedDates.map((date) => format(date, 'MMMM dd, yyyy'));

  console.log(selectedDateList)

  const handleDateClick = (date) => {
    if (date) {
      const isDateSelected = selectedDates.some((selectedDate) => isSameDay(selectedDate, date));
      if (isDateSelected) {
        setSelectedDates(selectedDates.filter((d) => !isSameDay(d, date)));
      } else {
        setSelectedDates([...selectedDates, date]);
      }
    }
  };

  const navigateMonth = (direction) => {
    setCurrentMonth((prevMonth) => {
      return direction === 'next' ? addMonths(prevMonth, 1) : subMonths(prevMonth, 1);
    });
  };

  const generateMonthDays = () => {
    const days = [];
    const today = new Date();
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const monthName = format(currentMonth, 'MMM');
  
    for (let date = new Date(firstDayOfMonth); date <= lastDayOfMonth; date.setDate(date.getDate() + 1)) {
      const isPast = isBefore(date, today) && !isSameDay(date, today);
      const weekDayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
      days.push({ date: new Date(date), weekDayName, isPast, monthName });
    }
    return days;
  };
  

  return (
    <Box sx={{
      px: {xs:1,md:5},
      py: 2,
      bgcolor: 'light.main',
      borderRadius: '12px',
      userSelect: 'none'
    }}>
      <Stack direction='row' justifyContent='space-between' mb={2}>
        <Stack direction='row' alignItems='center' gap={2}>
          <IconButton onClick={() => navigateMonth('prev')}><KeyboardDoubleArrowLeft /></IconButton>
          <Typography sx={{ fontSize: '20px' }}>{format(currentMonth, 'MMM yyyy')}</Typography>
          <IconButton onClick={() => navigateMonth('next')}><KeyboardDoubleArrowRight /></IconButton>
        </Stack>
        <Button onClick={() => setShowAllDate(p => !p)}>{showAllDate ? 'Hide All Month' : 'Show All Month'}</Button>
      </Stack>
      <Collapse in={showAllDate} collapsedSize={100}>
        <Stack direction='row' flexWrap='wrap' gap={1.5} justifyContent='center'>
          {generateMonthDays().map((day, index) => (
            <Stack onClick={() => handleDateClick(day.isPast ? null : day.date)} justifyContent='center' alignItems='center' sx={{
              width: '70px',
              height: '40px',
              borderRadius: '3px',
              border: `1px solid ${theme.palette.primary.main}`,
              cursor: day.isPast ? 'not-allowed' : 'pointer', 
              p: '18px',
              color: selectedDates.some((selectedDate) => isSameDay(selectedDate, day.date)) ? '#fff' : '#000',
              bgcolor: selectedDates.some((selectedDate) => isSameDay(selectedDate, day.date)) ? 'primary.main' :
                day.isPast ? '#E5E5E5' : '#fff',
            }} key={index}>
              <Typography sx={{ fontSize: '13px',lineHeight:'15px' }}>{day.weekDayName}</Typography>
              <Typography sx={{ fontSize: '14px', fontWeight: 600, lineHeight:'15px', textWrap: 'nowrap' }}>{day.date.getDate()} {day.monthName}</Typography>
            </Stack>
          ))}
        </Stack>
      </Collapse>
      {/* <div>
        <h3>Selected Dates:</h3>
        <ul>
        {selectedDates.map((date, index) => (
            <li key={index}>{format(date, 'MMMM dd, yyyy')}</li>
          ))}
        </ul>
      </div> */}
    </Box>
  );
};

export default Calendar;
