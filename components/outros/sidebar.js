import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Styles from '../../styles/sidebar.module.css';

export default function Sidebar({ itens, justify }) {
    // console.log(itens);
    const { asPath } = useRouter();
    const [urlAtual, setUrlAtual] = useState('');

    useEffect(() => {
        // console.log(asPath);
        setUrlAtual(asPath);
    }, [asPath]);

    function handleScrollAnchor(url) {
        console.log(url);
        var element = document.getElementById(url);
        // element.scrollIntoView();
    }

    return (
        <section className={Styles.principal} style={{ justifyContent: justify }}>
            <div className={Styles.wrapper}>
                {itens.map((item, i) => (
                    <div className={Styles.divItem} key={i} >
                        <span className={`${Styles.item} ${i > 0 ? Styles.itemMargemTop : ''}`} key={i}>
                            <div dangerouslySetInnerHTML={{ __html: item.item }} />
                        </span>

                        {item.subItens.map((subItem, i2) => (
                            subItem.url && (
                                // isSidebarDireita === true: significa que a sidebar fica na direita, e os links devem ser scroll anchor;
                                item.isSidebarDireita ? (
                                    <a key={i2} onClick={() => handleScrollAnchor(subItem.url)} className={`opacidade-hover ${Styles.subItem} ${Styles.itemPadding}`}>
                                        {subItem.item}
                                    </a>
                                ) : (
                                    <Link key={i2} href={subItem.url}>
                                        <a className={`opacidade-hover ${Styles.subItem} ${(urlAtual === subItem.url ? 'cor-principal' : '')}`}>
                                            {subItem.item}
                                        </a>
                                    </Link>
                                )
                            )
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}
