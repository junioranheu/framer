import React, { Fragment } from 'react';
import BlocoTexto from '../../components/outros/blocoTexto.js';
import Sidebar from '../../components/outros/sidebar.js';
import Styles from '../../styles/docs.module.css';
import StylesGeral from '../../styles/geral.module.css';
import Itens from '../../utils/dados/docs.introducao.js';

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
                        <BlocoTexto key={i} titulo={item.titulo} texto={item.texto} isTopico={item.isTopico} id={item.id} codigo={item.codigo} iframe={item.iframe} />
                    ))}
                </div>
            </section>

            <Sidebar itens={Itens()} isSidebarEsquerda={false} justify={'center'} />
        </Fragment>
    )
}
