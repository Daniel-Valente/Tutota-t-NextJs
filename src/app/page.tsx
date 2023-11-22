import Image from 'next/image';
import Navbar from './ui/navbar';
import { Google, GitHub } from '@mui/icons-material';
import { StartButton } from './ui/start-button';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='flex flex-col items-center justify-center md:px-28 md:py-12'>
        <Image
          src='/images/cucei-desktop-lightmode.png'
          alt={'Light Mode Image'}
          width={1000}
          height={700}
          className='hidden lg:block'
        />

        <Image
          src="/images/cucei-mobile.png"
          width={200}
          height={700}
          className='block lg:hidden md:hidden mt-5'
          alt='Image'
        />

        <div className='block lg:hidden md:hidden  mt-10'>
          <StartButton/>
        </div>

        <Image
          src="/images/cucei-mobile-lightmode.png"
          width={400}
          height={700}
          className='block lg:hidden md:hidden'
          alt='Image'
        />

        <div className='hidden lg:block mt-1'>
          <StartButton/>
        </div>

        <div className='md:block lg:hidden'>
          <Image
            src="/images/cucei-desktop-lightmode.png"
            width={1000}
            height={700}
            className='hidden lg:hidden md:block'
            alt='Image'
          />
        </div>
      </div>

      <dialog id="startModal" className="modal">
        <div className="modal-box flex flex-col items-center justify-center">
          <h3 className='font-bold text-lg'>Bienvenido de vuelta!</h3>
          <p className='py-4'>Inicia sesión con tu correo electrónico</p>
          <button className='btn btn-secondary'>Ingresa con correo electrónico</button>
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
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <dialog id='logInModal' className="modal">
        <div className="modal-box flex flex-col items-center justify-center">
          <h3 className='font-bold text-lg'>Iniciar Sesión</h3>
          <p className='py-4'>Inicia sesión con tu correo electrónico aquí</p>
          <div className='form-control w-full max-w-xs'>
            <input type='email' placeholder='Correo electrónico' className='input input-bordered w-full max-w-xs' required />
            <input type='password' placeholder='Contraseña' className='input input-bordered w-full max-w-xs mt-5' required />
          </div>
          <button className='btn btn-secondary mt-5'>Ingresa con correo electrónico</button>
          <p className='text-sm text-slate-500 text-center font-extralight mt-5 border-b-2'>Al continuar, tu estas aceptando los términos, condiciones y el aviso de privacidad</p>

          <a href="#" className='mt-2 text-sm text-accent'>¿Olvidaste tu contraseña?</a>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <dialog id="startRegisterModal" className="modal">
        <div className="modal-box flex flex-col items-center justify-center">
          <h3 className='font-bold text-lg'>Registrate</h3>
          <p className='py-4'>Crea una cuenta con tu correo electrónico</p>
          <button className='btn btn-secondary'>Registrate con correo electrónico</button>
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
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <dialog id='registerModal' className="modal">
        <div className="modal-box flex flex-col items-center justify-center">
          <h3 className='font-bold text-lg'>Registrate</h3>
          <p className='py-4'>Crea una cuenta con tu correo electrónico</p>
          <div className='form-control w-full max-w-xs'>
            <input type='email' placeholder='Correo electrónico' className='input input-bordered w-full max-w-xs' required />
            <input type='password' placeholder='Contraseña' className='input input-bordered w-full max-w-xs mt-5' required />
            <input type='password' placeholder='Confirmar Contraseña' className='input input-bordered w-full max-w-xs mt-5' required />
          </div>
          <button className='btn btn-accent mt-5'>Crea tu cuenta</button>
          <p className='text-sm text-slate-500 text-center font-extralight mt-5'>Al continuar, tu estas aceptando los términos, condiciones y el aviso de privacidad</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </main>
  )
}
