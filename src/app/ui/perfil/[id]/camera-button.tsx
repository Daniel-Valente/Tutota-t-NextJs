import { CameraAlt } from '@mui/icons-material';
import React from 'react';

export const CameraPerfilButtonMobile = () => {
    return (
        <div className='block lg:hidden absolute top-44 left-24'>
            <button className='btn btn-circle btn-sm ring'>
                <CameraAlt sx={{ fontSize: 20 }} />
            </button>
        </div>
    );
};

export const CameraBannerButtonMobile = () => {
    return (
        <div className='block lg:hidden absolute top-32 right-2'>
            <button className='btn btn-circle btn-sm'>
                <CameraAlt sx={{ fontSize: 25 }} />
            </button>
        </div>
    );
};
