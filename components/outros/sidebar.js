import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Styles from '../../styles/sidebar.module.css';

export default function Sidebar({ itens, isSidebarEsquerda, justify }) {
    // console.log(itens);
    const { asPath } = useRouter();
    const [urlAtual, setUrlAtual] = useState('');

    useEffect(() => {
        // console.log(asPath);
        setUrlAtual(asPath);
    }, [asPath]);

    function handleScrollAnchor(id) {
        // console.log(id);
        var elemento = document.getElementById(id);

        // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView;
        elemento.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section className={Styles.principal} style={{ justifyContent: justify }}>
            <div className={Styles.wrapper}>
                {/* Se for esquerda, exiba a mensagem padrão */}
                {!isSidebarEsquerda && (
                    <div className={Styles.divItem}>
                        <span className={Styles.item}>
                            Nessa página
                        </span>
                    </div>
                )}

                {/* Iterar itens */}
                {itens.map((item, i) => (
                    <div className={Styles.divItem} key={i} >
                        {item.isTopico ? (
                            isSidebarEsquerda ? (
                                <span className={`${Styles.item} ${(i > 0 && isSidebarEsquerda ? Styles.itemMargemTop : '')}`} key={i}>
                                    {item.titulo}
                                </span>
                            ) : (
                                <a key={i} onClick={() => handleScrollAnchor(item.id)} className={`opacidade-hover ${Styles.subItem}`}>
                                    {item.titulo}
                                </a>
                            )
                        ) : (
                            // isSidebarEsquerda === true: significa que o item fica na sidebar da esquerda, o link é um <Link>
                            // se for else, o sidebar é da direita, ou seja, o link é um anchor (handleScrollAnchor(id));
                            isSidebarEsquerda ? (
                                <Link key={i} href={item.url}>
                                    <a className={`opacidade-hover ${Styles.subItem} ${(urlAtual === item.url ? 'cor-principal' : '')}`}>
                                        {item.titulo}
                                    </a>
                                </Link>
                            ) : (
                                <a key={i} onClick={() => handleScrollAnchor(item.id)} className={`opacidade-hover ${Styles.subItem} ${Styles.subItemPadding}`}>
                                    {item.titulo}
                                </a>
                            )
                        )}
                    </div>
                ))}
            </div>
        </section >
    )
}
