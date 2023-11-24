import React from 'react';

import { LeftMessage } from './message/left-message';
import { RightMessage } from './message/right-message';

export const Messages = () => {
    return (
        <div className="card card-compact h-full bg-base-100 rounded-none overflow-auto">
            <div className="card-body">
                <LeftMessage />
                <RightMessage />
                <RightMessage />
                <RightMessage />
                <RightMessage />
                <RightMessage />
                <RightMessage />
                <RightMessage />
                <RightMessage />
                <RightMessage />
                <RightMessage />
                <RightMessage />
                <RightMessage />
            </div>
        </div>
    );
};