import React from 'react';

import { Send } from '@mui/icons-material';

export const SendMessage = () => {
    return (
        <>
            <textarea className="textarea h-1 w-full bg-base-100" placeholder="Bio"></textarea>
            <Send sx={{ fontSize: 20 }} className='ml-5' />
        </>
    );
};
