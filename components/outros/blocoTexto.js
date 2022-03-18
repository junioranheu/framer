import { loremIpsum } from 'lorem-ipsum';
import StylesGeral from '../../styles/geral.module.css';
import BlocoCodigo from './blocoCodigo';

export default function BlocoTexto({ titulo, texto, codigo }) {
    return (
        <div>
            <span className={StylesGeral.topico}>{titulo}</span>
            <span className={StylesGeral.texto}>
                {loremIpsum({ count: 3 })}
            </span>

            {codigo && (
                <div className={StylesGeral.codigo}>
                    <BlocoCodigo code={codigo} />
                </div>
            )}
        </div>
    );
}