import { LoginButton } from './navbar/login-button';
import { RegisterButton } from './navbar/register-button';
import { Theme } from './home/navbar/theme';

const Navbar = () => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">
                        <a className="btn btn-ghost text-xl">Tutorate</a>
                    </div>
                    <div className="hidden lg:flex flex-none gap-2">
                        <Theme />
                        <RegisterButton />
                        <LoginButton />
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    <li><a>Registrarse</a></li>
                    <li><a>Iniciar Sesión</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;