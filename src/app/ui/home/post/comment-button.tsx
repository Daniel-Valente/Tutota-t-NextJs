'use client';

import React from 'react';
import { Comment } from '@mui/icons-material';

export const CommentButton = () => {
    return (
        <button className='' onClick={()=>document.getElementById('postModal').showModal()}>
            <Comment sx={{ fontSize: 30 }} />
        </button>
    );
};
