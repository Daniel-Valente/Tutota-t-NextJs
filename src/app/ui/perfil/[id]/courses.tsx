import React from 'react';
import Image from 'next/image';
import { MoreHoriz } from '@mui/icons-material';

export const Course = () => {
    return (
        <div className='card card-compact bg-base-200 mt-3'>
            <div className="card-body">
                <div className='flex justify-between'>
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <Image
                                src='/images/Imagen1.png'
                                alt='avatar'
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <p className='font-bold text-secondary ml-4 mt-3'>Mate Fácil, Álgebra lineal</p>
                    <button className="btn btn-ghost btn-square ml-1 btn-xs">
                        <MoreHoriz sx={{ fontSize: 20 }} />
                    </button>
                </div>
            </div>
        </div>
    );
};
