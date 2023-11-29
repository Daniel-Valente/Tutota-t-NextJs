
import React from 'react';

import { Messages } from '@/app/ui/message/[id]/messages';
import { SendMessage } from '@/app/ui/message/[id]/send-message';
import { UserChat } from '@/app/ui/message/[id]/user-chat';

export default function Page() {
    return (
        <div className='flex flex-col h-[93vh] lg:h-[42rem] justify-end'>
            <div className="card card-compact bg-base-300 rounded-none border-t-2 border-neutral">
                <div className="card-body">
                    <h2 className="card-title">
                        <UserChat />
                    </h2>
                </div>
            </div>

            <Messages />

            <div className="card card-compact w-full bg-base-300 rounded-none mt-auto">
                <div className="card-body">
                    <div className='flex'>
                        <SendMessage />
                    </div>
                </div>
            </div>
        </div>
    );
};
