import React from 'react';
import Image from 'next/image';

import { PerfilButton } from './perfil-card/perfil-button';
import { MessageButton } from './perfil-card/message-button';

export const PerfilCard = () => {
    return (
        <div className="card card-compact w-96 bg-base-100 m-3 shadow-xl">
            <div className="card-body">
                <div className="flex justify-between">
                    <div className="flex-col">
                        <p className="font-bold">Carlos Daniel Valente Garcia 
                            <span className="badge badge-accent badge-sm ml-1">ADMIN</span>
                        </p>
                        <p className="font-extralight text-sm mt-1">Ingenieria Informática</p>
                    </div>
                    <div className="avatar">
                        <div className=" w-14 h-14 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                            <Image
                                src='/images/Imagen1.png'
                                alt='test'
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <PerfilButton />
                <MessageButton />
            </div>
        </div>
    );
};
