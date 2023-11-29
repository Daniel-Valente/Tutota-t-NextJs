import React from 'react';
import Image from 'next/image';

export const Comment = () => {
    return (
        <div className='flex mt-3 ml-1 justify-between'>
            <div className="avatar">
                <div className="w-10 h-10 rounded-full ring ring-primary">
                    <Image
                        src='/images/cucei-mobile.png'
                        alt='avatar'
                        width={500}
                        height={500}
                    />
                </div>
            </div>

            <div className='bg-base-200 ml-2 rounded-xl'>
                <h2 className='ml-4 text-xs font-bold mr-2 mb-1 mt-2'>Carlos Daniel Valente Garcia</h2>
                <p className='ml-4 text-sm mr-2 mb-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A fugiat, quidem dolorum dolorem, totam vero, labore temporibus nulla placeat odit laborum! Sit cum ullam, vitae officiis nihil nam nulla inventore.</p>
            </div>
        </div>
    );
};
