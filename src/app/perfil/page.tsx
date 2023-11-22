import { Bookmark, Dashboard, GroupAdd, Markunread, People } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import { Card } from "../ui/home/cards";
import { CreatePost } from "../ui/home/create-post";

export default function Page() {
    return (
        <div className="bg-base-200">
            <div className="card card-compact bg-base-100 w-full rounded-none">
                <figure>
                    <Image
                        src="/images/Imagen1.png"
                        alt="test"
                        width={500}
                        height={500}
                        className="w-full lg:h-80 h-40"
                    />
                </figure>
                <div className="avatar absolute lg:top-52 top-28">
                    <div className="w-24 lg:w-48 rounded-full lg:ml-48 ml-5 ring ring-offset-base-100 ring-offset-2">
                        <Image
                            src='/images/Imagen1.png'
                            alt='test'
                            width={500}
                            height={500}
                            className='w-full lg:h-80 h-40'
                        />
                    </div>
                </div>
                <div className='hidden lg:block absolute top-80 right-8 mt-3'>
                    <button className='btn btn-primary'>
                        <Markunread sx={{ fontSize: 25 }} />
                        Mensaje
                    </button>
                    <button className='btn ml-5 btn-secondary'>
                        <GroupAdd sx={{ fontSize: 25 }} />
                        Seguir
                    </button>
                </div>

                <div className="flex-col">
                    <p className='font-bold lg:text-3xl text-2xl lg:mt-24 mt-14 lg:ml-52 ml-5 mr-5'>Carlos Daniel Valente Garcia</p>
                    <p className='text-md text-secondary lg:ml-52 ml-5 mb-4'>@cdanielvalente</p>
                    <div className="block lg:hidden ml-5 mb-5">
                        <button className='btn btn-primary btn-sm w-4/12'>
                            <Markunread sx={{ fontSize: 20 }} />
                            Mensaje
                        </button>
                        <button className='btn ml-5 btn-secondary btn-sm w-4/12'>
                            <GroupAdd sx={{ fontSize: 20 }} />
                            Seguir
                        </button>
                    </div>
                </div>

            </div>

            <div className="flex flex-row">
                <div className="lg:w-3/12 lg:block hidden">

                </div>
                <div className="lg:w-6/12 w-full">
                    <div className="flex flex-col items-center justify-center">
                        <CreatePost base={100} />

                        <ul className='menu menu-horizontal bg-base-100 mt-5 w-11/12 rounded-none'>
                            <li>
                                <a className='btn btn-sm ml-2 rounded-3xl'><Dashboard sx={{ fontSize: 20 }}/>
                                    <p className="hidden lg:block">Publicaciones</p>
                                </a>
                            </li>
                            <li>
                                <a className='btn btn-sm ml-2 rounded-3xl'><People sx={{ fontSize: 20 }}/>
                                    <p className="hidden lg:block">Seguidores</p>
                                </a>
                            </li>
                            <li>
                                <a className='btn btn-sm ml-2 rounded-3xl'><Bookmark sx={{ fontSize: 20 }}/>
                                    <p className="hidden lg:block">Mi Colección</p>
                                </a>
                            </li>
                        </ul>

                        <Card base={100} />
                        <Card base={100} />
                        <Card base={100} />
                        <Card base={100} />
                        <Card base={100} />
                    </div>
                </div>
                <div className="lg:w-3/12 lg:block hidden">
                    
                </div>
            </div>
        </div>
    );
}
