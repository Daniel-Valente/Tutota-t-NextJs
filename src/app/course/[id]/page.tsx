import Image from "next/image";
import React from "react";
import { ArrowForwardIos, Dashboard, DateRange, Description, Home, Lock, PhotoLibrary, Public, WatchLater } from "@mui/icons-material";

import { CreatePost } from "@/app/ui/home/create-post";
import { Post } from "@/app/ui/home/posts";
import { Course } from "@/app/ui/perfil/[id]/courses";
import { Member } from "@/app/ui/course/[id]/member";
import { CourseView } from "@/app/ui/course/[id]/course-view";


export default function Page() {
    return (
        <div className='bg-base-200'>
            <div className='card card-compact bg-base-100 w-full rounded-none'>
                <figure>
                    <Image
                        src='/images/Imagen1.png'
                        alt='test'
                        width={500}
                        height={500}
                        className='w-full lg:h-80 h-40'
                    />
                </figure>
                <div className='mt-5 mb-5 ml-5 lg:ml-20'>
                    <p className='font-bold text-xl lg:text-3xl'>
                        Mate Fácil, Álgebra lineal
                        <ArrowForwardIos sx={{ fontSize: 20 }} />
                    </p>
                    <div className='flex justify-between'>
                        <p className='text-xs lg:text-sm mt-2'>
                            {/* <Lock sx={{ fontSize: 15 }} /> */}
                            <Public sx={{ fontSize: 15 }} />
                            Grupo <span className='font-bold'> Privado</span> °
                            <span className='font-bold'> 21 mil</span> Miembros
                        </p>

                        <button className='btn mr-5 btn-sm btn-secondary hidden lg:block'>
                            <p className='text-sm'>Unirse a la tutoría</p>
                        </button>
                    </div>

                    <div className='flex justify-between lg:hidden'>
                        <Member/>

                        <button className='btn mr-5 btn-sm btn-secondary align-middle'>
                            <p className='text-xs'>Unirse a la tutoría</p>
                        </button>
                    </div>

                </div>
            </div>

            <div className="flex flex-row">
                <div className="lg:w-3/12 lg:block hidden">
                    <div className="card bg-base-100 shadow-xl mt-5 ml-5">
                        <div className="card-body">
                            <h2 className="card-title">Detalle</h2>
                            <p className='text-sm'>
                                {/* <Lock sx={{ fontSize: 20 }} className='mr-1'  /> */}
                                <Public sx={{ fontSize: 20 }} className='mr-1' />
                                <span className='font-bold'>Público</span>
                                <span> Cualquiera puede ver quién pertenece al grupo y lo que se publica.</span>
                            </p>
                            <p className='text-sm mt-2'>
                                {/* <Lock sx={{ fontSize: 20 }} className='mr-1'  /> */}
                                <Description sx={{ fontSize: 20 }} className='mr-1' />
                                <span className='font-bold'>Descripción</span>
                                <span> Un curso interactivo de matematicas jugando.</span>
                            </p>
                            <p className='text-sm mt-2'>
                                {/* <Lock sx={{ fontSize: 20 }} className='mr-1'  /> */}
                                <DateRange sx={{ fontSize: 20 }} className='mr-1' />
                                <span className='font-bold'>Fecha</span>
                                <span>  lunes - miercoles - viernes.</span>
                            </p>
                            <p className='text-sm mt-2'>
                                {/* <Lock sx={{ fontSize: 20 }} className='mr-1'  /> */}
                                <WatchLater sx={{ fontSize: 20 }} className='mr-1' />
                                <span className='font-bold'>Horario</span>
                                <span> 12:00 pm a 1 pm.</span>
                            </p>
                            <p className='text-sm mt-2'>
                                {/* <Lock sx={{ fontSize: 20 }} className='mr-1'  /> */}
                                <Home sx={{ fontSize: 20 }} className='mr-1' />
                                <span className='font-bold'>Lugar</span>
                                <span> Link de meet.</span>
                            </p>

                            <Member/>
                        </div>
                    </div>
                </div>
                <div className="lg:w-6/12 w-full">
                    <div className="flex flex-col items-center justify-center">
                        <CreatePost base={100} />

                        <CourseView />

                        <Post base={100} />
                        <Post base={100} />
                        <Post base={100} />
                        <Post base={100} />
                        <Post base={100} />
                    </div>
                </div>
                <div className="lg:w-3/12 lg:block hidden">
                    <div className="card bg-base-100 shadow-xl mt-5 mr-5">
                        <div className="card-body">
                            <h2 className="card-title">Recomendados</h2>
                            <Course/>
                            <Course/>
                            <Course/>
                            <Course/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
