import React from "react";

import TrackListItem from "./Track-List-Item";
import TrackCounter from "./Track-Counter";

const TrackList = props => {
  const { tracks, onPlay, onPause } = props;
  console.log(tracks);
  return (
    <>
      <TrackCounter tracksNum={tracks.length} />
      <div className="d-flex my-5" id="headings">
        <div className="col-sm col-md col-xl" >Cover</div>
        <div className="col-sm col-md col-xl" id="track">Track</div>
        <div className="col-sm col-md col-xl" id="artist" title="sort order">Artist</div>
        <div className="col-sm col-md col-xl" id="album">Album</div>
        <div className="col-sm col-md col-xl" >Release date</div>
        <div className="col-sm col-md col-xl" id="price" title="Sort prices">Price</div>
        <div className="col-sm col-md col-xl" >Preview</div>
      </div>
      {tracks.map((trackInfo, index) => (
        <TrackListItem trackInfo={trackInfo} onPlay={onPlay} onPause={onPause} key={index} />
      ))}
    </>
  );
};

export default TrackList;