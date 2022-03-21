import React from 'react';
import Botao from '../../components/outros/botao.js';
import Video1 from '../../static/pages/landingPage/video1.mp4';
import Styles from '../../styles/landingPage.module.css';

export default function Sessao1() {
    return (
        <section className={Styles.wrapper}>
            <div className={Styles.principal}>
                <div className={`${Styles.sessaoTituloPrincipal} ${Styles.margemTitulo}`}>
                    <span className={Styles.tituloPrincipal}>Projete produtos</span>
                    <span className={Styles.tituloPrincipal}>impressionantes</span>
                    <span className={`${Styles.tituloPrincipal} ${Styles.opacidadeBaixa}`}>com sua equipe.</span>

                    <div className={Styles.botaoCustom}>
                        <Botao texto={'Entre agora — é gratuito'} url={'/docs'} isNovaAba={false} />
                    </div>
                </div>

                <div className={`${Styles.divMedia} ${Styles.margemTopGigante}`}>
                    <video className={Styles.video} autoPlay loop muted playsInline disablePictureInPicture controls={false}>
                        <source src={Video1} type='video/mp4' />
                    </video>
                </div>
            </div>
        </section>
    )
}

