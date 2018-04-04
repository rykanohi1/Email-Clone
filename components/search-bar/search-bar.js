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
    let filteredContacts = this.props.contacts.filter(
      (contact) => {
        return contact.name.indexOf(this.state.searchTerm) !== -1;
      }
    )
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
        <ActionButton title="searchButton" 
                      label="search" 
                      imgSrc={this.props.imgSrc} 
                      action={this.search}/>
      </div>
    );
  };
}