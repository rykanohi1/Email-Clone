import React, {Component} from 'react';
import ActionButton from '../action-button/action-button';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.updateSearch = this.updateSearch.bind(this);
  };

  search() {
    return true;
  };

  updateSearch(event) {
    this.setState({searchTerm: event.target.value});
  };

  render() {
    return (
      <div>
        <input
          className="search-filter"
          type="search"
          value={this.state.searchTerm}
          onChange={this.updateSearch}/>
        <ActionButton title="searchButton" label="search" imgSrc={this.props.imgSrc} action={this.search}/>
        <div>
          {this.state.searchTerm}
        </div>
      </div>
    );
  };
}