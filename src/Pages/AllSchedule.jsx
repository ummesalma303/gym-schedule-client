import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ScheduleTable from '../components/ScheduleTable';

const AllSchedule = () => {
  const data= useLoaderData()
  const [schedules,setSchedules]=useState(data)
    return (
        <div className='pb-16'>
          <div className="text-center py-4">
          <input type="text" placeholder='Search...' className='border-2 w-1/2 px-4 py-2 rounded-lg'/>

          </div>
           <div className="overflow-x-auto px-24">
  <table className="table ">
    {/* head */}
    <thead>
      <tr>
        <th>Number</th>
        <th>Title</th>
        <th>Date</th>
        <th>Day</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
    {
        schedules.map((schedule,idx)=><ScheduleTable key={idx} schedule={schedule} idx={idx} setSchedules={setSchedules} schedules={schedules}></ScheduleTable>)
      }
    </tbody>
   
  </table>
</div> 
        </div>
    );
};

export default AllSchedule;