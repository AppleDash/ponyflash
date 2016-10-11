import React from 'react';

export class FlashButtons extends React.Component {
    nextFlash() {
        this.props.onFlashChanged(this.props.currentFlash + 1);
    }

    prevFlash() {
        this.props.onFlashChanged(this.props.currentFlash - 1);
    }
    render() {
        return (
            <div id="flash-buttons">
                <button className="btn btn-primary" onClick={this.nextFlash.bind(this)}>Next</button><button className="" onClick={this.prevFlash.bind(this)}>Previous</button>
            </div>
        )
    }
}
