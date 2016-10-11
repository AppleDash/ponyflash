import React from 'react';

export class FlashView extends React.Component {
    render() {
        return <div id="flash-container">
            <object id="flash" type="application/x-shockwave-flash" data="https://dashie.in/f/swfproxy.php?swf=2640"></object>
        </div>;
    }
}
