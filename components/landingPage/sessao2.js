import React from 'react';
import Botao from '../../components/outros/botao.js';
import Styles from '../../styles/landingPage.module.css';
import OpcoesDinamicas from './divOpcoesDinamicas.js';

export default function Sessao2() {
    return ( 
        <section className={Styles.wrapper} style={{ background: 'var(--branco)' }}>
            <div className={Styles.principal}>
                <div className={`${Styles.sessaoTituloPrincipal} ${Styles.margemTopXG}`}>
                    <span className={`${Styles.tituloPrincipal} ${Styles.corPreto}`}>Cheio de recursos.</span>
                    <span className={`${Styles.tituloPrincipal} ${Styles.corPreto} ${Styles.opacidadeBaixa}`}>Tudo que você precisa para</span>
                    <span className={`${Styles.tituloPrincipal} ${Styles.corPreto} ${Styles.opacidadeBaixa}`}>criar um design interativo.</span>

                    <div className={`${Styles.botaoCustom} ${Styles.botaoCorPrincipal}`}>
                        <Botao texto={'Ver todos os recursos'} url={'/docs'} isNovaAba={false} Svg='' />
                    </div>
                </div>

                <div className={Styles.margemTopXG}>
                    <OpcoesDinamicas />
                </div>
            </div>
        </section>
    )
}

