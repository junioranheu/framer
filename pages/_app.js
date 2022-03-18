import React, { useEffect, useState } from 'react';
import '../fonts/GTWalsheim.css';
import '../fonts/NanumPenScript.css';
import LayoutDoc from '../layouts/doc';
import LayoutTeste from '../layouts/teste';
import '../styles/globals.css';

export default function App({ Component, pageProps, ...appProps }) {
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(appProps.router.pathname);
    }, [appProps]);

    function verificarLayout() {
        // console.log(`Url: ${url}`);

        if (url.includes('/docs')) {
            return (
                <LayoutDoc Component={Component} pageProps={pageProps} />
            )
        } else {
            return (
                <LayoutTeste Component={Component} pageProps={pageProps} />
            )
        }
    }

    return url ? verificarLayout() : <h1>Erro em _app.js</h1>;
}

