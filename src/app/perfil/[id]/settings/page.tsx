import { SideNav } from '@/app/ui/perfil/[id]/settings/sidenav';
import React from 'react';

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
