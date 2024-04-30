'use client'
import { useState } from "react"
import styles from "./styles.css"

export default function MusicBox(props){
    const [isHovered, setisHovered] = useState(false);
    return (
        <div className="music-grid">
            <div className="image-box">
                <img src={props.source} alt="song" className="music-image" onClick={
                    () => {
                        window.open(props.link, '_blank');
                    }
                } onMouseEnter={
                    () => {
                        setisHovered(true);
                    }
                } onMouseLeave={
                    () =>{
                        setisHovered(false);
                    }
                }/>
                {
                    isHovered? <img src= 'play_button.png' className='play-button'/> : <></>
                }
            </div>
        <div className="music-box-info">
              <h1 className='song-name'>{props.name}</h1>
              <p className="music-supp-text">on</p>
              <h1 className="album">{props.album}</h1>
              <p className="music-supp-text">by</p>
              <p className="artist-name">{props.artist}</p>
              <p className="lyric">{props.lyrics}</p>
            </div>
        </div>
    )
}

