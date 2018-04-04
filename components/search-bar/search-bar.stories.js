import React from 'react';
import './search-bar.scss';
import { storiesOf } from '@storybook/react';
import SearchBar from './search-bar';

storiesOf('SearchBar', module)
  .add('default', () => <SearchBar imgSrc='http://icons.iconarchive.com/icons/custom-icon-design/flatastic-1/256/search-icon.png'/>);