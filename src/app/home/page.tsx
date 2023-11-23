import React from 'react';
import { Post } from '@/app/ui/home/posts';
import { CreatePost } from '../ui/home/create-post';
import { MoreHoriz } from '@mui/icons-material';
import { Course } from '../ui/home/navbar/courses';

export default function Page() {
    return (
        <div className='flex flex-row'>
            <div className='lg:w-3/12 lg:block hidden'>
                <div className="card bg-base-200 shadow-xl mt-5 ml-5">
                    <div className="card-body">
                        <div className="flex">
                            <h2 className="card-title">Publicaciones por Carreras</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-6/12 w-full'>
                <div className='flex flex-col items-center justify-center'>
                    <CreatePost base={200} />

                    <Post base={200} />
                    <Post base={200} />
                    <Post base={200} />
                    <Post base={200} />
                    <Post base={200} />
                </div>
            </div>
            <div className='lg:w-3/12 lg:block hidden'>
                <div className="card bg-base-200 shadow-xl mt-5 mr-5">
                    <div className="card-body">
                        <div className="flex">
                            <h2 className="card-title">Novedades en las Tutorías</h2>
                            <button className="btn btn-ghost btn-square ml-1 btn-xs">
                                <MoreHoriz sx={{ fontSize: 20 }} />
                            </button>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <Course base={ 100 }/>
                            <Course base={ 100 }/>
                            <Course base={ 100 }/>
                            <Course base={ 100 }/>
                            <Course base={ 100 }/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
