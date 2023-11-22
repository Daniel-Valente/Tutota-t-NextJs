import React from 'react';
import Navbar from '../ui/navbar';
import Image from 'next/image';
import { Google, GitHub } from '@mui/icons-material';

export default function Page() {
    return (
        <>
            <Navbar/>
            <main className='flex flex-col items-center justify-center'>
                <h3 className='font-bold text-lg mt-3'>Iniciar Sesión</h3>
                <Image
                    src="/images/cucei-mobile.png"
                    width={200}
                    height={700}
                    className='mt-5'
                    alt='Image'
                />
                <p className='py-4 mt-5'>Inicia sesión con tu correo electrónico aquí</p>
                <div className='form-control w-full max-w-xs mt-3'>
                    <input type='email' placeholder='Correo electrónico' className='input input-bordered w-full max-w-xs' required />
                    <input type='password' placeholder='Contraseña' className='input input-bordered w-full max-w-xs mt-5' required />
                </div>
                <button className='btn btn-secondary mt-5'>Ingresa con correo electrónico</button>
                <div className='flex mt-5 items-center justify-center'>
                    <button>
                    <Google sx={{ fontSize: 30 }} />
                    </button>
                    <button className='ml-5'>
                    <GitHub sx={{ fontSize: 30 }} />
                    </button>
                </div>
                <p className='text-sm text-slate-500 text-center font-extralight mt-6'>Al continuar, tu estas aceptando los términos, condiciones y el aviso de privacidad</p>

                <a href="#" className='mt-2 text-sm text-accent'>¿Olvidaste tu contraseña?</a>
            </main>
        </>
    );
};
