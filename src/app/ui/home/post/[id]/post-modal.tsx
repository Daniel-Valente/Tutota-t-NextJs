import React from 'react';
import Image from 'next/image';

import { Comment } from './comment';
import { NewComment } from './new-comment';

export const PostModal = () => {
    return (
        <dialog id='postModal' className='modal modal-bottom sm:modal-middle'>
            <div className='modal-box lg:w-11/12 lg:max-w-5xl lg:flex lg:justify-between lg:gap-1'>
                <form className='hidden lg:block' method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className='w-3/6 h-[38rem] hidden lg:block'>
                    <Image
                        src='/images/Imagen1.png'
                        alt='test'
                        width={500}
                        height={500}
                        className=':w-full h-full absolute top-0 left-0'
                    />
                </div>
                <div className='lg:w-3/6'>
                    <div className='hidden lg:block'>
                        <div className="avatar">
                            <div className="w-14 rounded-full ring ring-secondary">
                                <Image
                                    src='/images/cucei-mobile.png'
                                    alt='avatar'
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <h2 className='card-title ml-4'>Carlos Daniel Valente Garcia</h2>
                        </div>
                        <div className='border-b-2 mt-2 mb-2 border-base-300'></div>
                        <p className='overflow-y-auto h-28 ml-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti aut, beatae, a alias dolorum excepturi explicabo ducimus impedit, aliquid natus iusto! Iste mollitia dolorum fuga quod doloremque velit ratione quam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati assumenda laborum fugit cum, perspiciatis officia possimus non earum iure iusto cumque, id omnis quae et quibusdam voluptatibus ullam praesentium error!</p>
                    </div>


                    <div className='overflow-y-auto h-[45rem] lg:h-[21rem] lg:mt-6'>
                        <Comment />
                    </div>

                    <div className='mt-auto'>
                        <div className='border-b-2 mt-4 mb-2 border-base-300'></div>
                        <NewComment />
                    </div>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};
