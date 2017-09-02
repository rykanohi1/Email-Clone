import React from 'react';
import {render} from 'enzyme';
import Folder from './folder-list'

describe ('Folder', ()=> {
    test ('should display a list of tests', () => {
        const expected = 3;
        const app = render(<Folder-List/>);
        const actual = app.find('.folder').length;

        expect(actual).toEqual(expected);
    })
});