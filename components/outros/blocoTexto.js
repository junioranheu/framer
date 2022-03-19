import { loremIpsum } from 'lorem-ipsum';
import StylesGeral from '../../styles/geral.module.css';
import BlocoCodigo from './blocoCodigo';

export default function BlocoTexto({ titulo, texto, isTopico, id, codigo, iframe }) {
    return (
        <div id={id}>
            <span className={(isTopico ? StylesGeral.topico : StylesGeral.subTopico)}>{titulo}</span>
            <span className={StylesGeral.texto}>{texto ? texto : loremIpsum({ count: 3 })}</span>

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
        </div>
    );
}