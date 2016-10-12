import React from 'react';
import {render} from 'react-dom';

import FlashView from './flashview.jsx'
import FlashButtons from './flashbuttons.jsx'

class PonyFlashApp extends React.Component {
    constructor() {
        super();
        this.state = {
            currentFlash: 1,
            maxFlash: 1000
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
        } else if (newId > this.state.maxFlash) {
            newId = this.state.maxFlash;
        }

        this.setState({currentFlash: newId, maxFlash: this.state.maxFlash});
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

render(<PonyFlashApp />, document.getElementById('ponyflash-app'));
