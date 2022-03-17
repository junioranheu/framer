import Styles from '../../styles/doc.navbar1.module.css';
import Seta from '../svg/seta';

export default function Navbar1() {
    return (
        <nav className={Styles.navbar}>
            <span>Want to build websites in no-time?</span>
            <span>Announcing the new Framer Beta.</span>
            <span>Learn more <Seta /></span>
        </nav>
    )
}
