import React from 'react';
import Image from 'next/image';

export const RightMessage = () => {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar online">
                <div className="w-10 rounded-full">
                    <Image
                        src='/images/Imagen1.png'
                        alt='test'
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            <div className="chat-header">
                Anakin
                <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble chat-bubble-accent">I hate you!</div>
            <div className="chat-footer opacity-50">
                Seen at 12:46
            </div>
        </div>
    );
};
