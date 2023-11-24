import React from 'react';
import Image from 'next/image';

import { LikeButton } from './post/like-button';
import { SendButton } from './post/send-button';
import { CommentButton } from './post/comment-button';
import { MoreButton } from './more-button';

export const Post = ({ base }: { base: number }) => {
    return (
        <div className={`card card-compact bg-base-${base} shadow-xl mt-5 w-11/12`}>
            <div className="card-body">
                <div className=' flex justify-between'>
                    <div className="avatar">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <Image
                                src='/images/cucei-mobile.png'
                                alt='avatar'
                                width={500}
                                height={500}
                            />
                        </div>
                        
                        <h2 className='card-title ml-4'>Test</h2>
                    </div>
                    <MoreButton/>
                </div>
                
            </div>
            <figure >
                <Image
                    src='/images/Imagen1.png'
                    alt='test'
                    width={700}
                    height={300}
                />
            </figure>
            <div className='card-body'>
                <div className='flex justify-between'>
                    <LikeButton />
                    <CommentButton />
                    
                </div>
                <h2 className='font-bold'>Test</h2>
                <p><span className='text-secondary'>My Company, Inc</span> If a dog chews shoes whose shoes does he choose?</p>
                <div className='border-b-2 mt-4 mb-1 border-base-300'></div>

                <div className='flex mt-2 justify-between'>
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full ring">
                            <Image
                                src='/images/cucei-mobile.png'
                                alt='avatar'
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>

                    <input type="text" placeholder="Type here" className="input input-bordered ml-5 h-10 w-full mr-5" />
                    <SendButton />
                </div>
            </div>
        </div>
    );
};
