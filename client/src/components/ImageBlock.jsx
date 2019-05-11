import React, { Component } from 'react';

class ImageBlock extends Component {
    state = {}
    render() {
        return (
            <img className="m-2" src={this.props.imgLinkSrc} alt="" />
        );
    }
}

export default ImageBlock;