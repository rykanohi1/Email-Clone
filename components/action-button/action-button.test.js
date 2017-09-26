import React from 'react';
import {shallow} from 'enzyme';
import ActionButton from './action-button';

describe ('ActionButton', () => {
  test('should display an icon when provided with an image', () => {
    const expected = 1;
    const image = '';
    const app = shallow(<ActionButton imgSrc={image}/>);
    const actual = app.find('img').length;
    expect(actual).toEqual(expected);
  });

  test('root element of component should be a button', () => {
    const expected = 'button';
    const app = shallow(<ActionButton/>);
    const actual = app.node.type;
    expect(actual).toEqual(expected);
  });

});