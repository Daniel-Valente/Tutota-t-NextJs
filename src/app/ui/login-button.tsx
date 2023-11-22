'use client';

import React from 'react';

export const LoginButton = () => {
    const openModal = () => {
        const modal = document.getElementById('startModal');

        if (modal instanceof HTMLDialogElement) {
            modal.showModal();
        }
    };

    return (
        <a className="btn mx-1 btn-accent space-x-[10px]" onClick={openModal}>Iniciar Sesión</a>
    );
};
