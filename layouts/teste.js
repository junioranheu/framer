import React, { Fragment } from 'react';
import Footer from '../components/outros/footer';
import Styles from '../styles/geral.module.css';

export default function Teste({ Component, pageProps }) {
    return (
        <Fragment>
            <main className='main'>
                <section >
                    Esse é um layout padrão de teste!
                </section>

                <section className={Styles.principal}>
                    <Component {...pageProps} />
                </section>

                <Footer />
            </main>
        </Fragment >
    )
}

