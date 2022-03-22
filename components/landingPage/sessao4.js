import Image from 'next/image';
import React from 'react';
import Botao from '../../components/outros/botao.js';
import Chaleco from '../../static/pages/devs/chaleco.webp';
import Video5 from '../../static/pages/landingPage/video5.mp4';
import Styles from '../../styles/landingPage.module.css';
import StylesAlternativo from '../../styles/landingPage.opcoesDinamicas.module.css';

export default function Sessao4() {
    return (
        <section className={Styles.wrapper} style={{ background: 'var(--branco)' }}>
            <div className={Styles.principal}>
                <div className={`${Styles.sessaoTituloPrincipal} ${Styles.margemTopXG}`}>
                    <span className={`${Styles.tituloPrincipal} ${Styles.corPreto}`}>Comece agora. É fácil.</span>
                    <span className={`${Styles.tituloPrincipal} ${Styles.corPreto} ${Styles.opacidadeBaixa}`}>Nossos tutoriais, com certeza,</span>
                    <span className={`${Styles.tituloPrincipal} ${Styles.corPreto} ${Styles.opacidadeBaixa}`}>vão te ajudar.</span>

                    <div className={`${Styles.botaoCustom} ${Styles.botaoCorPrincipal}`}>
                        <Botao texto={'Começar agora'} url={'/docs'} isNovaAba={false} />
                    </div>
                </div>

                <div className={Styles.margemTopXG}>
                    <div className={StylesAlternativo.wrapper}>
                        <div className={StylesAlternativo.divVideo}>
                            <video className={`${StylesAlternativo.video} animate__animated animate__fadeIn delay02`} autoPlay loop muted playsInline disablePictureInPicture controls={false}>
                                <source src={Video5} type='video/mp4' />
                            </video>
                        </div>

                        <div className={StylesAlternativo.divOpcoes}>
                            <div className={StylesAlternativo.opcaoSelecionada}>
                                <div className={`${Styles.divUsuario} pointer`} title='Chaleco ctm'>
                                    <Image src={Chaleco} alt='' />
                                </div>

                                <span className={StylesAlternativo.desc}>
                                    “De acordo com nossas estimativas, com o uso do Framer, foi possível ganhar mais de 15 mil horas no processo de programação.”
                                </span>

                                <span className={`${StylesAlternativo.desc} opacidade`}>
                                   Chaleco Israel
                                </span>

                                <span className={`${StylesAlternativo.descPequena}`}>
                                   Estudante de Ciência da Computação
                                </span>

                                <div className={`${StylesAlternativo.botaoCustom} ${StylesAlternativo.botaoBranco}`}>
                                    <Botao texto={'Saiba mais sobre o caso'} url={'/docs'} isNovaAba={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

