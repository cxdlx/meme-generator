import classes from './Header.module.css';
import Wutao from '../../img/wutao.png';

function Header() {
    return(
        <nav className={classes}>
            <div className={classes.title}>
                <a href='https://github.com/cxdlx'><img src={Wutao} alt='Logo'/></a>
                <h2>Meme Generator</h2>
            </div>
            <span>React Project</span>
        </nav>
    )
}

export default Header