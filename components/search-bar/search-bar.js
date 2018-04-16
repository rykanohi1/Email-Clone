import React, {Component} from 'react';
import ActionButton from '../action-button/action-button';
import ContactList from '../contact-list/contact-list';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
    this.showContacts = this.showContacts.bind(this);
    this.state = {
      searchTerm: '',
      contacts: props.contacts || [],
      isVisible: false
    };
  };

  search() {
    return true;
  };

  showContacts() {
    this.setState(state => ({
      isVisible: !state.isVisible
    }));
  };

  updateSearch(event) {
    this.setState({searchTerm: event.target.value});
  };

  render() {
    let filteredContacts = this.state.contacts.filter(
      (contact) => {
        return contact.username.toLowerCase().includes(this.state.searchTerm.toLowerCase());
      });
    return (
      <div className="search-bar" onBlur={this.showContacts}>
        <input
          className="search-filter"
          type="search"
          placeholder="search contacts"
          value={this.state.searchTerm}
          onChange={this.updateSearch}
          onKeyUp={this.showContacts}
        />
        <ActionButton title="searchButton" 
                      label="search" 
                      imgSrc={this.props.imgSrc} 
                      action={this.search}/>           
        <ContactList className={this.state.isVisible ? 'show' : 'hide'} contacts={filteredContacts}/>
      </div>
    );
  };
}