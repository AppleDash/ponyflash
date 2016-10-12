import React from 'react';
import {render} from 'react-dom';

import FlashView from './flashview.jsx'
import FlashButtons from './flashbuttons.jsx'

import $ from 'jquery';

class PonyFlashApp extends React.Component {
    constructor() {
        super();
        this.state = {
            currentFlash: 1,
        }
    }

    stepFlash(delta) {
        var newId;

        if (delta == 0) {
            newId = 0; // TODO: 0 means random
        } else {
            newId = this.state.currentFlash + delta;
        }

        if (newId < 1) {
            newId = 1;
        } else if (newId > this.props.maxFlash) {
            newId = this.props.maxFlash;
        }

        this.setState({currentFlash: newId});
    }

    render() {
        return (
            <div>
                <FlashView flashId={this.state.currentFlash} />
                <FlashButtons currentFlash={this.state.currentFlash} stepFlash={this.stepFlash.bind(this)} />
            </div>
        )
    }
}

$.get('http://localhost:3000/swf', function(data, status, jqxhr) {
    var maxFlash = data.maxflash;

    render(<PonyFlashApp maxFlash={maxFlash} />, document.getElementById('ponyflash-app'));
});

