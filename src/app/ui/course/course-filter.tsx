import React from 'react';
import { Dashboard, Devices, Engineering, Science } from '@mui/icons-material';

export const CourseFilter = () => {
    return (
        <div className='mt-3 ml-3 flex flex-col'>
            <ul className="steps steps-vertical">
                <li data-content="📚" className="step step-secondary">
                    <button className="btn btn-ghost hover:btn-primary">
                        <Dashboard sx={{ fontSize: 25 }} />
                        Todos
                    </button>
                </li>
                <li data-content="🎓" className="step step-secondary">
                    <button className="btn btn-ghost hover:btn-primary">
                        <Science sx={{ fontSize: 25 }} />
                        Básicas
                    </button>
                </li>
                <li data-content="🎓" className="step step-secondary">
                    <button className="btn btn-ghost hover:btn-primary">
                        <Engineering sx={{ fontSize: 25 }} />
                        Ingenierias
                    </button>
                </li>
                <li data-content="🎓" className="step step-secondary">
                    <button className="btn btn-ghost hover:btn-primary">
                        <Devices sx={{ fontSize: 25 }} />
                        Divtic
                    </button>
                </li>
            </ul>
        </div>
    );
};

export const CourseFilterMobile = () => {
    return (
        <div className="card card-compact bg-base-100 mt-5 w-11/12 rounded-none block lg:hidden">
            <div className="flex m-1">
                <button className='btn btn-sm ml-2 rounded-3xl'>
                    <Dashboard sx={{ fontSize: 20 }} />
                </button>
                <button className='btn btn-sm ml-2 rounded-3xl'>
                    <Science sx={{ fontSize: 20 }} />
                </button>
                <button className='btn btn-sm ml-2 rounded-3xl'>
                    <Engineering sx={{ fontSize: 20 }} />
                </button>
                <button className='btn btn-sm ml-2 rounded-3xl'>
                    <Devices sx={{ fontSize: 20 }} />
                </button>
            </div>
        </div>
    );
};
