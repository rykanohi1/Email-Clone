import React from 'react';
import {shallow} from 'enzyme';
import SearchBar from './search-bar';

describe ('SearchBar', () => {
        test('should display an icon if given one', () => {
                const expected = true;
                const app = shallow (<SearchBar imgSrc="blank"/>);
                const actual = app.props().imgSrc;
                expect(actual).toEqual(expected);
        })
});