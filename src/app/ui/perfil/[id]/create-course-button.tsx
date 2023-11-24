import React from 'react';
import { AddCircle } from '@mui/icons-material';

export const CreateCourseButton = () => {
    return (
        <button className="btn btn-sm btn-ghost btn-circle ml-3">
            <AddCircle sx={{ fontSize: 20 }} />
        </button>
    );
};
