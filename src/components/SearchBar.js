import React, { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';

export default class SearchBar extends Component {
  state = { term: '' };

  onInputChange(term) {
    this.setState({ term });
    this.props.onTermChange(term);
  }

  render() {
    return (
      <div className="search">
        {/* https://www.npmjs.com/package/react-debounce-input */}
        <DebounceInput
          minLength={2}
          debounceTimeout={1111}
          onChange={event => this.onInputChange(event.target.value)}
          placeholder="Enter a search term for that special GIF..."
        />
      </div>
    );
  }
}
