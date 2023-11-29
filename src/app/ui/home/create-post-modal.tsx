import React from 'react';
import Image from 'next/image';

import { AttachFile } from '@mui/icons-material';

export const CreatePostModal = () => {
    return (
        <dialog id="createPostModal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box w-full">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className='flex justify-between gap-3 mt-5'>
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                            <Image
                                src='/images/cucei-mobile.png'
                                alt='avatar'
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                    <textarea className="textarea textarea-ghost w-full rounded-none h-40 resize-none" placeholder="Bio"></textarea>
                </div>
                <Image
                    src='/images/Imagen1.png'
                    alt='test'
                    width={500}
                    height={500}
                    className='w-full mt-3 h-40 opacity-25 hidden'
                />
                <div className="divider"></div>
                <div className='flex items-center justify-between'>
                    <div className='flex-row'>
                        <AttachFile sx={{ fontSize: 20 }} />
                    </div>
                    <progress className="progress w-full ml-2 mr-2 hidden"></progress>
                    <button className='btn btn-accent btn-sm'>Publicar</button>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};
