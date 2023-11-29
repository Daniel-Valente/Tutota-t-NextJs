'use client';

import Image from 'next/image';
import React from 'react';

export const CreatePost = ({ base }: { base: number }) => {
    return (
        <div className={`card card-compact bg-base-${ base } mt-5 w-11/12`}>
            <div className="card-body">
                <div className='flex justify-between'>
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <Image
                                src='/images/cucei-mobile.png'
                                alt='avatar'
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>

                    <input type="text" placeholder="Type here" className="input input-bordered ml-5 h-10 w-full" onClick={()=>document.getElementById('createPostModal').showModal()}/>
                </div>
            </div>
        </div>
    );
};
