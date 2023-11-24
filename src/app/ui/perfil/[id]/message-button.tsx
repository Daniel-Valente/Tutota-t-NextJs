import { Markunread } from '@mui/icons-material';
import React from 'react';

export const MessageButton = () => {
    return (
        <button className='btn btn-primary'>
            <Markunread sx={{ fontSize: 25 }} />
            Mensaje
        </button>
    );
};

export const MessageButtonMobile = () => {
    return (
        <button className='btn btn-primary btn-sm w-4/12'>
            <Markunread sx={{ fontSize: 20 }} />
            Mensaje
        </button>
    );
};
