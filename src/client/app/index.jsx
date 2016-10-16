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
        };
        this.stepFlash = this.stepFlash.bind(this);
    }

    componentDidMount() {
        $.get(this.props.apiUrl + "/swf", (function(result) {
            this.setState({
                currentFlash: this.state.currentFlash,
                maxFlash: result.maxflash
            });
        }).bind(this));
    }

    stepFlash(delta) {
        var newId;

        if (delta == 0) {
            newId = Math.floor(Math.random() * (this.state.maxFlash - 1) + 1);
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
                <FlashButtons stepFlash={this.stepFlash.bind(this)} />
            </div>
        )
    }
}

render(<PonyFlashApp apiUrl="http://localhost:3000" />, document.getElementById('ponyflash-app'));
