import classes from './Header.module.css';
import Wutao from '../../img/wutao.png';

function Header() {
    return(
        <nav className={classes}>
            <div className={classes.title}>
                <img src={Wutao} alt='Logo'/>
                <h1>Meme Generator</h1>
            </div>
            <span>React Project</span>
        </nav>
    )
}

export default Header