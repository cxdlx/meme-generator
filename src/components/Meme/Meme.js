import classes from './Meme.module.css';
import memesData from '../../memesData';

function Meme() {

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }
    
    return (
        <div className={classes.container}>
            <div className={classes.memes__form}>
                <div className={classes.input__container}>
                    <input type='text' placeholder='Shut up'/>
                    <input type='text' placeholder='and take my money'/>
                </div>
                <button onClick={getMemeImage}>Generate</button>
            </div>
        </div>
    )
}

export default Meme;