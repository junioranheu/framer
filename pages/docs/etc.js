import React, { Fragment } from 'react';
import Styles from '../../styles/docs.module.css';
import StylesGeral from '../../styles/geral.module.css';
import EmojiAleatorio from '../../utils/outros/emojiAleatorio';

export default function Etc() {
    return (
        <Fragment>
            <section className={Styles.wrapper}>
                <div className={Styles.principal}>
                    <div>
                        <span className={StylesGeral.titulo}>Epa... <EmojiAleatorio /></span>
                        <span className={StylesGeral.tituloDesc}>
                            Apenas os itens <span className={`${StylesGeral.efeitoTexto} pointer cor-principal-hover`} onClick={() => window.open('/docs/introducao', '_self')}>Introdução</span> e <span className={`${StylesGeral.efeitoTexto} pointer cor-principal-hover`} onClick={() => window.open('/docs/exemplos', '_self')}>Exemplos</span> do tópico <span className={StylesGeral.efeitoTexto}>Guia de iniciação</span> foram criados.
                        </span>
                    </div>

                </div>
            </section>
        </Fragment>
    )
}

