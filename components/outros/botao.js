import Styles from '../../styles/geral.module.css';

export default function Botao({ texto, url, isNovaAba }) {
    function abrirUrl() {
        // console.log(isNovaAba);

        if (isNovaAba) {
            window.open(url, '_blank');
        } else {
            window.open(url, '_self');
        }
    }

    return (
        <button className={Styles.botao} onClick={() => abrirUrl()}>{texto}</button>
    )
}
