import React, { Component } from 'react';

class ImageBlock extends Component {
    render() {
        const { id, select, imgLinkSrc } = this.props;
        return (
            <img className="m-2" onClick={() => { this.props.click(id, select) }} src={imgLinkSrc} alt="" data-selectstate={select} />
        );
    }
}

export default ImageBlock;