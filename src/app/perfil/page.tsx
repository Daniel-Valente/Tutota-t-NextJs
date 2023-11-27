import React from "react";

import { PerfilCard } from "../ui/perfil/perfil-card";

export default function Page() {
    return (
        <div className='bg-base-200'>
            <div className='flex flex-row'>
                <div className='lg:w-2/12 hidden lg:block bg-base-300 border-t-2 border-base-200 h-screen'>
                    <div className="ml-3 mt-3 mr-3">
                        <input type="text" placeholder="🔍 Search" className="input input-bordered w-full" />

                        <ul className="steps steps-vertical">
                            <li data-content="📚" className="step step-secondary">
                                <button className="btn btn-ghost hover:btn-primary">Todos</button>
                            </li>
                            <li data-content="🎓" className="step step-secondary">
                                <button className="btn btn-ghost hover:btn-primary">Register</button>
                            </li>
                            <li data-content="🎓" className="step step-secondary">
                                <button className="btn btn-ghost hover:btn-primary">Register</button>
                            </li>
                            <li data-content="🎓" className="step step-secondary">
                                <button className="btn btn-ghost hover:btn-primary">Register</button>
                            </li>
                            <li data-content="🎓" className="step step-secondary">
                                <button className="btn btn-ghost hover:btn-primary">Register</button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='w-full lg:w-7/12'>
                    <div className="flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-3 bg-base-200">
                        <PerfilCard />
                    </div>
                </div>

                <div className='lg:w-3/12 hidden lg:block bg-base-300 border-t-2 border-base-200'></div>
            </div>
        </div>
    );
};
