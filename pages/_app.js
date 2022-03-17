import React, { useState } from 'react';
import '../fonts/GTWalsheim.css';
import LayoutDoc from '../layouts/doc';
import LayoutTeste from '../layouts/teste';
import '../styles/globals.css';

export default function App({ Component, pageProps, ...appProps }) {
    const [url] = useState(appProps.router.pathname);

    function verificarLayout() {
        // console.log(url);

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

    return verificarLayout();
}

