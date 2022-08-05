import React from 'react';
import Musics from './Musics';

const Music = (props) => {

    // let playlist = [
    //     {avtor : 'Nike Minah', trek : 'nice as!'},
    //     {avtor : 'Bob Dylan', trek : 'Knock knock'},
    //     {avtor : 'Red cheil the papers', trek : 'Californication'}
    // ]
    
        let newPlaylist = props.state.playlist.map(p => (<Musics avtor={p.avtor} trek={p.trek}/>))
    
    return (
        <div>
            <p>I am music, Tuc Tuc Tuc</p>
            {newPlaylist}
        </div>
    )
}

export default Music;