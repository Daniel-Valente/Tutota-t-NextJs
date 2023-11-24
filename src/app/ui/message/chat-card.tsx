import React from 'react';
import Image from 'next/image';

import { Done, DoneAll } from '@mui/icons-material';

export const ChatCard = () => {
    return (
        <div className='card card-compact bg-base-300 hover:bg-base-100'>
            <div className='flex'>
                <div className="avatar offline w-14 m-2">
                    <div className="rounded-full">
                        <Image
                            src='/images/Imagen1.png'
                            alt='test'
                            width={500}
                            height={500}
                            className=''
                        />
                    </div>
                </div>
                <div className='flex-col mt-1'>
                    <div className='flex'>
                        <p className='font-bold'>cdanielvalente </p>
                    </div>
                    <div className='flex flex-row'>
                        <Done sx={{ fontSize: 20 }} className='mr-1 text-neutral'/>
                        {/* <DoneAll sx={{ fontSize: 20 }} className='mr-1 text-accent' /> */}
                        <p className='text-sm font-extralight'>hola</p>
                    </div>
                    <p className='text-xs font-extralight mt-1 ml-56'>01:15 PM</p>
                </div>
            </div>

        </div>
    );
};
