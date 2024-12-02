import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='py-5'>
            <ul className='flex justify-center space-x-5 *:btn'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/addSchedule'>Add Schedule</NavLink>
                <NavLink to='/allSchedule'>All Schedule</NavLink>
                {/* <NavLink to='/allSchedule'>All Schedule</NavLink> */}
            </ul>
        </nav>
    );
};

export default Navbar;