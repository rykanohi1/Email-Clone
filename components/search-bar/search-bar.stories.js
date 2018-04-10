import React from 'react';
import './search-bar.scss';
import { storiesOf } from '@storybook/react';
import SearchBar from './search-bar';

const contacts = [{imgSrc: 'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png', 
username: 'Jonathan', 
address: 'Jonathan01@email.com'},

{imgSrc: 'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
username: 'Abby',
address: 'Abby02@email.com'},

{imgSrc: 'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
username: 'Mikey',
address: 'Mikey03@otheremail.com'}];

storiesOf('SearchBar', module)
  .add('default', () => <SearchBar contacts={contacts} imgSrc='http://icons.iconarchive.com/icons/custom-icon-design/flatastic-1/256/search-icon.png'/>);