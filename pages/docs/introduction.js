import React, { Fragment } from 'react';
import Sidebar from '../../components/outros/sidebar';
import Styles from '../../styles/doc.module.css';
import StylesGeral from '../../styles/geral.module.css';
import ItensSidebarDireita from '../../utils/sidebar/doc.itensSidebarDireita';

export default function Introduction() {
    return (
        <Fragment>
            <section className={Styles.principal}>
                <span className={StylesGeral.titulo}>Introduction</span>
            </section>

            <Sidebar itens={ItensSidebarDireita()} justify={'center'} />
        </Fragment>
    )
}
