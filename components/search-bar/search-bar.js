import React, {Component} from 'react';
import ActionButton from '../action-button/action-button';

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state= {
            searchTerm: ''
        }
    }
    search() {
        return true;
    }

    render() { 
    return (
    <div>
        <input type="text" defaultValue={this.state.searchTerm}/>
        <ActionButton title="search" label={this.props.label} imgSrc={this.props.imgSrc} action={this.search}/>
    </div>
    );
   };
}