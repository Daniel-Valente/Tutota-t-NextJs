import React from 'react';

import { Post } from '@/app/ui/home/posts';
import { CreatePost } from '../ui/home/create-post';
import { Course } from '../ui/home/courses';
import { MoreButton } from '../ui/home/more-button';
import Image from 'next/image';
import { AttachFile, LocalFireDepartment } from '@mui/icons-material';

export default function Page() {
    return (
        <div className='flex flex-row'>
            <div className='lg:w-3/12 lg:block hidden'>
                <div className="card bg-base-100 shadow-xl mt-5 ml-5">
                    <div className="card-body">
                        <div className="flex">
                            <h2 className="card-title">Publicaciones por Carreras</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-6/12 w-full'>
                <div className='flex flex-col items-center justify-center'>
                    <CreatePost base={100} />

                    <Post base={100} />
                    <Post base={100} />
                    <Post base={100} />
                    <Post base={100} />
                    <Post base={100} />
                </div>
            </div>
            <div className='lg:w-3/12 lg:block hidden'>
                <div className="card bg-base-100 shadow-xl mt-5 mr-5">
                    <div className="card-body">
                        <div className="flex">
                            <h2 className="card-title">Novedades en las Tutorías</h2>
                            <MoreButton />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Course base={200} />
                            <Course base={200} />
                            <Course base={200} />
                            <Course base={200} />
                            <Course base={200} />
                        </div>
                    </div>
                </div>
            </div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
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
                        <textarea className="textarea textarea-ghost w-full rounded-none h-40" placeholder="Bio"></textarea>
                    </div>
                    <Image 
                        src='/images/Imagen1.png'
                        alt='test'
                        width={ 500 }
                        height={ 500 }
                        className='w-full mt-3 h-40 hidden'
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
        </div>
    );
};
