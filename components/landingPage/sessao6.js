import Image from 'next/image';
import React, { Fragment } from 'react';
import Imagem1 from '../../static/pages/landingPage/sessao6imagem1.webp';
import Styles from '../../styles/landingPage.module.css';
import Botao from '../outros/botao.js';

export default function Sessao6() {
    return (
        <Fragment>
            <section className={Styles.wrapper} style={{ background: 'linear-gradient(180deg,#a8ffd9,hsla(0,0%,100%,.7))' }}>
                <div className={Styles.principal} style={{ paddingBottom: '0%', overflowY: 'hidden' }}>
                    <div className={`${Styles.sessaoTituloPrincipal} ${Styles.margemTopXG}`}>
                        <span className={`${Styles.tituloPrincipal}`} style={{ color: '#1A1A1A' }}>Comece, hoje, criando</span>
                        <span className={`${Styles.tituloPrincipal}`} style={{ color: '#1A1A1A' }}>de modo interativo.</span>
                        <span className={`${Styles.tituloPrincipal} ${Styles.opacidadeBaixa}`} style={{ color: '#1A1A1A' }}>Sem pagar nada.</span>

                        <div className={`${Styles.botaoCustom} ${Styles.botaoPreto}`}>
                            <Botao texto={'Começar agora — é gratuito'} url={'/docs'} isNovaAba={false} />
                        </div>
                    </div>

                    <div className={`${Styles.margemTopXG} ${Styles.imagemRelative}`}>
                        <Image src={Imagem1} alt='' />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

