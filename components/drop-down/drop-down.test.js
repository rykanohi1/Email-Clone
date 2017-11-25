import React from 'react';
import {shallow, mount} from 'enzyme';
import DropDown from './drop-down';

describe('DropDown', () => {
  test('should display a list of items when given one', () => {
    const expected = 3;
    const list = [{id: 1, value: 1}, {id: 2, value: 2}, {id: 3, value: 3}];
    const app = shallow(<DropDown items={list}/>);
    const actual = app.find('ul').children().length;
    expect(actual).toEqual(expected);
  });
  test('contract should fail if given invalid items', () => {
    let hasThrown = false;
    try {
      shallow(<DropDown items={[1, 2, 3]}/>)
    } catch (e) {
      hasThrown = true;
    }
    expect(hasThrown).toEqual(true);
  });
  test('should toggle list when clicked on', () => {
    const expected = false;
    const app = mount(<DropDown label="ghjjff" items={[{id: 1, value: 2}, {id: 3, value: 4}]} />);
    app.find('.action-button').simulate('click');
    const actual = app.find('ul').hasClass('hide');
    expect(expected).toEqual(actual);
  })
});
