import React from 'react';
import Musics from './Musics';

const Music = (props) => {

        let newPlaylist = props.musicPage.playlist.map(p => (
            <Musics
            avtor={p.avtor}
            trek={p.trek}
            />
        ))
    
    return (
        <div>
            <p>I am music, Tuc Tuc Tuc</p>
            {newPlaylist}
        </div>
    )
}

export default Music;