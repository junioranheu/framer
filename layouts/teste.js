import React, { Fragment } from 'react';
import Footer from '../components/outros/footer';

export default function Teste({ Component, pageProps }) {
    return (
        <Fragment>
            <section>
                Esse é um layout padrão de teste!
            </section>

            <Component {...pageProps} />

            <Footer />
        </Fragment>
    )
}

