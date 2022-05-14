import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../util/Spotify';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchResults: [{name:'name1',artist:'artist1',album:'album1',id:1},{ name: 'name2', artist: 'artist2', album: 'album2',id:2 },{ name: 'name3', artist: 'artist3', album: 'album3',id:3 }],
            playlistName: "Mellody",
            playlistTracks: [{ name: 'Playlistname1', artist: 'Playlistartist1', album: 'Playlistalbum1', id: 4 }, { name: 'Playlistname2', artist: 'Playlistartist2', album: 'Playlistalbum2', id: 5 }, { name: 'Playlistname3', artist: 'Playlistartist3', album: 'Playlistalbum3', id: 6 }]
        }
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
    }

    addTrack(track){
        let tracks = this.state.playlistTracks;
        if(tracks.find(savedTracks => savedTracks.id === track.id)){
            return;
        }
        tracks.push(track);
        this.setState({playlistTracks: tracks});

    }

    removeTrack(track){
        let tracks = this.state.playlistTracks;
        if(tracks.find(savedTracks => savedTracks.id === track.id)){
            tracks.pop(track);
        }
        this.setState({playlistTracks: tracks});
    }
    
    updatePlaylistName(name){
        this.setState({playlistName: name});
    }

    savePlaylist(){
        const trackUris = this.state.playlistTracks.map(track => track.uri);
    }
    search(term){
        Spotify.search(term).then(searchResults => {
            this.setState({ searchResults: searchResults });
        })
    }

    render() {
        return (
        <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
                    <SearchBar onSearch={this.search}/>
                <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
                        <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
                </div>
            </div>
        </div>
        );
    }
}

export default App;