import { MoreHoriz } from '@mui/icons-material';
import React from 'react';

export const MoreButton = () => {
    return (
        <button className="btn btn-ghost btn-square ml-1 btn-xs">
            <MoreHoriz sx={{ fontSize: 20 }} />
        </button>
    );
};
