import React, { Component } from 'react';

class ImageBlock extends Component {
    state = {}
    render() {

        const { id, select, imgLinkSrc } = this.props;

        return (
            <img className="m-2" onClick={() => { this.props.click(id, select) }} src={imgLinkSrc} alt="" data-selectState={select} />
        );
    }
}

export default ImageBlock;