import { loremIpsum } from 'lorem-ipsum';
import React from 'react';
import Botao from '../../components/outros/botao.js';
import Video3 from '../../static/pages/landingPage/video3.mp4';
import Styles from '../../styles/landingPage.module.css';

export default function Sessao2() {
    return (
        <section className={Styles.wrapper} style={{ background: '#fff' }}>
            <div className={Styles.principal}>
                <div className={`${Styles.sessaoTituloPrincipal} ${Styles.margemTopXG}`}>
                    <span className={`${Styles.tituloPrincipal} ${Styles.corPreto}`}>Projete produtos</span>
                    <span className={`${Styles.tituloPrincipal} ${Styles.corPreto} ${Styles.opacidadeBaixa}`}>impressionantes</span>
                    <span className={`${Styles.tituloPrincipal} ${Styles.corPreto} ${Styles.opacidadeBaixa}`}>com sua equipe.</span>

                    <div className={`${Styles.botaoCustom} ${Styles.botaoCorPrincipal}`}>
                        <Botao texto={'Entre agora — é gratuito'} url={'/docs'} isNovaAba={false} />
                    </div>
                </div>

                <div className={`${Styles.divMedia} ${Styles.margemTopXG}`}>
                    <video className={`${Styles.video} animate__animated animate__fadeIn`} autoPlay loop muted playsInline disablePictureInPicture controls={false}>
                        <source src={Video3} type='video/mp4' />
                    </video>
                </div>

                <div className={`${Styles.divMeioAMeio} ${Styles.margemTopXG}`}>
                    <div>
                        <span className={Styles.tituloPrincipalMedio}>Uma ferramente poderosa</span>
                        <span className={`${Styles.descricaoTituloPrincipal} ${Styles.margemTopXP}`}>
                            {loremIpsum({ count: 3 })}
                        </span>
                    </div>

                    <div>
                        <span className={Styles.tituloPrincipalMedio}>Uma ferramente poderosa</span>
                        <span className={`${Styles.descricaoTituloPrincipal} ${Styles.margemTopXP}`}>
                            {loremIpsum({ count: 3 })}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

