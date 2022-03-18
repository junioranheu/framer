import React, { Fragment } from 'react';
import Sidebar from '../../components/outros/sidebar';
import Styles from '../../styles/docs.module.css';
import StylesGeral from '../../styles/geral.module.css';
import ItensSidebarDireita from '../../utils/sidebar/doc.itensSidebarDireita';

export default function Introduction() {
    return (
        <Fragment>
            <section className={Styles.wrapper}>
                <div className={Styles.principal}>
                    <span className={StylesGeral.titulo}>Introdução</span>

                    <h1 style={{color: 'white', fontSize:'50px'}}>
                        Get started with Motion and learn by exploring interactive examples.

                        #Overview
                        Motion is a production-ready motion library for React from Framer. It brings declarative animations, effortless layout transitions and gestures while maintaining HTML and SVG semantics.

                        #Animations
                        Making animations is as easy as setting values on the animate prop. Motion will automatically generate an animation for you, and this can be overridden with the powerful transition prop.
                    </h1>
                </div>
            </section>

            <Sidebar itens={ItensSidebarDireita()} justify={'center'} />
        </Fragment>
    )
}
