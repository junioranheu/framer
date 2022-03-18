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
                    <div>
                        <span className={StylesGeral.titulo}>Introdução</span>
                        <span className={StylesGeral.tituloDesc}>Get started with Motion and learn by exploring interactive examples.</span>
                    </div>

                    <div>
                        <span className={StylesGeral.topico}>Visão geral</span>
                        <span className={StylesGeral.texto}>
                            Motion is a production-ready motion library for React from Framer. It brings declarative animations, effortless layout transitions and gestures while maintaining HTML and SVG semantics.
                        </span>
                    </div>

                    <div>
                        <span className={StylesGeral.topico}>Animations</span>
                        <span className={StylesGeral.texto}>
                            Making animations is as easy as setting values on the animate prop. Motion will automatically generate an animation for you, and this can be overridden with the powerful transition prop.
                        </span>
                    </div>
                </div>
            </section>

            <Sidebar itens={ItensSidebarDireita()} justify={'center'} />
        </Fragment>
    )
}
