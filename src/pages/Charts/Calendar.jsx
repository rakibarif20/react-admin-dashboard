import React from "react";
import { Header } from "../../components";
import {ScheduleComponent,Day,Week,WorkWeek,Month,Agenda,Inject,Resize,DragAndDrop} from '@syncfusion/ej2-react-schedule';
import {DatePickerComponent} from '@syncfusion/ej2-react-calendars';
import {scheduleData} from '../../data/dummy'
const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category='App' title='Calendar' />
      <ScheduleComponent height='700px'
      eventSettings={{dataSource: scheduleData}}
      selectedDate={new Date(2022, 9, 3)}
      >
        <Inject services={[Day,Week,WorkWeek,Month,Agenda,Resize,DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
};

export default Calendar;
