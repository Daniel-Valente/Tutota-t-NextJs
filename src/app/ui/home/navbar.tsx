import { ChatBubble, Notifications, Person, Search } from '@mui/icons-material';
import { Theme } from './navbar/theme';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                        <li><a>Profile</a></li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Tutorate</a>
            </div>
            <div className="navbar-end">
                <div className='block lg:hidden'>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <Search sx={{ fontSize: 20 }} />
                        </div>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <Notifications sx={{ fontSize: 20 }} />
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <ChatBubble sx={{ fontSize: 20 }} />
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
            <div className="hidden lg:flex flex-none gap-2">
                <Theme />
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className='dropdown dropdown-end'>
                    <label tabIndex={0} className='btn btn-ghost btn-circle'>
                        <div className="rounded-full indicator">
                            <ChatBubble sx={{ fontSize: 20 }} />
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52">
                        <li><a>wsd</a></li>
                        <li><a>wsd</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                <div className='dropdown dropdown-end'>
                    <label tabIndex={0} className='btn btn-ghost btn-circle'>
                        <div className="rounded-full indicator">
                            <Notifications sx={{ fontSize: 20 }} />
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52">
                        <li><a>wsd</a></li>
                        <li><a>wsd</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Person sx={{ fontSize: 40 }} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;