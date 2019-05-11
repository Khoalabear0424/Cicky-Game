import React, { Component } from 'react';

class ImageBlock extends Component {
    state = {}
    render() {
        return (
            <img className="m-2" onClick={() => { this.props.click(this.props.id) }} src={this.props.imgLinkSrc} alt="" />
        );
    }
}

export default ImageBlock;