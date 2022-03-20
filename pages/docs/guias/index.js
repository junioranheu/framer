import React, { Fragment } from 'react';
import BlocoTexto from '../../../components/outros/blocoTexto.js';
import Sidebar from '../../../components/outros/sidebar.js';
import Styles from '../../../styles/docs.module.css';
import StylesGeral from '../../../styles/geral.module.css';
import Itens from '../../../utils/dados/guias.index.js';
import ItensSidebarEsquerda from '../../../utils/dados/guias.itensSidebarEsquerda.js';

export default function Index() {
    return (
        <Fragment>
            <Sidebar itens={ItensSidebarEsquerda()} isSidebarEsquerda={true} />

            <section className={Styles.wrapper}>
                <div className={Styles.principal}>
                    <div>
                        <span className={StylesGeral.titulo}>Trabalhando com os recursos</span>
                        <span className={StylesGeral.tituloDesc}>Extenda seus protótipos com os nossos recursos, componentes e etc.</span>
                    </div>

                    {/* Iterar os itens da página */}
                    {Itens().map((item, i) => (
                        <BlocoTexto key={i} titulo={item.titulo} texto={item.texto} isTopico={item.isTopico} id={item.id} codigo={item.codigo} iframe={item.iframe} />
                    ))}
                </div>
            </section>

            <Sidebar itens={Itens()} isSidebarEsquerda={false} />
        </Fragment>
    )
}

