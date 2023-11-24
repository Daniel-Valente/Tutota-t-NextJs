import React from 'react';
import Image from 'next/image';

export const LeftMessage = () => {
    return (
        <div className="chat chat-start">
            <div className="chat-image avatar offline">
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
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble chat-bubble-secondary">You were the Chosen One!</div>
            <div className="chat-footer opacity-50">
                Delivered
            </div>
        </div>
    );
};
