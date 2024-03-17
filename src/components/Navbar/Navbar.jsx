import React from 'react';
import { faCircleUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    return (
        <div className="justify-between navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[16px] lg:text-[18px] text-[#150B2BB3]">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-base md:text-2xl lg:text-[32px] font-bold">Recipe Calories</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[16px] lg:text-[18px] text-[#150B2BB3]">
                    <li><a>Home</a></li>
                    <li><a>Recipes</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
                <div className="flex gap-3 items-center px-3 py-1 border bg-[#150B2B0D] rounded-3xl w-2/3">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="Search" className='w-full focus:outline-none bg-transparent' />
                </div>
                <div className='bg-[#0BE58A] px-2 py-1 rounded-full hover:cursor-pointer'>
                    <FontAwesomeIcon icon={faCircleUser} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;