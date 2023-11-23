'use client';

import React, { useEffect, useState } from 'react';
import { DarkMode, LightMode } from '@mui/icons-material';

export const Theme = () => {
    const [isdark, setIsdark] = useState<boolean | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedIsDark = localStorage.getItem('isdark');
            const initialIsDark = savedIsDark ? JSON.parse(savedIsDark) : null;

            setIsdark(initialIsDark);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('isdark', JSON.stringify(isdark));
        const theme = isdark ? 'darkmode' : 'lightmode';
        document.documentElement.setAttribute("data-theme", theme);
    }, [isdark]);

    return (
        <label className="flex cursor-pointer gap-2 mx-4">
            <LightMode sx={{ fontSize: 20 }} />
            <input type="checkbox" value="synthwave" className="toggle theme-controller" checked={isdark ?? false} onChange={() => setIsdark(!isdark)} />
            <DarkMode sx={{ fontSize: 20 }} />
        </label>
    );
};
