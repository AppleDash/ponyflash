import React from 'react';
import {render} from 'react-dom';

import {FlashView} from './flashview.jsx'

class PonyFlashApp extends React.Component {
    render() {
        return <FlashView/>;
    }
}

render(<PonyFlashApp/>, document.getElementById('ponyflash-app'));
