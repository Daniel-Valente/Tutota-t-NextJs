import React from 'react';

export const SideNav = () => {
    return (
        <div className='ml-3 mt-3 mr-3 h-screen lg:h-[41rem]'>
            <div className='card border-2 shadow-xl card-compact mt-3'>
                <div className="card-body">
                    <h2 className="card-title">General</h2>
                </div>
            </div>
            <div className='card border-2 shadow-xl card-compact mt-3'>
                <div className="card-body">
                    <h2 className="card-title">Privacidad</h2>
                </div>
            </div>
            <div className='card border-2 shadow-xl card-compact mt-3'>
                <div className="card-body">
                    <h2 className="card-title">Seguridad</h2>
                </div>
            </div>
            <div className='card border-2 shadow-xl card-compact mt-3 block lg:hidden'>
                <div className="card-body">
                    <h2 className="card-title">Dark Mode</h2>
                </div>
            </div>
        </div>
    );
};
