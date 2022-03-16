import React, { Fragment } from 'react';
import SidebarDireita from '../components/docs/sidebarDireita';
import SidebarEsquerda from '../components/docs/sidebarEsquerda';
import Styles from '../styles/geral.module.css';
import Introduction from './docs/introduction';

export default function Home() {
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
                <SidebarEsquerda />
                <Introduction />
                <SidebarDireita />
            </section>
        </Fragment>
    )
}
