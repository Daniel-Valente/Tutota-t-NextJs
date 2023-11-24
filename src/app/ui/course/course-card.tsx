import React from 'react';
import Image from "next/image";
import { Description, Public, Badge } from "@mui/icons-material";

export const CourseCard = () => {
  return (
    <div className="card card-side h-44 lg:h-56 bg-base-100 shadow-xl mt-3 w-11/12 rounded-none lg:rounded-xl">
      <figure>
        <Image
          src='/images/Imagen1.png'
          alt='test'
          width={500}
          height={500}
          className='h-full w-52 lg:w-96'
        />
      </figure>
      <div className="card-body hidden lg:block">
        <h2 className="card-title">Mate Fácil, Álgebra lineal</h2>
        <p className='text-xs'>
          {/* <Lock sx={{ fontSize: 20 }} className='mr-1'  /> */}
          <Public sx={{ fontSize: 20 }} className='mr-1' />
          <span className='font-bold'>Público</span>
        </p>
        <p className='text-xs mt-2'>
          {/* <Lock sx={{ fontSize: 20 }} className='mr-1'  /> */}
          <Description sx={{ fontSize: 20 }} className='mr-1' />
          <span className='font-bold'>Descripción</span>
          <span> Un curso interactivo de matematicas jugando.</span>
        </p>
        <p className='text-xs mt-2'>
          {/* <Lock sx={{ fontSize: 20 }} className='mr-1'  /> */}
          <Badge sx={{ fontSize: 20 }} className='mr-1' />
          <span className='font-bold'>Autor</span>
          <span className='text-secondary font-light'> @cdanielvalente</span>
        </p>
        <div className='card-actions mt-2 justify-between'>
          <p className='text-xs text-accent font-extralight'>#hola</p>
          <button className='btn btn-primary btn-sm text-sm'>Unirse</button>
        </div>
      </div>

      <div className='m-4 block lg:hidden'>
        <h3 className='card-title text-sm'>Mate Fácil, Álgebra lineal</h3>
        <p className='text-xs'>
          {/* <Lock sx={{ fontSize: 20 }} className='mr-1'  /> */}
          <Public sx={{ fontSize: 20 }} className='mr-1' />
          <span className='font-bold'>Público</span>
        </p>
        <p className='text-xs mt-2'>
          {/* <Lock sx={{ fontSize: 20 }} className='mr-1'  /> */}
          <Description sx={{ fontSize: 20 }} className='mr-1' />
          <span className='font-bold'>Descripción</span>
          <span> Un curso interactivo de matematicas jugando.</span>
        </p>
        <p className='text-xs mt-2'>
          {/* <Lock sx={{ fontSize: 20 }} className='mr-1'  /> */}
          <Badge sx={{ fontSize: 20 }} className='mr-1' />
          <span className='font-bold'>Autor</span>
          <span className='text-secondary font-light'> @cdanielvalente</span>
        </p>
        <div className='card-actions mt-2 justify-between'>
          <p className='text-xs text-accent font-extralight'>#hola</p>
          <button className='btn btn-primary btn-sm text-xs'>Unirse</button>
        </div>
      </div>
    </div>
  )
};
