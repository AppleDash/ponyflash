import React from 'react';

export default class FlashButtons extends React.Component {
    nextFlash() {
        this.props.stepFlash(1);
    }

    prevFlash() {
        this.props.stepFlash(-1);
    }

    randomFlash() {
        this.props.stepFlash(0);
    }

    render() {
        return (
            <div id="flash-buttons">
                <a href="javascript:void(0)" onClick={this.nextFlash.bind(this)}>Next</a> |
                <a href="javascript:void(0)" onClick={this.randomFlash.bind(this)}>Random</a> |
                <a href="javascript:void(0)" onClick={this.prevFlash.bind(this)}>Previous</a>
            </div>
        )
    }
}
