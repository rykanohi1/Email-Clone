import React from 'react';
import shallow from 'enzyme';
import SearchBar from './search-bar';

describe ('SearchBar', () => {
        test('should display a default search value in the text bar if given one', () => {
                const expected = true;
                const app = shallow (<SearchBar imgSrc="blank"/>);
                const actual = app.find('input').defaultValue
                expect(actual).toEqual(expected);
        })
});