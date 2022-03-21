import React, { useEffect } from 'react';
import Styles from '../styles/landingPage.module.css';

export default function Index() {
    useEffect(() => {
        document.title = 'Framer';
    }, []);

    return (
        <span className={Styles.teste}>Oi</span>
    )
}
