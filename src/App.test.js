import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react'
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom/extend-expect';
import App from './App';


const mockStore = configureStore([thunk]);
export const mockState = {
    pokemon: 29
  }

const store = mockStore(mockState);

describe('Testing App', () => {
    test('render App', () => {
        render(
            <Provider store={store}>
                <App/>
            </Provider>
            );
    });
});