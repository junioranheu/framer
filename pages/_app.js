import React, { Fragment } from 'react';
import '../fonts/GTWalsheim.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
        <Component {...pageProps} />
    </Fragment>
  )
}

