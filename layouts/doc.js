import React, { Fragment } from 'react';
import { v4 as Uuidv4 } from 'uuid';
import Sidebar from '../components/outros/sidebar';
import Styles from '../styles/geral.module.css';
import ItensSidebarDireita from '../utils/sidebar/doc.itensSidebarDireita';
import ItensSidebarEsquerda from '../utils/sidebar/doc.itensSidebarEsquerda';

export default function Doc({ Component, pageProps }) {
    return (
        <Fragment>
            <section>
                Navbar 1
            </section>

            <section>
                Navbar 2
            </section>

            <section>
                Navbar 3
            </section>

            <section className={Styles.principal}>
                <Sidebar key={Uuidv4()} itens={ItensSidebarEsquerda()} justify={'right'} />
                <Component {...pageProps} />
                <Sidebar key={Uuidv4()} itens={ItensSidebarDireita()} justify={'center'} />
            </section>
        </Fragment>
    )
}

