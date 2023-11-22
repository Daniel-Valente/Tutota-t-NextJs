import React from 'react';
import Image from 'next/image';
import { Google, GitHub } from '@mui/icons-material';

export default function Page() {
    return (
        <>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='font-bold text-lg mt-3'>Registrate</h3>
                <Image
                    src="/images/cucei-mobile.png"
                    width={200}
                    height={700}
                    className='mt-5'
                    alt='Image'
                />
                <p className='py-4'>Crea una cuenta con tu correo electrónico</p>
                <div className='form-control w-full max-w-xs'>
                    <input type='email' placeholder='Correo electrónico' className='input input-bordered w-full max-w-xs' required />
                    <input type='password' placeholder='Contraseña' className='input input-bordered w-full max-w-xs mt-5' required />
                    <input type='password' placeholder='Confirmar Contraseña' className='input input-bordered w-full max-w-xs mt-5' required />
                </div>
                <button className='btn btn-accent mt-5'>Crea tu cuenta</button>
                <div className='flex mt-5 items-center justify-center'>
                    <button>
                        <Google sx={{ fontSize: 30 }} />
                    </button>
                    <button className='ml-5'>
                        <GitHub sx={{ fontSize: 30 }} />
                    </button>
                </div>
                <p className='text-sm text-slate-500 text-center font-extralight mt-5'>Al continuar, tu estas aceptando los términos, condiciones y el aviso de privacidad</p>
            </div>
        </>
    );
};