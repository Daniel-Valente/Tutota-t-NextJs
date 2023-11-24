import React from "react";

import { PerfilCard } from "../ui/perfil/perfil-card";

export default function Page() {
    return (
        <div className='bg-base-200'>
            <div className='flex flex-row'>
                <div className='lg:w-2/12 hidden lg:block'>
                    HOLA
                </div>

                <div className='w-full lg:w-10/12'>
                    <div className="flex flex-col items-center lg:grid lg:grid-cols-3 lg:gap-3 bg-base-200">
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                        <PerfilCard />
                    </div>
                </div>
            </div>
        </div>
    );
};
