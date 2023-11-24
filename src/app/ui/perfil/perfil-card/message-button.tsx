import React from 'react';

import { Message } from '@mui/icons-material';

export const MessageButton = () => {
    return (
        <button className="btn w-1/2 bg-base-100 rounded-none rounded-b-2xl rounded-l-none border-t-2 border-neutral">
            <Message sx={{ fontSize: 20 }} />
            Mensaje
        </button>
    );
};
