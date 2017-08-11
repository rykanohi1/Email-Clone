import React from 'react';
import {shallow} from 'enzyme';
import Folder from './folder'

describe ('Folder', ()=> {
    test ('should display a number', () => {
        const testValue = 'title';
        const app = shallow(<Folder label={testValue}/>);

        expect(app.text()).tobe(testValue);
    })
});