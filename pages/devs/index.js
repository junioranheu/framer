import React from 'react';
import Styles from '../../styles/landingPage.module.css';

export default function Index() {
    return (
        <section className={Styles.principal}>
            <section className={Styles.sessaoTituloPrincipal}>
                <div>
                    <span className={Styles.tituloPrincipal}>Framer</span>
                    <span className={Styles.tituloPrincipal}>para Devs</span>
                </div>

                <div className={Styles.margemTopP}>
                    <span className={Styles.descricaoTituloPrincipal}>O Framer permite um design fácil e interativo.</span>
                    <span className={Styles.descricaoTituloPrincipal}>Com React.js, os usuários podem</span>
                    <span className={Styles.descricaoTituloPrincipal}>criar qualquer coisa.</span>
                </div>
            </section>
        </section>
    )
}

