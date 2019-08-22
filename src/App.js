import React from "react";

import SearchBar from "./components/Search-Bar";
import TrackList from "./components/Track-List";
import MusicPlayer from "./components/MusicPlayer";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.playerRef = React.createRef()
    this.state = {
      tracks: null,
      searchTerm: "Rihanna"
    };
  }

  componentDidMount() {
    this.searchForMusic()

  }

  onPlay = (previewUrl) => {
    const player = this.playerRef;
    player.current.src = previewUrl;
    player.current.play();
  }

  onPause = () => {
    const player = this.playerRef;
    player.current.pause();
    player.current.src = "";
  }

  onSearchInputChange = e => {
    e.persist();
    const searchTerm = e.target.value;
    this.setState({ searchTerm }, () => {
      if (searchTerm.length > 2) {
        this.searchForMusic();
      }
    });
  };

  searchForMusic = (searchTerm = this.state.searchTerm) => {
    console.log("Searching ", searchTerm);
    fetch(`https://dci-fbw12-search-itunes.now.sh/?term=${searchTerm}`)
      .then(response => response.json())
      .then(data => this.setState({ tracks: data.results }));
  };

  render() {
    const { tracks, searchTerm } = this.state;
    return (
      <div className="w-100">
        <div className="d-flex flex-row-reverse justify-content-between m-2" >
          <SearchBar
          className="col-sm col-md col-xl"
            onSearchInputChangeHandler={this.onSearchInputChange}
            searchTerm={searchTerm}
          />
          <div className="col-sm col-md col-xl" >
            <h1>The sound of React</h1>
          </div>
        </div>
        {tracks ? (
          <TrackList tracks={tracks} onPlay={(i) => this.onPlay(i)} onPause={() => this.onPause()} />
        ) : (
            <h1>The sound of React</h1>
          )}
        <MusicPlayer playerRef={this.playerRef} />
      </div>
    );
  }
}

export default App;