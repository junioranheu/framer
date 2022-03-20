import React, { Fragment } from 'react';
import Navbar1 from '../components/outros/docs.navbar1';
import Navbar2 from '../components/outros/docs.navbar2';
import Navbar3 from '../components/outros/docs.navbar3';
import Footer from '../components/outros/footer';
import Styles from '../styles/geral.module.css';

export default function Docs({ Component, pageProps }) {
    return (
        <Fragment>
            <main className='main'>
                <Navbar1 />
                <Navbar2 />
                <Navbar3 />

                <section className={Styles.fundo}>
                    <Component {...pageProps} />
                </section>

                <Footer />
            </main>
        </Fragment>
    )
}

