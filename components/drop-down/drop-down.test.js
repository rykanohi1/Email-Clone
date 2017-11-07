import React from 'react';
import {shallow} from 'enzyme';
import DropDown from './drop-down';

describe('DropDown', () => {
  test('should display a list of items when given one', ()=> {
    const expected= 3;
    const list = [{id: 1, value: 1}, {id: 2, value: 2}, {id: 3, value: 3}];
    const app = shallow(<DropDown items={list}/>);
    const actual = app.find('ul').children().length;
    expect(actual).toEqual(expected);
  });
  test('contract should fail if given invalid items', ()=> {
      expect(shallow(<DropDown items={[1,2,3]}/>)).toThrow();
  });
  test('should toggle list when clicked on', ()=>{
    
  })
});
