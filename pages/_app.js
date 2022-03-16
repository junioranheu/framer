import React, { Fragment } from 'react';
import Footer from '../components/outros/footer';
import '../fonts/GTWalsheim.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
        <Component {...pageProps} />
        <Footer/>
    </Fragment>
  )
}

