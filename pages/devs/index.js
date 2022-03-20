import React from 'react';
import Card from '../../components/outros/card.js';
import Seta from '../../components/svg/seta.js';
import Video1 from '../../static/pages/devs/1.mp4';
import Styles from '../../styles/landingPage.module.css';

export default function Index() {
    return (
        <section className={Styles.principal}>
            <div className={Styles.sessaoTituloPrincipal}>
                <span className={Styles.tituloPrincipal}>Framer</span>
                <span className={Styles.tituloPrincipal}>para Devs</span>
            </div>

            <div className={Styles.margemTopP}>
                <span className={Styles.descricaoTituloPrincipal}>O Framer permite um design fácil e interativo.</span>
                <span className={Styles.descricaoTituloPrincipal}>Com React.js, os usuários podem</span>
                <span className={Styles.descricaoTituloPrincipal}>criar qualquer coisa.</span>
            </div>

            <div className={Styles.margemTopP}>
                <a className={Styles.link}>Testar on-line <Seta width={'1.9rem'} /></a>
            </div>

            <div className={`${Styles.divVideo} ${Styles.margemTopG}`}>
                <video className={Styles.video} autoPlay loop muted playsInline disablePictureInPicture controls={false}>
                    <source src={Video1} type='video/mp4' />
                </video>
            </div>

            <div className={Styles.divCards}>
                <Card Svg=''
                    titulo='Componentes'
                    subtitulo='Aprenda mais sobre os recursos e comece explorando alguns exemplos interativos.'
                    url=''
                />

                <Card Svg=''
                    titulo='Código de substituição'
                    subtitulo='Aprenda mais sobre os recursos e comece explorando alguns exemplos interativos.'
                    url=''
                />
            </div>
        </section>
    )
}

