import React from "react";
import { FaCheck } from "react-icons/fa";
import { IoCheckmarkDoneSharp, IoDocumentText } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ScheduleTable = ({ schedule, idx, schedules, setSchedules }) => {
//   const isCompleted = false;

  const { _id, title, date, day, time,isCompleted } = schedule;
// delete feature
  const deleteSchedule = (id) => {
    // console.log(id)
    fetch(`https://gym-schedule-server-delta.vercel.app/schedule/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("schedule successfully added");
        }
        const remaining = schedules.filter(
          (newSchedule) => id !== newSchedule._id
        );
        setSchedules(remaining);
      });
  };

// is complete feature



  const handleComplete=(id)=>{
    fetch(`https://gym-schedule-server-delta.vercel.app/status/${id}`, {
        method:"PATCH",
    })
        .then(res => res.json())
    .then(data=>{
        console.log(data)
        
        const newData = schedules.map(check=>check._id === id?{...schedule,isCompleted:true}:schedule)
        setSchedules(newData)
    })

  }
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{title}</td>
      <td>{date}</td>
      <td>{day}</td>
      <td>{time}</td>
      <td>
        <button
          onClick={() => deleteSchedule(_id)}
          className="btn bg-pink-500 text-white"
        >
          <MdDelete />
        </button>
        <NavLink to={`/schedule/${_id}`}>
          <button className="btn bg-pink-500 text-white">
            <IoDocumentText />
          </button>
        </NavLink>
        <button onClick={()=>handleComplete(_id)} className="btn bg-pink-500 text-white">
          {isCompleted ? <IoCheckmarkDoneSharp /> : <FaCheck />}
        </button>
      </td>
    </tr>
  );
};

export default ScheduleTable;
