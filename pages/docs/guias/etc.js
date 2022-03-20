import React, { Fragment } from 'react';
import Sidebar from '../../../components/outros/sidebar.js';
import Styles from '../../../styles/docs.module.css';
import StylesGeral from '../../../styles/geral.module.css';
import ItensSidebarEsquerda from '../../../utils/dados/guias.itensSidebarEsquerda.js';
import EmojiAleatorio from '../../../utils/outros/emojiAleatorio.js';

export default function Etc() {
    return (
        <Fragment>
            <Sidebar itens={ItensSidebarEsquerda()} isSidebarEsquerda={true} />

            <section className={Styles.wrapper}>
                <div className={Styles.principal}>
                    <div>
                        <span className={StylesGeral.titulo}>Epa... <EmojiAleatorio /></span>
                        <span className={StylesGeral.tituloDesc}>
                            Apenas os itens <span className={`${StylesGeral.efeitoTexto} pointer cor-principal-hover`} onClick={() => window.open('/docs/guias/componentes-codigo', '_self')}>Componentes de código</span> e <span className={`${StylesGeral.efeitoTexto} pointer cor-principal-hover`} onClick={() => window.open('/docs/guias/componentes-inteligentes', '_self')}>Componentes inteligentes</span> do tópico <span className={StylesGeral.efeitoTexto}>Guias</span> foram criados.
                        </span>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

