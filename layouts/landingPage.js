import React, { Fragment, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Aviso } from '../components/outros/aviso';
import Navbar1 from '../components/outros/docs.navbar1';
import Navbar2 from '../components/outros/docs.navbar2';
import Footer from '../components/outros/footer';
import Styles from '../styles/geral.module.css';
import EmojiAleatorio from '../utils/outros/emojiAleatorio';

export default function LandingPage({ Component, pageProps }) {
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

    return (
        <Fragment>
            <main className='main'>
                <ToastContainer />

                <Navbar1 />
                <Navbar2 />

                <section className={Styles.fundo}>
                    <Component {...pageProps} />
                </section>

                <Footer />
            </main>
        </Fragment >
    )
}

