import { loremIpsum } from 'lorem-ipsum';
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
                        <span className={StylesGeral.tituloDesc}>Comece por aqui, explorando exemplos interativos e de fácil entendimento.</span>
                    </div>

                    <div>
                        <span className={StylesGeral.topico}>Visão geral</span>
                        <span className={StylesGeral.texto}>
                            {loremIpsum({ count: 5 })}
                        </span>
                    </div>

                    <div>
                        <span className={StylesGeral.topico}>Animações</span>
                        <span className={StylesGeral.texto}>
                            {loremIpsum({ count: 5 })}
                        </span>
                    </div>
                </div>
            </section>

            <Sidebar itens={ItensSidebarDireita()} justify={'center'} />
        </Fragment>
    )
}
