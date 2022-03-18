import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Styles from '../../styles/docs.navbar3.module.css';

export default function Navbar1() {
    const itens = [
        { item: 'Visão geral', url: '/developers' },
        { item: 'Movimento', url: '/motion' },
        { item: 'Handshake', url: '/developers/handshake' },
        { item: 'Guias', url: '/docs/guides' },
        { item: 'Documentação', url: '/docs' }
    ]

    const { asPath } = useRouter();
    const [urlAtual, setUrlAtual] = useState('');
    useEffect(() => {
        // console.log(asPath);
        setUrlAtual(asPath);
    }, [asPath]);

    // console.log(itens);
 
    return (
        <nav className={Styles.navbar}>
            {itens.map((item, i) => (
                <Link key={i} href={item.url}>
                    <a className={`opacidade-hover ${(urlAtual === item.url ? 'opacidade' : '')}`}>{item.item}</a>
                </Link>
            ))}
        </nav>
    )
}
