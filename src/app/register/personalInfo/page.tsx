import React from 'react';
import Image from 'next/image';
import { Google, GitHub } from '@mui/icons-material';

export default function Page() {
    return (
        <>
            <main className='flex flex-col items-center justify-center'>
                <h3 className='font-bold text-lg mt-3'>Información Complementaria</h3>
                <Image
                    src="/images/cucei-mobile.png"
                    width={200}
                    height={700}
                    className='mt-5'
                    alt='Image'
                />
                <div className='form-control w-full max-w-xs'>
                    <input type='text' placeholder='Nombre Completo' className='input input-bordered w-full max-w-xs mt-1' required />
                    <input type='text' placeholder='Nombre de Usuario' className='input input-bordered w-full max-w-xs mt-5' required />
                    <input type='text' placeholder='Número de Teléfono' className='input input-bordered w-full max-w-xs mt-5' required />
                    <select className='select select-bordered mt-5' placeholder='Carrera'>
                        <option disabled selected>Pick one</option>
                    </select>
                </div>
                <button className='btn btn-accent mt-5'>Crea tu cuenta</button>
                <p className='text-sm text-slate-500 text-center font-extralight mt-5'>Al continuar, tu estas aceptando los términos, condiciones y el aviso de privacidad</p>
            </main>
        </>
    );
};