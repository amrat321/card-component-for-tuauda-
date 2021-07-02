import React from 'react';
import './app.css';
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';

function Calender() {
  const dateValue = new Date(new Date().getFullYear(), new Date().getMonth(), 10);
  const minDate = new Date(new Date().getFullYear(), new Date().getMonth(), 6);
  const maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), 25);
  return (
    <CalendarComponent 
    ></CalendarComponent>
  );
}

export default Calender;