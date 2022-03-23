import React from 'react';
import Framer from '../../components/svg/framer.js';
import Styles from '../../styles/entrar.module.css';

export default function sessaoEsquerda() {
    return (
        <section className={Styles.divEsquerda}>
            <Framer width='1.3rem' />
            <span className={Styles.titulo}>Bem-vindo ao Framer</span>
            <span className={Styles.subtitulo}>Não tem uma conta ainda? Crie a sua aqui</span>
        </section>
    )
}
