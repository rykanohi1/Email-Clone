import React from 'react';
import './search-bar.scss';
import { storiesOf } from '@storybook/react';
import SearchBar from './search-bar';

storiesOf('SearchBar', module)
  .add('default', () => <SearchBar/>);