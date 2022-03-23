import React, { useState } from 'react';
import Video4Cinco from '../../static/pages/landingPage/video4Cinco.mp4';
import Video4Dois from '../../static/pages/landingPage/video4Dois.mp4';
import Video4Quatro from '../../static/pages/landingPage/video4Quatro.mp4';
import Video4Tres from '../../static/pages/landingPage/video4Tres.mp4';
import Styles from '../../styles/landingPage.opcoesDinamicas.module.css';
import Botao from '../outros/botao';

export default function OpcoesDinamicas() {
    const itens = [
        { id: 1, titulo: 'Menu', video: Video4Dois, desc: 'Nostrud ad sit exercitation anim sit esse incididunt nulla nulla. Nulla id magna qui elit nostrud eiusmod eiusmod magna.' },
        { id: 2, titulo: 'Componentes', video: Video4Tres, desc: 'Consequat aliquip eu ea commodo quis non veniam. Lorem duis sit deserunt ad veniam labore cupidatat sint.' },
        { id: 3, titulo: 'Interações', video: Video4Quatro, desc: 'Laboris enim cupidatat nulla esse. Labore adipisicing eiusmod reprehenderit pariatur reprehenderit minim nulla exercitation aliqua.' },
        { id: 4, titulo: 'Preview', video: Video4Cinco, desc: 'Amet proident laboris nulla qui incididunt occaecat. Incididunt eiusmod irure aute ad ex.' }
    ]

    const [itemSelecionado, setItemSelecionado] = useState(itens[0]);
    function handleSelecionarOpcao(e) {
        // console.log(e.currentTarget.id);
        const id = parseInt(e.currentTarget.id);
        setItemSelecionado(itens[id - 1]);
    }

    return (
        <div className={Styles.wrapper}>
            <div className={Styles.divVideo}>
                {itemSelecionado.id === 1 && (
                    <video className={`${Styles.video} animate__animated animate__fadeIn delay02`} autoPlay loop muted playsInline disablePictureInPicture controls={false}>
                        <source src={Video4Dois} type='video/mp4' />
                    </video>
                )}

                {itemSelecionado.id === 2 && (
                    <video className={`${Styles.video} animate__animated animate__fadeIn delay02`} autoPlay loop muted playsInline disablePictureInPicture controls={false}>
                        <source src={Video4Tres} type='video/mp4' />
                    </video>
                )}

                {itemSelecionado.id === 3 && (
                    <video className={`${Styles.video} animate__animated animate__fadeIn delay02`} autoPlay loop muted playsInline disablePictureInPicture controls={false}>
                        <source src={Video4Quatro} type='video/mp4' />
                    </video>
                )}

                {itemSelecionado.id === 4 && (
                    <video className={`${Styles.video} animate__animated animate__fadeIn delay02`} autoPlay loop muted playsInline disablePictureInPicture controls={false}>
                        <source src={Video4Cinco} type='video/mp4' />
                    </video>
                )}
            </div>

            <div className={Styles.divOpcoes}>
                {itens.map((item, i) => (
                    item.id === itemSelecionado.id ? (
                        <div key={item.id} id={item.id} onClick={(e) => handleSelecionarOpcao(e)} className={`${Styles.opcaoSelecionada} animate__animated animate__slideInUp animate__faster`}>
                            <span className={`${Styles.titulo} opacidade`}>{item.titulo}</span>
                            <span className={Styles.desc}>{item.desc}</span>

                            <div className={`${Styles.botaoCustom} ${Styles.botaoBranco}`}>
                                <Botao texto={'Saiba mais'} url={'/docs'} isNovaAba={false} Svg='' />
                            </div>
                        </div>
                    ) : (
                        <div key={item.id} id={item.id} onClick={(e) => handleSelecionarOpcao(e)} className={Styles.opcaoNaoSelecionada}>
                            <span className={Styles.titulo}>{item.titulo}</span>
                        </div>
                    )
                ))}
            </div>
        </div>
    )
}

