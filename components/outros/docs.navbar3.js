import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Styles from '../../styles/docs.navbar3.module.css';

export default function Navbar1() {
    const itens = [
        { item: 'Visão geral', url: '/devs' },
        // { item: 'Motion', url: '' },
        // { item: 'Handshake', url: '' },
        { item: 'Guias', url: '/docs/guias' },
        { item: 'Documentação da API', url: '/docs' }
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
