import { GroupAdd } from '@mui/icons-material';
import React from 'react';

export const FollowButton = () => {
    return (
        <button className='btn ml-5 btn-secondary'>
            <GroupAdd sx={{ fontSize: 25 }} />
            Seguir
        </button>
    )
};

export const FollowButtonMobile = () => {
    return (
        <button className='btn ml-5 btn-secondary btn-sm w-4/12'>
            <GroupAdd sx={{ fontSize: 20 }} />
            Seguir
        </button>
    )
};
