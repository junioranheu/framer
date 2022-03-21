import React from 'react';
import Styles from '../../styles/landingPage.module.css';
import CardGigante from '../outros/cardGigante.js';

export default function Sessao4() {
    return (
        <section className={`${Styles.principal} ${Styles.corSecundaria}`}>
            {/* Comentário */}
            <div className={`${Styles.sessaoTituloPrincipal} ${Styles.margemTopG}`}>
                <span className={Styles.tituloPrincipalMedio}>Sessao 5</span>
            </div>

            <div className={Styles.margemTopP}>
                <span className={Styles.descricaoTituloPrincipal}>Explore tudo que é possível ser feito com o Framer.</span>
            </div>

            {/* Card gigante */}
            <div className={Styles.margemTopG}>
                <CardGigante
                    titulo='Entre no nosso servidor do Discord agora mesmo'
                    subtitulo='Tenha suporte dedicado nos nossos canais, explore novas ideias e mostre seu trabalho.'
                    url='/docs'
                />
            </div>
        </section>
    )
}


