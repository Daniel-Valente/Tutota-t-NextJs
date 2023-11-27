import { AccountCircle, ChatBubble, Logout, Notifications, Person, Search, Settings } from '@mui/icons-material';
import { Theme } from './navbar/theme';

const Navbar = () => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2"><a className="btn btn-ghost text-xl">Tutorate</a></div>
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
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-52">
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
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-52">
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
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-52">
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
            </div>

            <div className="drawer-side z-[1]">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    <li>
                        <a>
                            <AccountCircle sx={{ fontSize: 20 }} />
                            <div className='flex justify-between'>
                                Profile
                                <span className="badge">New</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <Settings sx={{ fontSize: 20 }} />
                            Settings
                        </a>
                    </li>
                    <li className="mt-auto">
                        <a>
                            <Logout sx={{ fontSize: 20 }} />
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;