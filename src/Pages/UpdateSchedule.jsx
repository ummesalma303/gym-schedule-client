import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateSchedule = () => {
    const schedule = useLoaderData()
    // console.log(data)
    const {_id,title,date,day, time}=schedule
    const handleUpdateSchedule= e => {
        e.preventDefault()
        const title = e.target.title.value
        const date = e.target.date.value
        const day = e.target.day.value
        const time = e.target.time.value
        const scheduleData = {
            title,
            date,
            day,
            time
        };
        // console.log(scheduleData)

        fetch(`https://gym-schedule-server-delta.vercel.app/schedule/${_id}`, {
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(scheduleData)
        })
            .then(res => res.json())
        .then(data=>{
            console.log(data)
            if (data.acknowledged) {
                alert("schedule successfully added")
            }
        })



    }
    return (
        <div className=' bg-[#F4F3F0] px-32 pt-7 pb-16'>
            <h2 className='text-center font-bold text-4xl mb-12'>Update Gym Schedule</h2>

            <form onSubmit={handleUpdateSchedule} className='grid grid-cols-2 gap-5 w-full'>
                <input type="text" className=' h-12 px-5' defaultValue={title} name='title' required/>
                <input type="date" className=' h-12 px-5' name='date' defaultValue={date} required/>
                
                <select className="input input-bordered " name="day" id="day" defaultValue={day} required>
                <option value="sunday">Sunday</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                </select>
                
                <input type="time" className=' h-12 px-5' defaultValue={time} name='time' required/>
                <button className='btn col-span-2 bg-pink-500 text-white' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default UpdateSchedule;