import React from 'react';

const AddSchedule = () => {
    return (
        <div className=' bg-[#F4F3F0] p-32'>
            <h2>Add Gym Schedule</h2>

            <form action="" className='grid grid-cols-2 gap-5 w-full'>
                <input type="text" className=' h-12 px-5' placeholder='title' name='title'  />
                <input type="date" className=' h-12 px-5'  name='title'  />
                <input type="" className=' h-12 px-5' placeholder='title' name='title'  />
                <input type="time" className=' h-12 px-5' placeholder='title' name='title'  />
            </form>
        </div>
    );
};

export default AddSchedule;