import React, { useEffect } from 'react';
import Sessao1 from '../components/landingPage/sessao1.js';
import Sessao2 from '../components/landingPage/sessao2.js';
import Sessao3 from '../components/landingPage/sessao3.js';
import Sessao4 from '../components/landingPage/sessao4.js';
import Sessao5 from '../components/landingPage/sessao5.js';
import Sessao6 from '../components/landingPage/sessao6.js';
import { Aviso } from '../components/outros/aviso';
import EmojiAleatorio from '../utils/outros/emojiAleatorio';

export default function Index() {
    useEffect(() => {
        // Aviso;
        const msg =
            `Olá! ${EmojiAleatorio()}<br/><br/> 
          Esse projeto foi replicado, sem fins lucrativos, a fim de estudo apenas, utilizando React.js e Next.js, a partir de um projeto real, de uma empresa real.<br/><br/> 
          Feito por @junioranheu.<br/><br/> 
          Todos os direitos reservados à @framerapp.`;
        Aviso.custom(msg, 20000);
    }, []);

    return (
        <section>
            <Sessao1 />
            <Sessao2 />
            <Sessao3 />
            <Sessao4 />
            <Sessao5 />
            <Sessao6 />
        </section>
    )
}
