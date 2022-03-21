import React from 'react';
import Styles from '../../styles/landingPage.module.css';

export default function Sessao4() {
    return (
        <section className={`${Styles.principal} ${Styles.corSecundaria}`}>
            <div className={`${Styles.sessaoTituloPrincipal} ${Styles.margemTopG}`}>
                <span className={Styles.tituloPrincipalMedio}>Sessao 5</span>
            </div>

            <div className={Styles.margemTopP}>
                <span className={Styles.descricaoTituloPrincipal}>Explore tudo que é possível ser feito com o Framer.</span>
            </div>
        </section>
    )
}


