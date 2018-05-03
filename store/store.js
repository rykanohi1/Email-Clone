import React from 'react';
import {createStore, combineReducers} from 'redux';
import contactReducer from './reducers/reducer-contacts-stories';

const Reducers = combineReducers({
    contacts: contactReducer
});
const storeData = createStore(Reducers); 
