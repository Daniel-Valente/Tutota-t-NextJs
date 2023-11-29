import React from 'react';
import { ChatCard } from './chat-card';

export const SideNav = () => {
    return (
        <>
            <div className="card card-compact h-screen w-full lg:h-[42rem] bg-base-300 rounded-none border-t-2 border-r-2 border-neutral">
                <div className='flex flex-col items-center justify-center'>
                    <input type="text" placeholder="Type here" className="input max-w-xs input-bordered mt-3 input-sm w-full" />
                </div>
                <div className="ml-3 mt-3 mb-3 overflow-y-auto">
                    <ChatCard />
                </div>
            </div>
        </>
    );
};
