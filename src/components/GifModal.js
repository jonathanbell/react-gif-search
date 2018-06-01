import React, { Component } from 'react';
import Modal from 'react-modal';

export default class GifModal extends Component {
  render() {
    // Check that a GIF has been selected. If one has not been selected,
    // just return an empty `<div>`
    if (!this.props.selectedGif) {
      return <div />;
    }

    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onRequestClose={() => this.props.onRequestClose()}
        ariaHideApp={false}
      >
        <div className="gif-modal">
          <img
            alt="Selected GIF"
            src={this.props.selectedGif.images.original.url}
          />
          {this.props.selectedGif.source && (
            <p>
              Source:
              <a target="_blank" href={this.props.selectedGif.source}>
                {this.props.selectedGif.source}
              </a>
            </p>
          )}
          <button onClick={() => this.props.onRequestClose()}>Close</button>
        </div>
      </Modal>
    );
  }
}
