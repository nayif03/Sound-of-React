import React from 'react'

const TrackCounter = (props) => {
    return (
        <p>
            <i className="fas fa-music"></i>
            <span className="counter">{props.tracksNum} tracks</span> from iTunes
        </p>
    )

}

export default TrackCounter