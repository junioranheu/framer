import React, { Fragment } from 'react';
import BlocoConteudo from '../../components/outros/blocoConteudo.js';
import Sidebar from '../../components/outros/sidebar.js';
import Styles from '../../styles/docs.module.css';
import StylesGeral from '../../styles/geral.module.css';
import Itens from '../../utils/dados/docs.exemplos.js';
import ItensSidebarEsquerda from '../../utils/dados/docs.itensSidebarEsquerda.js';

export default function Exemplos() {
    return (
        <Fragment>
            <Sidebar itens={ItensSidebarEsquerda()} isSidebarEsquerda={true} />

            <section className={Styles.wrapper}>
                <div className={Styles.principal}>
                    <div>
                        <span className={StylesGeral.titulo}>Introdução</span>
                        <span className={StylesGeral.tituloDesc}>Comece por aqui, explorando exemplos interativos e de fácil entendimento.</span>
                    </div>

                    {/* Iterar os itens da página */}
                    {Itens().map((item, i) => (
                        <BlocoConteudo key={i}
                            titulo={item.titulo} texto={item.texto} isTopico={item.isTopico}
                            id={item.id} codigo={item.codigo} iframe={item.iframe} imagem={item.imagem}
                        />
                    ))}
                </div>
            </section>

            <Sidebar itens={Itens()} isSidebarEsquerda={false} />
        </Fragment>
    )
}

