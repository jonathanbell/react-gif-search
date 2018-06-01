import React, { Component } from 'react';

import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import GifModal from './components/GifModal';

import './css/App.css';

export default class App extends Component {
  state = {
    gifs: [],
    selectedGif: null,
    modalIsOpen: false
  };

  openModal(gif) {
    this.setState({
      modalIsOpen: true,
      selectedGif: gif
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      selectedGif: null
    });
  }

  async handleTermChange(term) {
    if (term === '') {
      console.log('GIF search term is empty.');
      return;
    }

    try {
      const result = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${term.replace(
          /\s/g,
          '+'
        )}&api_key=dc6zaTOxFJmzC`
      );

      const gifs = await result.json();

      console.log(`We searched for GIFs that look like "${term}".`);

      this.setState({ gifs: gifs.data });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div>
        <h1>Search for GIFs!</h1>
        <SearchBar onTermChange={term => this.handleTermChange(term)} />
        <GifList
          gifs={this.state.gifs}
          onGifSelect={selectedGif => this.openModal(selectedGif)}
        />
        <GifModal
          modalIsOpen={this.state.modalIsOpen}
          selectedGif={this.state.selectedGif}
          onRequestClose={() => this.closeModal()}
        />
      </div>
    );
  }
}
