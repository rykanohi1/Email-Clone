import React from 'react';
import ActionButton from '../action-button/action-button';

export default ({imgSrc}); 
class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state= {
            hint: 'search mail'
        }
    }
   render() { 
    return (
    <div>
        <input type="text" defaultValue={this.state.hint}/>
        <ActionButton title="search" imgSrc={this.props.imgSrc} action={search()}/>
    </div>
    );
   };
}