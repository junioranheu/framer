import { loremIpsum } from 'lorem-ipsum';
import Image from 'next/image';
import StylesGeral from '../../styles/geral.module.css';
import BlocoCodigo from './blocoCodigo';

export default function BlocoConteudo({ titulo, texto, isTopico, id, codigo, iframe, imagem }) {
    return (
        <div id={id}>
            <span className={(isTopico ? StylesGeral.topico : StylesGeral.subTopico)}>{titulo}</span>
            <span className={StylesGeral.texto}>
                {(texto ? texto : loremIpsum({ count: 3 }))}
            </span>

            {codigo && (
                <div className={StylesGeral.codigo}>
                    <BlocoCodigo code={codigo} />
                </div>
            )}

            {iframe && (
                <div className={StylesGeral.divIframeSandBox}>
                    <iframe loading='lazy' title='Examples' src={iframe}></iframe>
                </div>
            )}

            {imagem && (
                <div className={StylesGeral.divImagemBlocoConteudo}>
                    <Image src={imagem} alt='' />
                </div>
            )}
        </div>
    );
}