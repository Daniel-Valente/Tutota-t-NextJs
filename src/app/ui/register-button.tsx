'use client';

import React from 'react';

export const RegisterButton = () => {
    const openModal = () => {
        const modal = document.getElementById('startRegisterModal');

        if (modal instanceof HTMLDialogElement) {
            modal.showModal();
        }
    };

    return (
        <a className="btn mx-1 btn-secondary space-x-[10px]" onClick={openModal}>Registrarse</a>
    );
};
