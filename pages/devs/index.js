import React from 'react';
import Seta from '../../components/svg/seta.js';
import Video1 from '../../static/pages/devs/um.mp4';
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

                <div className={Styles.margemTopP}>
                    <a className={Styles.link}>Testar on-line <Seta width={'1.9rem'} /></a>
                </div>

                <div className={`${Styles.divVideo} ${Styles.margemTopG}`}>
                    <video className={Styles.video} autoPlay loop muted playsInline disablePictureInPicture controls={false}>
                        <source src={Video1} type='video/mp4' />
                    </video>
                </div>
            </section>
        </section>
    )
}

