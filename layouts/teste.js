import React, { Fragment } from 'react';

export default function Teste({ Component, pageProps }) {
    return (
        <Fragment>
            <section>
                Esse é um layout padrão de teste!
            </section>

            <Component {...pageProps} />
        </Fragment>
    )
}

