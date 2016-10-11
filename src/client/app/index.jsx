import React from 'react';
import {render} from 'react-dom';

import {FlashView} from './flashview.jsx'
import {FlashButtons} from './flashbuttons.jsx'

class PonyFlashApp extends React.Component {
    constructor() {
        super();
        this.state = {
            currentFlash: 1
        }
    }

    onFlashChanged(newId) {
        console.log('Changing flash to #' + newId);
        this.setState({currentFlash: newId});
    }

    render() {
        return (
            <div>
                <FlashView flashId={this.state.currentFlash}/>
                <FlashButtons currentFlash={this.state.currentFlash} onFlashChanged={this.onFlashChanged.bind(this)} />
            </div>
        )
    }
}

render(<PonyFlashApp/>, document.getElementById('ponyflash-app'));
