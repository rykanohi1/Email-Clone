import React from 'react';

import { storiesOf } from '@storybook/react';
import { DropDown } from './drop-down';

const items = [{id:'slot 1', value:{title:'slot 1',
                                    label:'says hello',
                                    action:alert('Hello')}}, 
               {id:'slot 2', value:{title:'slot 2',
                                    label:'conversation continues',
                                    action:alert('How nice to see you!')}}, 
               {id:'slot 3', value:{title:'slot 3',
                                    label:'says goodbye',
                                    action:alert('goodbye!')}}
                                  ];

storiesOf('DropDown', module)
  .add('with text', () => <DropDown label='text drop-down' items={items}/>)