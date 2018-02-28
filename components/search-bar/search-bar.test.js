import React from 'react';
import {shallow, mount} from 'enzyme';
import SearchBar from './search-bar';

describe ('SearchBar', () => {
        test('should display an icon if given one', () => {
                const expected = "blank";
                const app = mount (<SearchBar imgSrc="blank"/>);
                const actual = app.props().imgSrc;
                expect(actual).toEqual(expected);
        });
        
        test('should perform search action when clicked on', () => {
                const expected = true;
                const app = mount (<SearchBar/>);
                const actual = app.instance().search();
                expect(actual).toEqual(expected);
        });

        test('updateSearch method should be called when input changes', () => {
                const expected = "input changed";
                const app = mount (<SearchBar/>);
                app.find('input').value = "input changed";
                app.find('input').simulate('keydown');
                const actual = app.state.searchTerm;
                expect(actual).toEqual(expected);
        })
});