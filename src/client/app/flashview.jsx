import React from 'react';

export default class FlashView extends React.Component {
    render() {
        var flashUrl = 'https://dashie.in/f/swfproxy.php?swf=' + this.props.flashId;
        return (
            <div id="flash-container">
                <object id="flash" type="application/x-shockwave-flash" data={flashUrl} width="804" height="755"></object>
            </div>
        )
    }
}
