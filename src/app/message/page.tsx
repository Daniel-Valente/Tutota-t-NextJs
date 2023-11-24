import React from 'react';
import { SideNav } from '../ui/message/sidenav';

export default function Page() {
    return (
        <>
            <div className='block lg:hidden'>
                <SideNav />
            </div>
            <div className='hidden lg:block'>
                
            </div>
        </>
    );
};
