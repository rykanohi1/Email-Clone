import React from 'react';
import {shallow, render, mount} from 'enzyme';
import ContactList from './contact-list';

describe('ContactList', () => {
    test('should display given profile picture', () => {
        const contacts = [{username: "test 1", address: "blank", imgSrc: "image"},
                          {username: "test 2", address: "blank", imgSrc: "image"},
                          {username: "test 3", address: "blank", imgSrc: "image"}];
        const expected = "image";
        const app = mount(<ContactList contacts={contacts}/>);
        const actual = app.find('.left-right-layout.contact.contact-profile').imgSrc;
        expect(actual).toEqual(expected);
    })
});