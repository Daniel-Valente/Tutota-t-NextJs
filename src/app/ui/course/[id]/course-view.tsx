import React from 'react'
import { Dashboard, PhotoLibrary } from '@mui/icons-material';

export const CourseView = () => {
    return (
        <>
            <ul className='menu menu-horizontal bg-base-100 mt-5 w-11/12 rounded-none'>
                <li>
                    <a className='btn btn-sm ml-2 rounded-3xl'><Dashboard sx={{ fontSize: 20 }} />
                        <p className="hidden lg:block">Publicaciones</p>
                    </a>
                </li>
                <li>
                    <a className='btn btn-sm ml-2 rounded-3xl'><PhotoLibrary sx={{ fontSize: 20 }} />
                        <p className="hidden lg:block">Fotos</p>
                    </a>
                </li>
            </ul>
        </>
    )
};
