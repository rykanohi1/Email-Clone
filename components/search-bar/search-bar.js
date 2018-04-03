import React, {Component} from 'react';
import ActionButton from '../action-button/action-button';

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state= {
            searchTerm: ''
        }
    };
    
    search() {
        return true;
    };

    updateSearch(event) {
        this.setState({searchTerm: search-filter.value});
    };

    render() { 
    return (
    <div>
        <input className="search-filter" type="search" input={this.updateSearch.bind(this)}/>
        <ActionButton title="searchButton" label="search" imgSrc={this.props.imgSrc} action={this.search}/>
    </div>
    );
   };
}