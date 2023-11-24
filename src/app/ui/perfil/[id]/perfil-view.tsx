import { Bookmark, Dashboard, People } from '@mui/icons-material';
import React from 'react';

export const PerfilView = () => {
    return (
        <>
            <ul className='menu menu-horizontal bg-base-100 mt-5 w-11/12 rounded-none'>
                <li>
                    <a className='btn btn-sm ml-2 rounded-3xl'><Dashboard sx={{ fontSize: 20 }} />
                        <p className="hidden lg:block">Publicaciones</p>
                    </a>
                </li>
                <li>
                    <a className='btn btn-sm ml-2 rounded-3xl'><People sx={{ fontSize: 20 }} />
                        <p className="hidden lg:block">Seguidores</p>
                    </a>
                </li>
                <li>
                    <a className='btn btn-sm ml-2 rounded-3xl'><Bookmark sx={{ fontSize: 20 }} />
                        <p className="hidden lg:block">Mi Colección</p>
                    </a>
                </li>
            </ul>
        </>
    )
};
