import React, { Fragment } from 'react';
import { v4 as Uuidv4 } from 'uuid';
import Navbar1 from '../components/outros/docs.navbar1';
import Navbar2 from '../components/outros/docs.navbar2';
import Navbar3 from '../components/outros/docs.navbar3';
import Footer from '../components/outros/footer';
import Sidebar from '../components/outros/sidebar';
import Styles from '../styles/geral.module.css';
import ItensSidebarEsquerda from '../utils/sidebar/doc.itensSidebarEsquerda';

export default function Doc({ Component, pageProps }) {
    return (
        <Fragment>
            <main className='main'>
                <Navbar1 />
                <Navbar2 />
                <Navbar3 />

                <section className={Styles.principal}>
                    <Sidebar key={Uuidv4()} itens={ItensSidebarEsquerda()} justify={'right'} />
                    <Component {...pageProps} />
                </section>

                <Footer />
            </main>
        </Fragment>
    )
}

