import React from 'react';
import Styles from '../../styles/landingPage.module.css';

export default function Sessao3() {
    return (
        <section className={Styles.principal}>
            <div className={Styles.sessaoTituloPrincipal}>
                <span className={Styles.tituloPrincipalMedio}>Sessão 3</span>
                <span className={Styles.tituloPrincipalMedio}>TESTE</span>
            </div>

            <div className={Styles.margemTopP}>
                <span className={Styles.descricaoTituloPrincipal}>xxx.</span>
                <span className={Styles.descricaoTituloPrincipal}>yyy.</span>
            </div>
        </section>
    )
}

