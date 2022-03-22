import React from 'react';
import Sessao1 from '../components/landingPage/sessao1.js';
import Sessao2 from '../components/landingPage/sessao2.js';
import Sessao3 from '../components/landingPage/sessao3.js';
import Sessao4 from '../components/landingPage/sessao4.js';

export default function Index() {
    return (
        <section>
            <Sessao1 />
            <Sessao2 />
            <Sessao3 />
            <Sessao4 />
        </section>
    )
}
