import React from 'react';
import Botao from '../../components/outros/botao.js';
import Video6 from '../../static/pages/landingPage/video6.mp4';
import Styles from '../../styles/landingPage.module.css';
import StylesAlternativo from '../../styles/landingPage.opcoesDinamicas.module.css';

export default function Sessao5() {
    return (
        <section className={Styles.wrapper}>
            <div className={Styles.principal}>
                <div className={`${Styles.sessaoTituloPrincipal} ${Styles.margemTopXG}`}>
                    <span className={`${Styles.tituloPrincipal} ${Styles.corBranco}`}>Aprenda com outros designers.</span>
                    <span className={`${Styles.tituloPrincipal} ${Styles.corBranco} ${Styles.opacidadeBaixa}`}>Melhore seu nível participando</span>
                    <span className={`${Styles.tituloPrincipal} ${Styles.corBranco} ${Styles.opacidadeBaixa}`}>de nossas comunidades.</span>
                </div>

                <div className={Styles.margemTopXG}>
                    <div className={`${StylesAlternativo.wrapper} ${StylesAlternativo.wrapperOposto}`}>
                        <div className={StylesAlternativo.divVideo}>
                            <video className={`${StylesAlternativo.video} animate__animated animate__fadeIn delay02`} autoPlay loop muted playsInline disablePictureInPicture controls={false}>
                                <source src={Video6} type='video/mp4' />
                            </video>
                        </div>

                        <div className={`${StylesAlternativo.divOpcoes} ${Styles.corBranco}`}>
                            <div className={`${StylesAlternativo.opcaoSelecionada} ${StylesAlternativo.opcaoSelecionadaPreto}`}>
                                <span className={`${StylesAlternativo.titulo} opacidade`}>Participe da comunidade</span>
                                <span className={StylesAlternativo.desc}>
                                    Converse com mais de 7000 membros e receba ajuda nos seus projetos no nosso Discord.
                                    Também veja nosso canal no Youtube!
                                    </span>

                                <div className={`${StylesAlternativo.botaoCustom} ${StylesAlternativo.botaoBranco}`}>
                                    <Botao texto={'Entrar no discord'} url={'https://discord.gg/RdKDenAu8d'} isNovaAba={false} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

