import React from 'react';
import './Track.css';

class Track extends React.Component {
    renderAction(){
        if(this.props.isRemoval){
            return <button className="Track-action"> - </button>
        }
        else{
            return <button className="Track-action"> + </button>
        }
    }
    render() {
        return(
            <div class="Track">
                <div class="Track-information">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.artist} | {this.props.album}</p>
                </div>
                {this.renderAction()}
            </div>
        );
    }
}

export default TrackList;