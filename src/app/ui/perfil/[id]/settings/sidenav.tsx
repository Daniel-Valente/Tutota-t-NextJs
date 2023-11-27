import { AccountCircle, DarkMode, Lock, Security } from '@mui/icons-material';
import React from 'react';

export const SideNav = () => {
    return (
        <div className='ml-3 mt-3 mr-3 h-screen lg:h-[41rem]'>
            <div className='card card-compact mt-3 btn hover:btn-primary'>
                <div className="card-body">
                    <h2 className="card-title text-left">
                        <AccountCircle sx={{ fontSize: 20 }}/>
                        General
                    </h2>
                </div>
            </div>
            <div className='card card-compact mt-3 btn hover:btn-primary'>
                <div className="card-body">
                    <h2 className="card-title text-left">
                        <Lock sx={{ fontSize: 20 }}/>
                        Privacidad
                    </h2>
                </div>
            </div>
            <div className='card card-compact mt-3 btn hover:btn-primary'>
                <div className="card-body">
                    <h2 className="card-title text-left">
                        <Security sx={{ fontSize: 20 }}/>
                        Seguridad
                    </h2>
                </div>
            </div>
            <div className=' block lg:hidden'>
                <div className='card card-compact mt-3 btn hover:btn-primary'>
                    <div className="card-body">
                        <h2 className="card-title text-left">
                            <DarkMode sx={{ fontSize: 20 }}/>
                            Dark Mode
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
