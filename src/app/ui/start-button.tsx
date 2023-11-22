'use client';

import React from 'react';

export const StartButton = () => {
    const openModal = () => {
        const modal = document.getElementById('startModal');

        if (modal instanceof HTMLDialogElement) {
            modal.showModal();
        }
    };

    return (
        <a className='btn btn-accent' onClick={openModal}>Comienza HOY!</a>
    );
};
