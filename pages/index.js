import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';
import Sessao1 from '../components/landingPage/sessao1.js';
import useOnScreen from '../hooks/useOnScreen.js';
const Sessao2 = dynamic(() => import('../components/landingPage/sessao2.js'));
const Sessao3 = dynamic(() => import('../components/landingPage/sessao3.js'));
const Sessao4 = dynamic(() => import('../components/landingPage/sessao4.js'));
const Sessao5 = dynamic(() => import('../components/landingPage/sessao5.js'));
const Sessao6 = dynamic(() => import('../components/landingPage/sessao6.js'));

export default function Index() {
    // Lazy loading: https://betterprogramming.pub/lazy-loading-in-next-js-simplified-435681afb18a
    const refSessao2 = useRef();
    const lazySessao2 = useOnScreen(refSessao2);
    const [isLazySessao2, setIsLazySessao2] = useState(false);

    const refSessao4 = useRef();
    const lazySessao4 = useOnScreen(refSessao4);
    const [isLazySessao4, setIsLazySessao4] = useState(false);

    const refSessao6 = useRef();
    const lazySessao6 = useOnScreen(refSessao6);
    const [isLazySessao6, setIsLazySessao6] = useState(false);

    useEffect(() => {
        if (!isLazySessao2) {
            setIsLazySessao2(lazySessao2);
        }

        if (!isLazySessao4) {
            setIsLazySessao4(lazySessao4);
        }

        if (!isLazySessao6) {
            setIsLazySessao6(lazySessao6);
        }
    }, [lazySessao2, lazySessao4, lazySessao6])

    return (
        <section>
            <Sessao1 />

            <div ref={refSessao2} style={{ backgroundColor: 'pink' }}>
                {isLazySessao2 && (<Sessao2 />)}
            </div>

            <Sessao3 />

            <div ref={refSessao4}>
                {isLazySessao4 && (<Sessao4 />)}
            </div>

            <Sessao5 />

            <div ref={refSessao6}>
                {isLazySessao6 && (<Sessao6 />)}
            </div>
        </section>
    )
}
