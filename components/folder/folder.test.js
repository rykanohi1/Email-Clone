import React from 'react';
import {shallow} from 'enzyme';
import Folder from './folder'

describe ('Folder', ()=> {
    test ('should display the title of the folder', () => {
        const expected = 'title';
        const app = shallow(<Folder label={expected}/>);
        const actual = app.find('.folder-title').text().trim();

        expect(actual).toEqual(expected);
    })
});