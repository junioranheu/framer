import React from 'react';
import { createPortal } from 'react-dom';
import Loading from 'react-fullscreen-loading';

// https://codesandbox.io/s/v6z782xow7?file=/src/index.js:0-302
export default function LoadingFullScreen({ isLoading }) {
    function componente() {
        return (
            <Loading loading={isLoading} background='rgba(0, 0, 0, 0.9)' loaderColor='var(--cor-principal)' />
        )
    }

    return (isLoading ? createPortal(componente(), document.getElementById('modalWrapper')) : null);
}