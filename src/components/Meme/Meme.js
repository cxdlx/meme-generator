import classes from './Meme.module.css';
import memesData from '../../memesData';
import {useState} from 'react';

function Meme() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: ''
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url   
        }))
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
            <img className={classes.meme__Image} src={meme.randomImage} alt='meme'/>
        </div>
    )
}

export default Meme;