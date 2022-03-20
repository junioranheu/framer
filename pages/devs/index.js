import React from 'react';
import Styles from '../../styles/docs.module.css';
import StylesGeral from '../../styles/geral.module.css';

export default function Index() {
    return (
        <section className={Styles.wrapper}>
            <div className={Styles.principal}>
                <div>
                    <span className={StylesGeral.titulo}>Framer for Developers</span>
                    <span className={StylesGeral.tituloDesc}>aea.</span>
                </div>
            </div>
        </section>
    )
}

