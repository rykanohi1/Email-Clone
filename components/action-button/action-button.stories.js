import React from 'react';
import ActionButton from './action-button';
import './action-button.stories.css';

import { storiesOf } from '@storybook/react';

// Data

// Fluid Interface -> method returns instance of called object
storiesOf('ActionButton', module)
  .add('with text', () => <ActionButton label='label'/>)
  .add('with image', () => <ActionButton imgSrc='https://material.io/guidelines/static/spec/images/callouts/default.svg'/>)
  .add('with text, image, and popup', () => <ActionButton title='performs an action' label='label' imgSrc='https://material.io/guidelines/static/spec/images/callouts/default.svg'/>);

