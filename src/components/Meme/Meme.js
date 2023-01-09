import classes from './Meme.module.css';

function Meme() {
    return (
        <div className={classes.container}>
            <form>
                <div className={classes.input__container}>
                    <input placeholder='Shut up'/>
                    <input placeholder='and take my money'/>
                </div>
                <button type='submit'>Generate</button>
            </form>
        </div>
    )
}

export default Meme;