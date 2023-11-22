import React from 'react';
import { Card } from '@/app/ui/home/cards';
import { CreatePost } from '../ui/home/create-post';

export default function Page() {
    return (
        <div className='flex flex-row'>
            <div className='lg:w-3/12 lg:block hidden'>hola</div>
            <div className='lg:w-6/12 w-full'>
                <div className='flex flex-col items-center justify-center'>
                    <CreatePost base={200}/>

                    <Card base={200} />
                    <Card base={200} />
                    <Card base={200} />
                    <Card base={200} />
                    <Card base={200} />
                </div>
            </div>
            <div className='lg:w-3/12 lg:block hidden'>hola</div>
        </div>
    );
};
