import React from 'react';

const AddSchedule = () => {
    const handleAddSchedule = e => {
        e.preventDefault()
        const title = e.target.title.value
        const date = e.target.date.value
        const day = e.target.day.value
        const time = e.target.time.value
        const scheduleData = {
            title,
            date,
            day,
            time,
            isCompleted:false
        };
        // console.log(scheduleData)

        fetch('https://gym-schedule-server-delta.vercel.app/schedule', {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(scheduleData)
        })
            .then(res => res.json())
        .then(data=>{
            // console.log(data)
            if (data.acknowledged) {
                alert("schedule successfully added")
            }
        })



    }
    return (
        <div className=' bg-[#F4F3F0] px-32 pt-7 pb-16'>
            <h2 className='text-center font-bold text-4xl mb-12'>Add Gym Schedule</h2>

            <form onSubmit={handleAddSchedule} className='grid grid-cols-2 gap-5 w-full'>
                <input type="text" className=' h-12 px-5' placeholder='title' name='title' required/>
                <input type="date" className=' h-12 px-5' name='date' required/>
                
                <select className="input input-bordered " name="day" id="day" required>
                <option value="sunday">Sunday</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                </select>
                
                <input type="time" className=' h-12 px-5' placeholder='title' name='time' required/>
                <button className='btn col-span-2 bg-pink-500 text-white' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddSchedule;