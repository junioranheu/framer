import { loremIpsum } from 'lorem-ipsum';
import React, { useState } from 'react';
import Botao from '../../components/outros/botao.js';
import Video1 from '../../static/pages/landingPage/video1.mp4';
import Video2 from '../../static/pages/landingPage/video2.mp4';
import Video3 from '../../static/pages/landingPage/video3.mp4';
import Styles from '../../styles/landingPage.module.css';

export default function Sessao1() {
    const [opcaoVideoSelecionada, setOpcaoVideoSelecionada] = useState(1);
    function handleClickOpcaoVideo(e) {
        // console.log(e.currentTarget.id);
        setOpcaoVideoSelecionada(parseInt(e.currentTarget.id));
    }

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

                <div className={`${Styles.divMedia} ${Styles.margemTopXG}`}>
                    <div className={Styles.divOpcoesVideo}>
                        <span id='1' className={opcaoVideoSelecionada === 1 ? Styles.opacidadeAlta : ''} onClick={(e) => handleClickOpcaoVideo(e)}>Websites</span>
                        <span id='2' className={opcaoVideoSelecionada === 2 ? Styles.opacidadeAlta : ''} onClick={(e) => handleClickOpcaoVideo(e)}>Apps</span>
                        <span id='3' className={opcaoVideoSelecionada === 3 ? Styles.opacidadeAlta : ''} onClick={(e) => handleClickOpcaoVideo(e)}>Componentes</span>
                    </div>

                    {opcaoVideoSelecionada === 1 && (
                        <video className={Styles.video} autoPlay loop muted playsInline disablePictureInPicture controls={false}>
                            <source src={Video1} type='video/mp4' />
                        </video>
                    )}
                    {opcaoVideoSelecionada === 2 && (
                        <video className={Styles.video} autoPlay loop muted playsInline disablePictureInPicture controls={false}>
                            <source src={Video2} type='video/mp4' />
                        </video>
                    )}
                    {opcaoVideoSelecionada === 3 && (
                        <video className={Styles.video} autoPlay loop muted playsInline disablePictureInPicture controls={false}>
                            <source src={Video3} type='video/mp4' />
                        </video>
                    )}
                </div>

                <div className={`${Styles.divMeioAMeio} ${Styles.margemTopXG}`}>
                    <div>
                        <span className={Styles.tituloPrincipalMedio}>Uma ferramente poderosa</span>
                        <span className={`${Styles.descricaoTituloPrincipal} ${Styles.margemTopXP}`}>
                            {loremIpsum({ count: 3 })}
                        </span>

                        <div className={Styles.botaoCustom}>
                            <Botao texto={'Comece agora'} url={'/docs'} isNovaAba={false} />
                        </div>
                    </div>

                    <div>
                        <span className={Styles.tituloPrincipalMedio}>Colaboração em tempo real</span>
                        <span className={`${Styles.descricaoTituloPrincipal} ${Styles.margemTopXP}`}>
                            {loremIpsum({ count: 3 })}
                        </span>

                        <div className={Styles.botaoCustom}>
                            <Botao texto={'Saiba mais'} url={'/docs'} isNovaAba={false} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

