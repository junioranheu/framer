import React from 'react';
import Botao from '../../components/outros/botao.js';
import Styles from '../../styles/landingPage.module.css';
import OpcoesDinamicas from './divOpcoesDinamicas.js';

export default function Sessao2() {
    return (
        <section className={Styles.wrapper} style={{ background: '#fff' }}>
            <div className={Styles.principal}>
                <div className={`${Styles.sessaoTituloPrincipal} ${Styles.margemTopXG}`}>
                    <span className={`${Styles.tituloPrincipal} ${Styles.corPreto}`}>Projete produtos</span>
                    <span className={`${Styles.tituloPrincipal} ${Styles.corPreto} ${Styles.opacidadeBaixa}`}>impressionantes</span>
                    <span className={`${Styles.tituloPrincipal} ${Styles.corPreto} ${Styles.opacidadeBaixa}`}>com sua equipe.</span>

                    <div className={`${Styles.botaoCustom} ${Styles.botaoCorVerdeAgua}`}>
                        <Botao texto={'Entre agora — é gratuito'} url={'/docs'} isNovaAba={false} />
                    </div>
                </div>

                <div className={Styles.margemTopXG}>
                    <OpcoesDinamicas />
                </div>
            </div>
        </section>
    )
}

