import React from 'react';
import ActionButton from './action-button';

import { storiesOf } from '@storybook/react';


storiesOf('ActionButton', module)
  .add('', () => <LeftRightLayout
    className="test"
    children={testContents}
  />);
