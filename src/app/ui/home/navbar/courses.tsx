import Image from "next/image";
import React from 'react';

export const Course = ({ base }: { base: number }) => {
    return (
        <div className={`card card-compact bg-base-${ base ?? '100' } shadow-xl rounded-none mt-4`}>
            <figure>
                <Image
                    src='/images/Imagen1.png'
                    alt='test'
                    width={700}
                    height={300}
                />
            </figure>
            <div className="card-body">
                <p>
                    <span className="font-bold">Autor: </span>
                    <span className='font-light text-secondary'>@cdanielvalente</span>
                </p>
                <p>
                    <span className="font-bold">Tutoría: </span>
                    <span className="text-secondary font-bold">Mate Fácil, Álgebra lineal</span>
                </p>
            </div>
        </div>
    );
}