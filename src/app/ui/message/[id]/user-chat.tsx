import React from 'react';
import Image from 'next/image';

export const UserChat = () => {
    return (
        <>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <Image
                        src='/images/Imagen1.png'
                        alt='test'
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            Obi-Wan Kenobi
        </>
    );
};
