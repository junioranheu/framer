import Styles from '../../styles/docs.navbar1.module.css';
import FraseAleatoria from '../../utils/outros/docs.fraseAleatoriaNavbar1';
import EmojiAleatorio from '../../utils/outros/emojiAleatorio';
import Seta from '../svg/seta';

export default function Navbar1() {
    return (
        <nav className={Styles.navbar}>
            <span>Projeto para estudar React.js e Next.js.</span>

            {console.log(process.env.NODE_ENV)}

            {/* Para que eu não fique vendo a mensagem mudar a cada F5 em dev... */}
            {
                process.env.NODE_ENV === 'development' ? (
                    <span>Em desenvolvimento!</span>
                ) : (
                    <span><FraseAleatoria />&nbsp;<EmojiAleatorio /></span>
                )
            }

            <span className='pointer cor-principal-hover' onClick={() => { window.open('https://github.com/junioranheu', '_blank'); }}>@junioranheu <Seta /></span>
        </nav>
    )
}
