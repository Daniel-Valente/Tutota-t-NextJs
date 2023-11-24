import React from "react";
import Image from "next/image";
import { School } from "@mui/icons-material";

import { Post } from "../../ui/home/posts";
import { CreatePost } from "../../ui/home/create-post";
import { Course } from "../../ui/perfil/[id]/courses";
import { PerfilView } from "@/app/ui/perfil/[id]/perfil-view";
import { MessageButton, MessageButtonMobile } from "@/app/ui/perfil/[id]/message-button";
import { FollowButton, FollowButtonMobile } from "@/app/ui/perfil/[id]/follow-button";
import { CameraBannerButtonMobile, CameraPerfilButtonMobile } from "@/app/ui/perfil/[id]/camera-button";
import { CourseManage } from "@/app/ui/perfil/[id]/course-manage";
import { CreateCourseButton } from "@/app/ui/perfil/[id]/create-course-button";

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

                <CameraBannerButtonMobile />

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

                <CameraPerfilButtonMobile />

                <div className='hidden lg:block absolute top-80 right-8 mt-3'>
                    <MessageButton />
                    <FollowButton />
                </div>

                <div className="flex-col">
                    <p className='font-bold lg:text-3xl text-2xl lg:mt-24 mt-14 lg:ml-52 ml-5 mr-5'>Carlos Daniel Valente Garcia</p>
                    <p className='text-md text-secondary lg:ml-52 ml-5 mb-4'>@cdanielvalente</p>
                    <div className="block lg:hidden ml-5 mb-5">
                        <MessageButtonMobile />
                        <FollowButtonMobile />
                    </div>
                </div>

            </div>

            <div className="flex flex-row">
                <div className="lg:w-3/12 lg:block hidden">
                    <div className="card bg-base-100 shadow-xl mt-5 ml-5">
                        <div className="card-body">
                            <h2 className="card-title">Detalle</h2>
                            <p className='text-sm'>
                                <School sx={{ fontSize: 20 }} className='mr-1'/>
                                Carrera <span className='font-bold'>Ingenieria Informática.</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-6/12 w-full">
                    <div className="flex flex-col items-center justify-center">
                        <div className="card bg-base-100 shadow-xl mt-5 w-11/12 rounded-none block lg:hidden">
                            <div className="card-body">
                                <h2 className="card-title">Detalle</h2>
                                <p className='text-sm'>
                                    <School sx={{ fontSize: 20 }} className='mr-1'/>
                                    Carrera <span className='font-bold'>Ingenieria Informática.</span>
                                </p>

                                <div className=' mt-1 mb-1 border-b-2'></div>

                                <CourseManage />
                            </div>
                        </div>

                        <CreatePost base={100} />
                        <PerfilView />

                        <Post base={ 100 } />
                    </div>
                </div>
                <div className="lg:w-3/12 lg:block hidden">
                    <div className="card bg-base-100 shadow-xl mt-5 mr-5">
                        <div className="card-body">
                            <div className="flex flex-col">
                                <div className="flex">
                                    <h2 className="card-title">Mis Tutorías</h2>
                                    <CreateCourseButton />
                                </div>
                                <Course/>
                                <Course/>
                                <Course/>
                                <Course/>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl mt-5 mr-5 mb-5">
                        <div className="card-body">
                            <div className="flex flex-col">
                                <h2 className="card-title">Tutorías Inscritas</h2>
                                <Course/>
                                <Course/>
                                <Course/>
                                <Course/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
