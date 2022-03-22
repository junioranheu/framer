import React from 'react';
import Styles from '../../styles/precos.module.css';

export default function Sessao1() {
    return (
        <section className={Styles.principal}>
           <div className={`${Styles.sessaoTituloPrincipal} ${Styles.margemTopG}`}>
                <span className={Styles.tituloPrincipal}>Preços</span>
            </div>
        </section>
    )
}

