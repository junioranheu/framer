import React from 'react';
import Sessao1 from '../../components/devs/sessao1.js';
import Sessao2 from '../../components/devs/sessao2.js';
import Sessao3 from '../../components/devs/sessao3.js';

export default function Index() {
    return (
        <section>
            <Sessao1 />
            <Sessao2 />
            <Sessao3 />
        </section>
    )
}

