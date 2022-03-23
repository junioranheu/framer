import React, { Fragment } from 'react';
import Styles from '../styles/geral.module.css';

export default function Docs({ Component, pageProps }) {
    return (
        <Fragment>
            <section className={Styles.fundo}>
                <Component {...pageProps} />
            </section>
        </Fragment>
    )
}

