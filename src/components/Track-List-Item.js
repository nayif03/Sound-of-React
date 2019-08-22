import React from "react";

const TrackListItem = props => {
  const {
    trackName,
    artistName,
    collectionName,
    trackPrice,
    currency,
    trackId,
    artworkUrl100,
    releaseDate,
    previewUrl

  } = props.trackInfo;

  return (

    <div className="d-flex" id="trackLayout">
      <div className="col-sm col-md col-xl" >
        <img src={artworkUrl100} alt={trackName + "- Cover"} />
      </div>
      <div className="col-sm col-md col-xl" >{trackName}</div>
      <div className="col-sm col-md col-xl" >{artistName}</div>
      <div className="col-sm col-md col-xl" id="mobilView" >
        <p>{collectionName}</p>
      </div>
      <div className="col-sm col-md col-xl" id="mobilView">
        {trackPrice === -1 ? "Only album" : trackPrice}
        {currency === "USD" ? (trackPrice === -1 ? "" : "$") : "€"}
      </div>
      <div className="col-sm col-md col-xl" id="mobilView">
        {new Date(releaseDate).toLocaleDateString()}
      </div>
      <div className="col-sm col-md col-xl" >
        <i onClick={() => props.onPlay(previewUrl)} className="fas fa-play" id={trackId} />
        <i onClick={() => props.onPause(previewUrl)} className="fas fa-pause" id={trackId} />
      </div>
    </div>
  );
};

export default TrackListItem;