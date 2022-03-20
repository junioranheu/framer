import StylesGeral from '../../styles/geral.module.css';

export default function SpanComEfeitoAtras({ texto }) {
    return (
        <span className={StylesGeral.efeitoTextoGrande}>{texto}</span>
    );
}