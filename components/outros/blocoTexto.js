import StylesGeral from '../../styles/geral.module.css';
import BlocoCodigo from './blocoCodigo';

export default function BlocoTexto({ titulo, texto, isTopico, codigo }) {
    return (
        <div>
            <span className={(isTopico ? StylesGeral.topico : StylesGeral.subTopico)}>{titulo}</span>
            <span className={StylesGeral.texto}>{texto}</span>

            {codigo && (
                <div className={StylesGeral.codigo}>
                    <BlocoCodigo code={codigo} />
                </div>
            )}
        </div>
    );
}