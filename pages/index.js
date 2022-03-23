import dynamic from 'next/dynamic';
import React, { Fragment, useEffect, useState } from 'react';
import useInView from 'react-cool-inview';
import { ShimmerThumbnail } from 'react-shimmer-effects';
import Sessao1 from '../components/landingPage/sessao1.js';
import { Aviso } from '../components/outros/aviso';
import EmojiAleatorio from '../utils/outros/emojiAleatorio';
const Sessao2 = dynamic(() => import('../components/landingPage/sessao2.js'));
const Sessao3 = dynamic(() => import('../components/landingPage/sessao3.js'));
const Sessao4 = dynamic(() => import('../components/landingPage/sessao4.js'));
const Sessao5 = dynamic(() => import('../components/landingPage/sessao5.js'));
const Sessao6 = dynamic(() => import('../components/landingPage/sessao6.js'));

export default function Index() {
    const [mostrarAviso, isMostrarAviso] = useState(true);
    useEffect(() => {
        // Aviso;
        if (mostrarAviso) {
            const msg =
                `Olá! ${EmojiAleatorio()}<br/><br/> 
          Esse projeto foi replicado, sem fins lucrativos, a fim de estudo apenas, utilizando React.js e Next.js, a partir de um projeto real, de uma empresa real.<br/><br/> 
          Feito por @junioranheu.<br/><br/> 
          Todos os direitos reservados à @framerapp.`;
            Aviso.custom(msg, 20000);
            isMostrarAviso(false);
        }
    }, [mostrarAviso]);

    const [exibirConteudo, setExibirConteudo] = useState(false);
    const { observe, inView } = useInView({
        unobserveOnEnter: true, // Executar apenas uma vez, para não ficar 'escondendo' o conteúdo depois;
        onEnter: (() => handleExibirConteudo())
    });

    function handleExibirConteudo() {
        // console.log('Scroll feito, exibir conteúdo');

        setTimeout(function () {
            // console.log('setExibirConteudo(true)');
            setExibirConteudo(true);
        }, 1000);
    }

    return (
        <section>
            <Sessao1 />
            <Sessao2 />

            {/* Lazy load on scroll - https://www.youtube.com/watch?v=_cccpx2Bw_g&t=463s&ab_channel=BetterDev */}
            <div ref={observe}>
                {(inView && !exibirConteudo) && (
                    <Fragment>
                        <ShimmerThumbnail rounded />
                    </Fragment>
                )}

                {(inView && exibirConteudo) && (
                    <Fragment>
                        <Sessao3 />
                        <Sessao4 />
                        <Sessao5 />
                        <Sessao6 />
                    </Fragment>
                )}
            </div>
        </section>
    )
}
