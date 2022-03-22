import React from 'react';
import Botao from '../../components/outros/botao.js';
import Styles from '../../styles/landingPage.module.css';

export default function Sessao3() {
    return (
        <section className={Styles.wrapper} style={{ background: '#fff' }}>
            <div className={Styles.principal}>
                <div className={`${Styles.sessaoTituloPrincipal} ${Styles.margemTopXG}`}>
                    <span className={`${Styles.tituloPrincipal} ${Styles.corPreto}`}>Faça acontecer.</span>
                    <span className={`${Styles.tituloPrincipal} ${Styles.corPreto} ${Styles.opacidadeBaixa}`}>Tire suas ideias do papel</span>
                    <span className={`${Styles.tituloPrincipal} ${Styles.corPreto} ${Styles.opacidadeBaixa}`}>com o Framer.</span>

                    <div className={`${Styles.botaoCustom} ${Styles.botaoCorPrincipal}`}>
                        <Botao texto={'Entre agora — é gratuito'} url={'/docs'} isNovaAba={false} />
                    </div>
                </div>

                <div className={Styles.margemTopXG}>
                    <h1>aea</h1>
                </div>
            </div>
        </section>
    )
}

