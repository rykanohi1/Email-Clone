import React, {Component} from 'react';
import ActionButton from '../action-button/action-button';
import ContactList from '../contact-list/contact-list';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      contacts: props.contacts
    };
    this.updateSearch = this.updateSearch.bind(this);
  };

  search() {
    return true;
  };

  updateSearch(event) {
    this.setState({searchTerm: event.target.value});
  };

  filter() {
    this.state.contacts.map(
      (contact) => {
        return contact.username.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1;
      });
  }

  render() {
    let filteredContacts = this.filter();
    return (
      <div>
        <input
          className="search-filter"
          type="search"
          placeholder="search contacts"
          value={this.state.searchTerm}
          onChange={this.updateSearch}/>
        <ActionButton title="searchButton" 
                      label="search" 
                      imgSrc={this.props.imgSrc} 
                      action={this.search}/>
        <ContactList contacts={filteredContacts}/>
      </div>
    );
  };
}