import React, {Component} from 'react';
import ActionButton from '../action-button/action-button';
import ContactList from '../contact-list/contact-list';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      contacts: props.contacts || [],
      isVisible: false
    };
    this.updateSearch = this.updateSearch.bind(this);
  };

  search() {
    return true;
  };

  showContacts(event) {
    this.setState({isVisible: !isVisible});
  }

  updateSearch(event) {
    this.setState({searchTerm: event.target.value});
  };

  render() {
    let filteredContacts = this.state.contacts.filter(
      (contact) => {
        return contact.username.toLowerCase().includes(this.state.searchTerm.toLowerCase());
      });
    return (
      <div>
        <input
          className="search-filter"
          type="search"
          placeholder="search contacts"
          value={this.state.searchTerm}
          onChange={this.updateSearch}
          onClick={this.showContacts}/>
        <ActionButton title="searchButton" 
                      label="search" 
                      imgSrc={this.props.imgSrc} 
                      action={this.search}/>
        <div className={this.state.isVisible ? 'show' : 'hide'}>              
        <ContactList contacts={filteredContacts}/>
        </div>
      </div>
    );
  };
}