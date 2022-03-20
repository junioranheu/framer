import React, { useEffect, useState } from 'react';
import '../fonts/GTWalsheim.css';
import '../fonts/NanumPenScript.css';
import '../fonts/PTMono.css';
import LayoutDocs from '../layouts/docs.js';
import LayoutTeste from '../layouts/teste.js';
import '../styles/globals.css';

export default function App({ Component, pageProps, ...appProps }) {
    const [url, setUrl] = useState('');

    useEffect(() => {
        function ajustarUrl(url) {
            let urlAjustada = url.split('/').pop().trim();
            urlAjustada = urlAjustada.charAt(0).toUpperCase() + urlAjustada.slice(1);
            return urlAjustada;
        }

        // Setar url no Hook, para usar em verificarLayout();
        setUrl(appProps.router.pathname);

        // Título da página;
        document.title = `${ajustarUrl(appProps.router.pathname)} — Framer`;
    }, [appProps]);

    function verificarLayout() {
        // console.log(`Url: ${url}`);

        if (url.includes('/docs') || url.includes('/devs')) {
            return <LayoutDocs Component={Component} pageProps={pageProps} />
        }
        else {
            return <LayoutTeste Component={Component} pageProps={pageProps} />
        }
    }

    return url ? verificarLayout() : null;
}

