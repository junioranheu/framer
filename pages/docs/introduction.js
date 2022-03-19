import { loremIpsum } from 'lorem-ipsum';
import React, { Fragment } from 'react';
import BlocoTexto from '../../components/outros/blocoTexto.js';
import Sidebar from '../../components/outros/sidebar';
import Styles from '../../styles/docs.module.css';
import StylesGeral from '../../styles/geral.module.css';
import Itens from '../../utils/blocosTexto/docs.introduction.js';
import ItensSidebarDireita from '../../utils/sidebar/doc.itensSidebarDireita.js';

export default function Introduction() {
    return (
        <Fragment>
            <section className={Styles.wrapper}>
                <div className={Styles.principal}>
                    <div>
                        <span className={StylesGeral.titulo}>Introdução</span>
                        <span className={StylesGeral.tituloDesc}>Comece por aqui, explorando exemplos interativos e de fácil entendimento.</span>
                    </div>

                    {/* Iterar os itens da página */}
                    {Itens().map((item, i) => (
                        <BlocoTexto key={i} titulo={item.titulo} texto={loremIpsum({ count: 3 })} isTopico={item.isTopico} codigo={item.codigo} />
                    ))}
                </div>
            </section>

            <Sidebar itens={ItensSidebarDireita()} justify={'center'} />
        </Fragment>
    )
}
